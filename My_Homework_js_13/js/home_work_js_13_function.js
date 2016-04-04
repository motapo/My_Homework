// ========пытаемся пробовать вешать функции на кнопку
var $myCheckRadio = $('#answer1-2');
var $myButton = $('#myButton');
console.log($myCheckRadio, $myButton);

$myButton.on('click', function() {

 if ($myCheckRadio.prop("checked")) {
  alert( 'ответ правильный' );
 } else {
  alert( 'ты ошибся' );
 }
});

$myButton.on('click', function() {
 	var result = $("input:checkbox:checked");
 	console.log(result);
 });