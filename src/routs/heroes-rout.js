const { Router } = require('express');
const router = Router();

const heroesController = require('../controllers/heroes-controller');

router.get('/', heroesController.getHeroes);

//router.get('/:name', heroesController.getHeroByName);
router.get('/:name/:fav?/:username?', heroesController.getHeroByName);

module.exports = router;