'use strict';

$(document).ready(function(){
  $('ul.tabs').tabs();
  $('select').material_select();
  $('.modal-trigger').leanModal();

  // toggles for add/edit panels
  $('a.add-new').on('click', function(){
    $('.panel.list').slideToggle(300);
    $('.panel.add').slideToggle(300);
  });
  $('a.edit').on('click', function(){
    $('.panel.list').slideToggle(300);
    $('.panel.add').slideToggle(300);
  });
  $('a.cancel').on('click', function() {
    $('.panel.list').slideToggle(300);
    $('.panel.add').slideToggle(300);
  })
});
