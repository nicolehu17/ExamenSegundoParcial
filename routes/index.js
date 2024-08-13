var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema de Gestión de Materias' });
});

/* GET materias listing. */
router.get('/materias', async function(req, res, next) {
  try {
    const materias = await db.Materia.findAll({ include: { model: db.Area, as: 'Area' } });
    res.render('materias/index', { materias });
  } catch (error) {
    next(error);
  }
});

/* GET create materia form. */
router.get('/materias/create', async function(req, res, next) {
  try {
    const areas = await db.Area.findAll();
    res.render('materias/create', { areas });
  } catch (error) {
    next(error);
  }
});

/* POST create materia. */
router.post('/materias/create', async function(req, res, next) {
  try {
    const { nombre, créditos, descripcion, id_area } = req.body;
    await db.Materia.create({
      nombre,
      créditos,
      descripcion,
      id_area
    });
    res.redirect('/materias');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
