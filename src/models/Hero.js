/**
 * @swagger
 *  components:
 *    schemas:
 *      Hero:
 *        type: object
 *        required:
 *          - id
 *          - name
 *          - description
 *          - picture
 *        properties:
 *          id:
 *            type: integer
 *          name:
 *            type: string
 *          description:
 *            type: string   
 *          picture:
 *            type: string
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  description: String,
  picture: String,
},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Hero', HeroSchema);