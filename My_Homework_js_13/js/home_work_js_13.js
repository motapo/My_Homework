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

	$('body').append(answer);

var $myButton = $('#myButton');


// ========пытаемся пробовать вешать функции на кнопку

var $link = this;
var $body = $('body');
var $modal, $overlay;

function showModal(){
	$modal = $('<div class="statusAnswer-modal"><img src="img/man-hercules.png"/><h2>Ты явно знаток восточной культуры!)</h2></div>');
	$overlay = $('<div class="statusAnswer-modal-overlay"></div>')
	$overlay.one('click', hideModal);
	$modal.one('click', hideModal);
	$body.append($overlay);
	$body.append($modal);
	function hideModal(){
		$modal.fadeOut(700);
		$overlay.slideUp(500);
		$('input').prop('checked', false); }; };

function showModalNo(){
	$modal = $('<div class="statusAnswer-modal-no"><img src="img/no.png"/><h2>Хреново ты знаком с восточной культурой...</h2></div>');
	$overlay = $('<div class="statusAnswer-modal-overlay"></div>')
	$overlay.one('click', hideModal);
	$modal.one('click', hideModal);
	$body.append($overlay);
	$body.append($modal);
	function hideModal(){
		$modal.fadeOut(700);
		$overlay.slideUp(500);
		$('input').prop('checked', false); }; };


$myButton.on('click', function(e) {
	e.preventDefault();

var $statusAnswer1_0 = $("#answer1-0").prop('checked');	
var $statusAnswer1_1 = $("#answer1-1").prop('checked');
var $statusAnswer1_2 = $("#answer1-2").prop('checked');

var $statusAnswer2_0 = $("#answer2-0").prop('checked');	
var $statusAnswer2_1 = $("#answer2-1").prop('checked');
var $statusAnswer2_2 = $("#answer2-2").prop('checked');

var $statusAnswer3_0 = $("#answer3-0").prop('checked');	
var $statusAnswer3_1 = $("#answer3-1").prop('checked');
var $statusAnswer3_2 = $("#answer3-2").prop('checked');

if ($statusAnswer1_1 == true &&
	$statusAnswer2_0 == true && 
	$statusAnswer3_2 == true) {
  	  	showModal();
 } else { showModalNo(); } }); });




