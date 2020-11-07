const User = require('../models/User');

module.exports = {
  getFavorites: async (req, res) => {
 
    let userFavorites = await User.findOne({ name: req.params.name });
    let favorites = userFavorites.favHeroes;
 
    if(req.query.hero !== undefined){
  
      let heroFind;
      favorites.forEach(hero => {
        if(hero.name === req.query.hero){
          return heroFind = hero;
        }
      });

      return res.status(200).json(heroFind);
    }

    res.status(200).json(favorites);
  },
  DeletFavorite: async (req, res) => {

    let user = await User.findOne({ name: req.params.name });
    if(user !== null){
      let favorites = user.favHeroes;
      let index = favorites.map(hero => { return hero.name }).indexOf(req.params.hero);
  
      if(index > -1){
        favorites.splice(index, 1);
        let update = await User.findOneAndUpdate({name: req.params.name}, {favHeroes: favorites}).catch(err => { console.log(err) });
        return res.status(200).json(favorites);
      }else{
        return res.status(404).json({ message: "Hero not found" });
      }
    }else{
      return res.status(404).json({ message: "User not found" });
    }
  },
}