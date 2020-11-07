const { Router } = require('express');
const router = Router();

const heroesController = require('../controllers/heroes-controller');

/**
 * @swagger
 * /api/heroes:
 *   get:
 *     description: Return an object  { offset - limit - total - count - [heroes] }.
 *     parameters:
 *       - name: limit
 *         in: query
 *         require: false
 *         schema:
 *          - type: integer
 *         description: Number of the documents.
 *       - name: offset
 *         in: query
 *         require: false
 *         schema:
 *          - type: string
 *         description: Pagination.
 *     responses:
 *       200:
 *         description: Return an object with { offset - limit - total - count - [heroes] }.
 *          
 */
router.get('/', heroesController.getHeroes);

/**
 * @swagger
 * /api/heroes/{hero}/{fav}/{username}:
 *   get:
 *     description: Return Hero attributes.
 *     parameters:
 *       - name: hero
 *         in: path
 *         schema:
 *          - type: string
 *         required: true
 *       - name: fav
 *         in: path
 *         schema:
 *          - type: integer
 *         required: false
 *         description: Add to Favorite list (If the parameter is equal to 1, the username parameter is required).
 *       - name: username
 *         in: path
 *         schema:
 *          - type: string
 *         required: false
 *         description: Nombre de usuario para agregar el hereo a su lista de Favoritos.
 *     responses:
 *       200:
 *         description: Return an object with properties from hero.
 *       404:
 *          description: The Hero Already Exist in Favorites.
 *          
 */
router.get('/:hero/:fav?/:username?', heroesController.getHeroByName);

module.exports = router;