define( 'FunctionMVC', ['jquery', 'template', 'model', 'view', 'controller'], 	function () {
	
	var funcMvc = $(function (){
	var firstToDoList = ['Google ', 'Yahoo ', 'Yandex '];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);

}); 

	return funcMvc;

	});