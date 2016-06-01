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


	 if ($(window).width() > 1440) { 
		console.log('разрешение от 1440px');
  		console.log('====================');
		$('.wrapper-activity').masonry({
		 	itemSelector: '.activImg',
        singleMode: false,
		isResizable: true,
	  	isAnimated: true,
        animationOptions: { 
	    	queue: true, 
	    	duration: 500 
	    },
		columnWidth: 140,
		gutter: 20,
		initLayout: true
		}); 
	}
}); 

	function LoadImg0 (i){
		var search = $('.search-interest-text').val();
		$.getJSON(
			"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
			{
			tags: $('.search-interest-text').val(),
			tagmode: "any",
			format: "json"
			},
			function(data){
					console.log(data);
					var string = data.items[i].author;
					string = string.substring(18);	
					$('.image-' + (i+1) + '-item').css('background', 'url(' + data.items[i].media.m +')'); 
					$('.image-' + (i+1) + '-item').css('background-repeat', 'no-repeat'); 
					$('.image-' + (i+1) + '-item').css('background-position', 'center center'); 
					$('.image-' + (i+1) + '-item').css('background-size', 'contain'); 
	        		$('.image-' + (i+1) + '-Name').html('Autor:' + string);
				}
			);
		}
		
		for (var i = 0; i <= 6; i++) {
	LoadImg0(i);
	};


$(function(){
	function LoadImg (value){
		$.getJSON(
			"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
			{
			tags: " ' " + value + " ' ",
			tagmode: "any",
			format: "json"
			},
			function(data){
				for (var i = 0; i <= 6; i++) {
					$('.image-' + (i+1) + '-item').css('background', 'url(' + data.items[i].media.m +')');  
					$('.image-' + (i+1) + '-item').css('background-repeat', 'no-repeat'); 
					$('.image-' + (i+1) + '-item').css('background-position', 'center center'); 
					$('.image-' + (i+1) + '-item').css('background-size', 'contain'); 
				}
			}
		);
	}	
	
	 $('.search-interest-submit').on('click', function(event) {
        event.preventDefault();
        var search = $('.search-interest-text').val();
	    $('.activImgName').html('Tags: ' + search);
        
        LoadImg(search);
 
}); });