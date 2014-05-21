/* exported ajax */
function ajax(url, type, data={}, success=r=>console.log(r), dataType='html'){   //default parameters go last
  'use strict';
  $.ajax({url:url, type: type, dataType:dataType, data:data, success:success});
}
