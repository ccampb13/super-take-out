/* global ajax */
/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.menu').change(getMenu);
  }

  function getMenu(){
    var menu = $(this).val();   //this represets the select drop down selected and .val() is required for this
    var next = $(this).next();
    ajax(`/dishes/${menu}`, 'get', null, html=>{
      next.empty().append(html);
    });
  }

})();
