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


$(function(){
	function LoadImgA (value){
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=1&size=tb', 
			function(data){
				console.log(data);
				$('.image-1-item').css('background', 'url(' + data.images[0].imageurl +')'); 
				$('.image-1-item').css('background-repeat', 'no-repeat'); 
				$('.image-1-item').css('background-position', 'center center'); 
				$('.image-1-item').css('background-size', 'contain'); 
        		$('.image-1-Name').html(data.images[0].word);
			}
		);
	}	
	LoadImgA();

	function LoadImgB (value){
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=1&size=tb',  
			function(data){
				$('.image-2-item').css('background', 'url(' + data.images[0].imageurl +')'); 
				$('.image-2-item').css('background-repeat', 'no-repeat'); 
				$('.image-2-item').css('background-position', 'center center');
				$('.image-2-item').css('background-size', 'contain'); 
        		$('.image-2-Name').html(data.images[0].word);
			}
		);
	}	
	LoadImgB();

	function LoadImgC (value){
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=1&size=tb',
			function(data){
				$('.image-3-item').css('background', 'url(' + data.images[0].imageurl +')'); 
				$('.image-3-item').css('background-repeat', 'no-repeat'); 
				$('.image-3-item').css('background-position', 'center center'); 
				$('.image-3-item').css('background-size', 'contain'); 
        		$('.image-3-Name').html(data.images[0].word);
			}
		);
	}	
	LoadImgC();

	function LoadImgD (value){
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=1&size=tb',
			function(data){
				$('.image-4-item').css('background', 'url(' + data.images[0].imageurl +')');
				$('.image-4-item').css('background-repeat', 'no-repeat'); 
				$('.image-4-item').css('background-position', 'center center');
				$('.image-4-item').css('background-size', 'contain');   			
        		$('.image-4-Name').html(data.images[0].word);
			}
		);
	}	
	LoadImgD();	

	function LoadImgE (value){
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=1&size=tb',
			function(data){
				$('.image-5-item').css('background', 'url(' + data.images[0].imageurl +')');
				$('.image-5-item').css('background-repeat', 'no-repeat'); 
				$('.image-5-item').css('background-position', 'center center');  
				$('.image-5-item').css('background-size', 'contain');    
        		$('.image-5-Name').html(data.images[0].word);
			}
		);
	}	
	LoadImgE();

	function LoadImgF (value){
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=1&size=tb',
			function(data){
				$('.image-6-item').css('background', 'url(' + data.images[0].imageurl +')');
				$('.image-6-item').css('background-repeat', 'no-repeat'); 
				$('.image-6-item').css('background-position', 'center center');  
				$('.image-6-item').css('background-size', 'contain');    
        		$('.image-6-Name').html(data.images[0].word);
			}
		);
	}	
	LoadImgF();

	function LoadImgG (value){
		$.getJSON(
			'http://api.pixplorer.co.uk/image?word=' + value + '&amount=1&size=tb',
			function(data){
				$('.image-7-item').css('background', 'url(' + data.images[0].imageurl +')');
				$('.image-7-item').css('background-repeat', 'no-repeat'); 
				$('.image-7-item').css('background-position', 'center center');
				$('.image-7-item').css('background-size', 'contain');
        		$('.image-7-Name').html(data.images[0].word);
			}
		);
	}	
	LoadImgG();

	 $('.search-interest-submit').on('click', function(event) {
        event.preventDefault();
        var search = $('.search-interest-text').val();
        $('.activImgName').html(search);

        LoadImgA(search);
        LoadImgB(search);
        LoadImgC(search);
        LoadImgD(search);
        LoadImgE(search);
        LoadImgF(search);
        LoadImgG(search);
    })
});