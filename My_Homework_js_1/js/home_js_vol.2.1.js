var mainArr = [];
var i, name, myBool = false;

for (i = 0; i < 5; i++) {
  mainArr[i] = prompt('Введите имя'+ (i + 1),'');
  console.log(mainArr[i]);
}
console.log(mainArr);
var passwordUser = 'qwerty';
var yourName = prompt('Введите имя для проверки','');

for (i = 0; i < 5; i++) {
  if (mainArr[i] == yourName && yourName != null){
    myBool = true;
    break;
  }
}
if (myBool){
    alert('Добро пожаловать '+ yourName);
    var pass = prompt('введите Ваш пароль');
    if (pass == passwordUser) {
      alert('Вы прошли индентификацию!');
    } else { alert('пароль неверный');
    } 
}
else {
    alert('Ваше имя не найдено');
}