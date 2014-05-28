/* global ajax */
/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('form#order').on('change', '.menu', getMenu);
    $('form#order').on('click', '.delete', delMenu);

    $('form#order').on('change', '.dish', changeText);
    $('form#order').on('change', 'input', changeText);
    $('form#order').on('blur', 'input', changeText);

    $('#add').click(add);

  }

  function changeText(){
    var totalCost = 0;
    var totalCal = 0;
    $('.dish').children('option:selected').map((i,d)=>{
      var itemCal = $(d).attr('data-calories') * 1;
      var itemCost = $(d).attr('data-cost') * 1;
      var qty = $(d).parent().prev().prev().val() * 1;
      console.log(itemCost);
      console.log(itemCal);

      if(!isNaN(itemCost) && !isNaN(qty) && qty > 0 && !isNaN(itemCal)){
        totalCost = itemCost * qty;
        totalCal = itemCal * qty;
        console.log(totalCost);
        console.log(totalCal);
      }
      $('#total').empty().text(`Total Calories ${totalCal} | Total Cost $${totalCost.toFixed(2)}`);
    });
  }


  function delMenu(e){
    if($('form#order > .menu-item').length > 1){
      $(this).parent().remove();
    }
    e.preventDefault();
  }

  function add(e){
    var item = $('form#order > .menu-item:first-child');
    $('form#order').prepend(item.clone());

    e.preventDefault();
  }


  function getMenu(){
    var menu = $(this).val();   //this represets the select drop down selected and .val() is required for this
    var next = $(this).next();
    ajax(`/dishes/${menu}`, 'get', null, html=>{
      next.empty().append(html);
    });
  }

})();
