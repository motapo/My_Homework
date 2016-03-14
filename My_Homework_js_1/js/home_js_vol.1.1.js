alert('Расчет степени числа через функцию pow');

x = prompt('Введи число');	
y = prompt('введите степень');
console.log(x, y);

function pow(x, y) {
    var b = x;
    console.log(b);
    for (var i = 1; i < y ; i++) {
    	b *= x;
     }
    return b;
}
alert(pow(x, y));
console.log('число '+ x + ' в степени '+ y +' будет равно '+ pow(x, y));	







