$(document).ready(function(){
	$('.spolerActor1').click(function(){
		$('.spolerContentActor2').slideUp('500');
		$('.spolerContentActor3').slideUp('500');
		$('.spolerContentActor4').slideUp('500');
		$('.spolerContentActor5').slideUp('500');
		$('.spolerContentActor1').toggle('normal');
		return false;
	});
 
	$('.spolerActor2').click(function(){
		$('.spolerContentActor1').slideUp('500');
		$('.spolerContentActor3').slideUp('500');
		$('.spolerContentActor4').slideUp('500');
		$('.spolerContentActor5').slideUp('500');
		$('.spolerContentActor2').toggle('normal');
		return false;
	});

	$('.spolerActor3').click(function(){
		$('.spolerContentActor1').slideUp('500');
		$('.spolerContentActor2').slideUp('500');
		$('.spolerContentActor4').slideUp('500');
		$('.spolerContentActor5').slideUp('500');
		$('.spolerContentActor3').toggle('normal');
		return false;
	});

	$('.spolerActor4').click(function(){
		$('.spolerContentActor1').slideUp('500');
		$('.spolerContentActor2').slideUp('500');
		$('.spolerContentActor3').slideUp('500');
		$('.spolerContentActor5').slideUp('500');
		$('.spolerContentActor4').toggle('normal');
		return false;

	});$('.spolerActor5').click(function(){
		$('.spolerContentActor1').slideUp('500');
		$('.spolerContentActor2').slideUp('500');
		$('.spolerContentActor3').slideUp('500');
		$('.spolerContentActor4').slideUp('500');
		$('.spolerContentActor5').toggle('normal');
		return false;
	});
});
