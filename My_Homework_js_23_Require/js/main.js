require.config({
	paths: {
		"jquery" : "libs/jquery-1.12.2.min",
		"jcarousel" : "libs/jquery.jcarousel",
		"screwdefaultbuttons" : "libs/jquery.screwdefaultbuttonsV2.min",
		"selectbox" : "libs/jquery.selectbox-0.2.min",
		"jquery-easing" : "http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js",
		"console_runner" : "http://assets.codepen.io/assets/editor/live/console_runner-ba402f0a8d1d2ce5a72889b81a71a979.js",
		"events_runner" : "http://assets.codepen.io/assets/editor/live/events_runner-902c66a0175801ad4cdf661b3208a97b.js",
		"css_live_reload" : "http://assets.codepen.io/assets/editor/live/css_live_reload_init-bad5f8d322020126e7b4287d497c7efe.js"
	}
})
require(['JCarousel'], 	function (JCarousel)	{ 	});
require(['JqueryMenu'], function (JqueryMenu) 	{   });
require(['Select'], 	function (Select)		{ 	});
// если указание зависимостей внутри модуля не помогает, 
// то можно указать зависимости тут в require 
require(['jquery', 'screwdefaultbuttons', 'CheckBox'], function (CheckBox){  });



