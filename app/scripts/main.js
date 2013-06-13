$(function(){
    var $page = $('.page'),
        $$buttons = $('button');

    $$buttons.on('click', function(){
      var $clickedButton = $(this);
      var newGridClass = $clickedButton[0].id;

      $page[0].className = $page[0].className.replace( /\btemplate-\d.*?\b/g, '');
      
      $page.addClass(newGridClass);

    });

});