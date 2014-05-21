'use strict';

var traceur = require('traceur');  //since we are working with ES6
var Dish = traceur.require(__dirname + '/../models/dish.js');
var User = traceur.require(__dirname + '/../models/user.js');

exports.new = (req, res)=>{
  Dish.menu(menus=>{
    User.findByUserId(req.session.userId, user=>{
      res.render('orders/new', {user: user, menus: menus, title: 'Order Food'});   //route/function
    });

  });
};

exports.create = (req, res)=>{
  console.log('user-id');
  console.log(req.session.userId);
};
