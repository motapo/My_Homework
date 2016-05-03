define( 'JqueryMenu', ['jquery'], 	function () {

		var JqMenu = $(document).ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
  });
    
  $('.name_li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('.name_brend',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('.name_brend',this).stop(true,true).slideUp(200);
    }, this), 100));
  });

  $('.name_brend_sub').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('.main_menu_sub',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('.main_menu_sub',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
   
  $('.main_menu_sub_item').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('.main_menu_sub_item_ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('.main_menu_sub_item_ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
});
	return JqMenu;
	
	});