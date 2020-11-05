const { Router } = require('express');
const router = Router();

const favController = require('../controllers/favorite-controller');

router.get('/:name/:hero?', favController.getFavorites);

router.delete('/delete/:name/:hero', favController.DeletFavorite);

module.exports = router;