const { Router } = require('express');
const router = Router();

const heroesController = require('../controllers/heroes-controller');
const favoritesController = require('../controllers/favorite-controller');

router.get('/', heroesController.getHeroes);

router.get('/hero/:name', heroesController.getHeroByName);

//router.get('/favorites/:staffname', heroesController.);

//router.delete('/favorites/:name', );

module.exports = router;