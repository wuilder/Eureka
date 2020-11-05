const User = require('../models/User');

module.exports = {
  getFavorites: async (req, res) => {
 
    let userFavorites = await User.findOne({ name: req.params.name });
    let favorites = userFavorites.favHeroes;
 
    if(req.params.hero !== undefined){
  
      let heroFind;
      favorites.forEach((h, i) => {
        if(h.name === req.params.hero){
          return heroFind = h;
        }
      });

      res.status(200).json(heroFind);
    }

    res.status(200).json(favorites);
  },
  DeletFavorite: async (req, res) => {
    
  },
}