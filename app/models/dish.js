'use strict';

var dishes = global.nss.db.collection('dishes');
var _ = require('lodash');


class Dish {
  static findAll(fn){      //this takes a callback functinon (fn)
    dishes.find().toArray((e,d)=>fn(d));   //this is the call back fn(d)
  }

  static menu(fn){   //this requires a callback
    Dish.findAll(dishes=>{
      var menus  = _(dishes).map(d=>d.menu).uniq().value();//concert an array of objects to an array of strings
      fn(menus);  //because it was a lodash array coming back you add .value() to the end
    });
  }

  static findByMenu(menu, fn){  //we are trying to find dishes by the menu selected. menus is the variable created in data.json
    dishes.find({menu:menu}).toArray((err, records)=>{  //searching the menu key for the menu selected. the menu parameter names is the value
      fn(records);
    });
  }
}


module.exports = Dish;
