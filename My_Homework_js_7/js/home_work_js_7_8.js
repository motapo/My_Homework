//------- вкладки -------
(function($) {
$(function() {
  $('ul.tabs_war').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs_content').removeClass('active').eq(i).addClass('active');
      });     });  }); }) })(jQuery)

// -------скрипт для всплывающих подсказок-------
// опеределяем input при наведении на который нужно показывать подсказки
	var $input = $('.inp_txt');
// вешаем на наведение кусора функцию показа подсказок
	$input.on('mouseover', function(){
		var $hint = $(this).siblings('.helper');
	//разворачивание за счет плавного изменения прозрачности
		$hint.fadeIn();	
		});
// вешаем на уход крусора функцию убирания подсказок	
	$input.on('mouseout', function(){
		var $hint = $(this).siblings('.helper');
	//сворачивание за счет плавного изменения прозрачности
		$hint.fadeOut();	
		});
//создаем тег img внутри div.prikol и меняем ему атрибут 		
	$('.prikol').append('<img>');
	var $img = $('img');	
	$img.attr('src', 'img/prikol.png');
// вешаем на клик функцию появления подсказок и картинки	 
	var $submitHelper = $('.submit_helper');
	$submitHelper.on('click', function(e){
	// убираем функцию кнопки по умолчанию, 
	// т.к. ссылки нет и постоянно обновляется страница	
		e.preventDefault();
	// меняем ряд свойств кнопки
		$submitHelper
			.css({
				textTransform: 'uppercase',
				color: 'black',
				background: 'grey',
				fontWeight: '700',
				transition: '3s'
		})	
		var $hintAll = $('.helper');
	// задаем показ всех подсказок	
		$hintAll.css('display', 'inline-block');
		var $prikol	= $('.prikol');
	// меняем ряд свойств картинки	
		$prikol
			.css({
				top: '-30px',
				position: 'relative',
				display: 'inline-block',
				transition: '3s'	
			});
		$prikol.fadeIn();	
	});	
