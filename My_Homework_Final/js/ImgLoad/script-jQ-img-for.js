  $(document).ready(function(){

  	if ($(window).width() < 1440) { 
  		console.log('разрешение от 320px до 1440px');
  		console.log('=============================');
	$('.wrapper-activity').masonry({ 	// указываем элемент-контейнер в котором расположены блоки для динамической верстки
 	 	itemSelector: '.activImg', 		// указываем класс элемента являющегося блоком в нашей сетке
        singleMode: false, 				// true - если у вас все блоки одинаковой ширины
		isResizable: true,				// перестраивает блоки при изменении размеров окна
	  	isAnimated: true,				// анимируем перестроение блоков
        animationOptions: { 			// опции анимации - очередь и продолжительность анимации
	    	queue: true, 
	    	duration: 500 
	    },
		columnWidth: 49,
		gutter: 15,						// расстояние между блоками
		fitWidth: true,
		initLayout: true 				// Включает макет инициализации.
	}); }
}); 

$(function(){
	function LoadImg (value){
		for (var i = 0; i <= 6; i++) {
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=7&size=tb', 
			function(data){
				console.log(data);
				$('.image-' + (i+1) + '-item').css('background', 'url(' + data.images[i].imageurl +')'); 
				$('.image-' + (i+1) + '-item').css('background-repeat', 'no-repeat'); 
				$('.image-' + (i+1) + '-item').css('background-position', 'center center'); 
				$('.image-' + (i+1) + '-item').css('background-size', 'contain'); 
        		$('.activImgName').html(data.images[i].word);
				}
			);
		}
	}	
	LoadImg();
	
	 $('.search-interest-submit').on('click', function(event) {
        event.preventDefault();
        var search = $('.search-interest-text').val();
        $('.activImgName').html(search);

        LoadImg(search);
    })
});