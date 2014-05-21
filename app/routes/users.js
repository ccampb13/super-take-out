'use strict';

var traceur = require('traceur');  //since we are working with ES6
var User = traceur.require(__dirname + '/../models/user.js');

exports.new = (req, res)=>{
  res.render('users/new', {title: 'User Registration/Login'});   //route/function
};

exports.login = (req, res)=>{
  var user = new User(req.body);  //req.body contains username and password
  user.login(u=>{            //the user here is an object. login is the instance method create in user.js
    if(u){
      req.session.userId = u._id;
    }else{
      req.session.userId = null;
    }

    res.redirect('/');
  });
};
