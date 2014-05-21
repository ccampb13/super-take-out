'use strict';

var traceur = require('traceur');  //since we are working with ES6
var Dish = traceur.require(__dirname + '/../models/dish.js');


exports.menu = (req, res)=>{
    Dish.findByMenu(req.params.menu, dishes=>{ //req.params.menu is what you are searhing for. When it has found them, it returns dishes
      res.render('dishes/menu', {dishes: dishes});   //points you to a jade partial. directory name = dishes, file name = menu.jade
    });
  };
