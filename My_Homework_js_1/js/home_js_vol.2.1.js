// задаем пременные - булеву, массив, имя для ввода
var mainArr = [];
var i, name, myBool = false;

// наполняем массив именами
for (i = 0; i < 5; i++) {
  mainArr[i] = prompt('Введите имя'+ (i + 1),'');
  console.log(mainArr[i]);
}
console.log(mainArr);

// задаем условие проверки имени на совпадение с данными в массиве
var passwordUser = 'qwerty';
var yourName = prompt('Введите имя для проверки','');

for (i = 0; i < 5; i++) {
  if (mainArr[i] == yourName && yourName != null){
    myBool = true;
    break;
  }
}

// на основании полученного значения булевой переменной
// выводим необходимое нам сообщение
if (myBool){
    alert('Добро пожаловать '+ yourName);
    var pass = prompt('введите Ваш пароль','');
    if (pass == passwordUser) {
      alert('Вы прошли индентификацию!');
    } else { alert('пароль неверный');
    } 
}
else {
    alert('Ваше имя не найдено');
}