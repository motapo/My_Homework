//объявляем переменную
var message;
message = 'Hello dorck!';
alert(message);

//присваиваем значениея ряду переменных
var gold = 'golden', silv = 'silver', plat = 'platinum';
console.log(gold, silv, plat);

//константы принято не менять
var COLOR_RED = '#F00';
console.log(COLOR_RED);

//копируем значение одной переменной в другую
gold = message;
console.log(gold);
message = plat;
console.log(message);


var admin, name;
name = 'Vasiliy';
console.log(name);
admin = name;	
console.log(admin);

//задаем значение переменной через ввод данных пользователем
var Name = prompt('Введите Ваше имя:')
var admin;
console.log(Name);
admin = Name;
alert('Ваше имя '+ admin);

//задаем правильное имя для переменной
var planetEarth = 'Земля'; //рекомендуется ourPlanetName
var guestPetr = 'Петя'; //рекомендуется userName
console.log(planetEarth, guestPetr);

