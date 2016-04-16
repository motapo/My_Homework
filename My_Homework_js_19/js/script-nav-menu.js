$(document).ready(function(){
  
    
  $('.nav-menu-title').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('.nav-menu-item',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('.nav-menu-item',this).stop(true,true).slideUp(200);
    }, this), 100));
  });

  $('.nav-menu-title-item').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('.nav-menu-item-sub',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('.nav-menu-item-sub',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
  
});