var loginUser = prompt('Введите Ваш логин','');
if (loginUser == 'admin' || 'Admin') {
	var password = prompt('введите пароль для входа');
	if (password == 'black hobbit') {
		alert('Добро пожаловать!');
	} else if (password == null) {
		alert('Вход отменен');
	} else {
		alert('пароль неверный'); 
	}
} else if (loginUser == null) {
	alert('вход отменен');
} else {
	alert('я вас не знаю');
}

// =====================================

var yourName = prompt('Какое Ваше имя?', '');
var yourNameAutorization = confirm('Вас зовут '+ yourName +'?');
if (yourNameAutorization == true) {
alert('Отлично '+ yourName +'! Добро пожаловать!');
} else {
	alert('Обновите страницу для повторного ввода Вашего имени')
} 








