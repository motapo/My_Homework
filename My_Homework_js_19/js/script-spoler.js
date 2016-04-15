$(document).ready(function(){
	$('.spolerLink').click(function(){
		$('.news-3-text').css('color','white')
		$('.news-2-text').css('color','white')
		$('.news-1-text').css('color','#A9D0F5')
		$('.spolerContent1').slideUp('500');
		$('.spolerContent2').slideUp('500');
		$('.spolerContent').toggle('normal');
		return false;
	});
 
	$('.spolerLink1').click(function(){
		$('.news-3-text').css('color','white')
		$('.news-1-text').css('color','white')
		$('.news-2-text').css('color','#A9D0F5')
		$('.spolerContent').slideUp('500');
		$('.spolerContent2').slideUp('500');
		$('.spolerContent1').toggle('normal');
		return false;
	});

	$('.spolerLink2').click(function(){
		$('.news-1-text').css('color','white')
		$('.news-2-text').css('color','white')
		$('.news-3-text').css('color','#A9D0F5')
		$('.spolerContent').slideUp('500');
		$('.spolerContent1').slideUp('500');
		$('.spolerContent2').toggle('normal');
		return false;
	});
});
