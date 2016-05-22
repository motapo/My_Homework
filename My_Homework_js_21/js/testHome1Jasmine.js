// alert('Расчет степени числа через функцию pow');

// x = prompt('Введи число');	
// y = prompt('введите степень');
// console.log(x, y);

var pow = {
sayPow: function(x, y) {
    var b = x;
    console.log(b);
    for (var i = 1; i < y ; i++) {
    	b *= x;
     }
    return b;
	}
}


// if (x >= 0 && y > 0) {
// alert(pow.sayPow(x, y));
// console.log('число '+ x + ' в степени '+ y +' будет равно '+ pow.sayPow(x, y));	
// } else if (y == 0) {
// 	alert('скорее всего вы задали степень 0, тогда результат всегда равен 1');
// } else {
// 	alert('расчеты с отрицательной степенью мы не проводим)');
// }


module.exports = pow;








