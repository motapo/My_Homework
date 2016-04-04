'use strict;'
//=====создаем объекты: "ВОПРОС"---"ВАРИАНТЫ ОТВЕТОВ"=====
var questionTemp = {
		quest1: '1. Какое из философских учений вымышленное?',
		quest2: '2. Душа человека, возникающая в процессе жизни',
		quest3: '3. Древнейшее философское учение Китая',}
var question1Temp = [
		{ answer1: 'Учение "Восьми стихий"' },
		{ answer1: 'Восьмерка Оно Озаки' },
		{ answer1: 'Философия "Восьмеричного пути"' }];
var question2Temp = [
		{ answer2: 'Манас' },
		{ answer2: 'Атман' },
		{ answer2: 'Сансара' }];
var question3Temp = [
		{ answer3: 'Буддизм' },
		{ answer3: 'Конфуцианство' },
		{ answer3: 'Даосизм' }];		
// переводим объект в строку
var strQuestionTemp = JSON.stringify(questionTemp); 
var strQuestion1Temp = JSON.stringify(question1Temp); 
var strQuestion2Temp = JSON.stringify(question2Temp); 
var strQuestion3Temp = JSON.stringify(question3Temp); 
// заносим в локальное хранилище именно строку, объект нельзя
localStorage.setItem('boxQuestionTemp', strQuestionTemp);
localStorage.setItem('boxQuestion1Temp', strQuestion1Temp);
localStorage.setItem('boxQuestion2Temp', strQuestion2Temp);
localStorage.setItem('boxQuestion3Temp', strQuestion3Temp);
// выводим строку из хранилища
var resultQuestionTemp = localStorage.getItem('boxQuestionTemp');
var resultQuestion1Temp = localStorage.getItem('boxQuestion1Temp');
var resultQuestion2Temp = localStorage.getItem('boxQuestion2Temp');
var resultQuestion3Temp = localStorage.getItem('boxQuestion3Temp');
//возвращаем строке вид объекта
var question = JSON.parse(resultQuestionTemp);
var question1 = JSON.parse(resultQuestion1Temp);
var question2 = JSON.parse(resultQuestion2Temp);
var question3 = JSON.parse(resultQuestion3Temp);
// шаблонизируем это дело в HTML
$(function(){
	var html = $('#template').html();
	var title = 'Философские учения Востока';
	var submit = 'проверить мои результаты';
	var answer = tmpl(html, {
		data: question1, title, submit, question,
		data2: question2,
		data3: question3
	 });
	$('body').append(answer);});

// ========пытаемся пробовать вешать функции на кнопку=====
var $myCheckRadio = $('#answer1-2');
var $myButton = $('#myButton');
console.log($myCheckRadio, $myButton);

$myButton.on('click', function() {

 if ($myCheckButton.prop("checked")) {
  alert( 'ответ правильный' );
 } else {
  alert( 'ты ошибся' );
 }
});

