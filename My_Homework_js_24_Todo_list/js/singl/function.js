$(function (){
	var firstToDoList = ['Google seurch ', 'Yandex seurch ', 'Yahoo seurch '];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);

}); 
