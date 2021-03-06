/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - favHeroes
 *        properties:
 *          name:
 *            type: string
 *          favHeroes:
 *            type: array
 *            ref: Hero
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  favHeroes: [{
    ref: "Hero",
    type: Schema.Types.Mixed
  }]
},{
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);