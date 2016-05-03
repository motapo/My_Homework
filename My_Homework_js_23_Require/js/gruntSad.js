'use strict;'
	var animData = {
    	container: document.getElementById('container'),
    	renderer: 'svg',
    	loop: true,
    	autoplay: true,
    	animationData: animationData
	};
	var anim = bodymovin.loadAnimation(animData);
	var $modal = $('#overlay');
	var $close = $('#close');
	function showModal(){
		$modal.css('display','block');
		$close.one('click', hideModal);
	};
	showModal();
	function hideModal(){
		$modal.fadeOut(700);
	};
	