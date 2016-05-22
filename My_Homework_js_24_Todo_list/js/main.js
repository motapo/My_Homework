require.config({
	// baseUrl: "modul/", 
	paths: {
		"jquery" : "libs/jquery-1.12.2.min",
		"template" : "libs/template",
		"model" : "ModelMVC",
		"view" : "ViewMVC",
		"controller" : "ControllerMVC"
	}

	
	// shim: {
	// 	'template': {
	// 		exports: 'tmpl'
	// 	}
	// }
});
// require(['ModelMVC'], function(ModelMVC){});
// require(['ViewMVC'], function(ViewlMVC){});
require(['TestMVC', 'ModelMVC', 'ControllerMVC', 'ViewMVC'], function(TestMVC, ModelMVC, ViewlMVC, ControllerMVC){

	$(function (){
	var firstToDoList = ['test1', 'test2', 'test3'];
	var view = new View(model);
	var model = new Model(firstToDoList);
	var controller = new Controller(model, view);

}); 

});



// =============================================================
// ситуация следующая, если указание внутри модуля зависимостей не помогает и их
// необходимо указать внутри require - то есть подводный
// камень - оптимизация main.js с помощью "r.js.cmd -0 build/app.build.js"
// создаст main.js в котором спорный модуль так и не заработает! 

// 1. со временем нужно выбирать только те библиотеки и плагины, которые проходят испытание на правильное указание зависимостей внутри отдельных модулей подключаемых к main.js
// ====================================
// 2. если же отказаться от плагина или библиотеки, к которой приходится дописывать зависимости уже внутри require в main.js, невозможно - то прийдется обойтись без оптимизации r.js.cmd
// ====================================
// 3. как альтернатива, особо проблемные плагины, модули или бибилиотеки напрямую подключать внутри html без сбора через Require.js



