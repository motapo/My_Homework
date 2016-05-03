define('CheckBox', ['jquery'], function($){
	var ChBox = $(function(){
		
			$('input:radio').screwDefaultButtons({
				image: 'url("img/radioSmall.jpg")',
				width: 43,
				height: 43
			});
			
			$('.design_ckeckbox').screwDefaultButtons({
				image: 'url("img/checkboxSmall_like.png")',
				width: 43,
				height: 43
			});
		});
	return ChBox;
})