const { Router } = require('express');
const router = Router();

const favController = require('../controllers/favorite-controller');

/**
 * @swagger
 * /api/users/{name}:
 *   get:
 *     description: Return an array with objects Heroes.
 *     parameters:
 *      - name: name
 *        in: path
 *        schema:
 *          - type: string
 *        required: true
 *      - name: hero
 *        in: query
 *        schema:
 *          - type: string
 *        required: false
 *     responses:
 *      200:
 *        description: Return an array with the favorites heroes.
 */
router.get('/:name', favController.getFavorites);


/**
 * @swagger
 * /api/users/delete/{name}/{hero}:
 *   put:
 *     description: Return an object with heroes.
 *     parameters:
 *      - name: name
 *        in: path
 *        schema:
 *          - type: string
 *        required: true
 *        description: Name of the User.
 *      - name: hero
 *        in: path
 *        schema:
 *          - type: string
 *        required: true
 *        description: Name of the Hero to delete.
 *     responses:
 *        200:
 *          description: Return an update array with the favorites heroes..
 */
router.put('/delete/:name/:hero', favController.DeletFavorite);

module.exports = router;