$(document).ready(function(){
	$('.spolerNews1').click(function(){
		$('.spolerContent2').slideUp('500');
		$('.spolerContent3').slideUp('500');
		$('.spolerContent1').toggle('normal');
		return false;
	});
 
	$('.spolerNews2').click(function(){
		$('.spolerContent1').slideUp('500');
		$('.spolerContent3').slideUp('500');
		$('.spolerContent2').toggle('normal');
		return false;
	});

	$('.spolerNews3').click(function(){
		$('.spolerContent2').slideUp('500');
		$('.spolerContent1').slideUp('500');
		$('.spolerContent3').toggle('normal');
		return false;
	});
});
