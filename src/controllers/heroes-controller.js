require('dotenv').config();
const User = require('../models/User');
const axios = require('axios');

module.exports = {
  getHeroes: (req, res) => {
    
    axios.get(`${process.env.ROUT}?ts=1&apikey=` + process.env.PUBLIC_KEY + `&hash=` + process.env.HASH)
    .then(response => {
      let data;
      let arrayHeroes = response.data.data.results;

      data = {
        offset: response.data.data.offset,
        limit: response.data.data.limit,
        total: response.data.data.total,
        count: response.data.data.count,
        heroes: []
      }

      arrayHeroes.forEach((heroe, index) => {
        data.heroes[index] ={
          id: heroe.id,
          name: heroe.name,
          description: heroe.description,
          picture: heroe.thumbnail.path + "." + heroe.thumbnail.extension
        };
      });

      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
    });
  },
  getHeroByName: (req, res) => {
  
    axios.get(`${process.env.ROUT}?name=${req.params.name}&ts=1&apikey=` + process.env.PUBLIC_KEY + `&hash=` + process.env.HASH)
    .then(async response => { 
      if(response.data.data.count === 0) return res.json({message: "Hero Not Found"});

      let hero = {
        id: response.data.data.results[0].id,
        name: response.data.data.results[0].name,
        description: response.data.data.results[0].description,
        picture: response.data.data.results[0].thumbnail.path + "." + response.data.data.results[0].thumbnail.extension,
      }
  
      if(req.params.fav === '1'){
        let user = await User.findOne({ name: req.params.username });

        if(user !== null){
          let favorites = user.favHeroes.map(hero => { return hero.name });

          if(favorites.includes(req.params.name) === false){
            user.favHeroes.push(hero);
            user.save();
            return res.status(200).json(hero);
          }else{
            return res.status(404).json({ message: "The Hero Already Exist in Favorites"})
          }
        }else{
          return res.status(404).json({ message: `The Username You Entered Does Not Exist`});
        }
      }
  
      res.status(200).json(hero);
    })
    .catch(err => {
      console.log(err);
    })
  }
}