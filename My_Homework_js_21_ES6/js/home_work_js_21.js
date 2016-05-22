'use strict;'
//=====создаем объекты: "ВОПРОС"---"ВАРИАНТЫ ОТВЕТОВ"=====
let All = [{ quest1: '1. Какое из философских учений вымышленное?',
			 quest2: '2. Душа человека, возникающая в процессе жизни',
			 quest3: '3. Древнейшее философское учение Китая'}, 
			[{ answer1: 'Учение "Восьми стихий"' }, { answer1: 'Восьмерка Оно Озаки' }, { answer1: 'Философия "Восьмеричного пути"'}],
			[{ answer2: 'Манас' }, { answer2: 'Атман' }, { answer2: 'Сансара' }],
			[{ answer3: 'Буддизм' }, { answer3: 'Конфуцианство' }, { answer3: 'Даосизм' }]];

let [questionTemp, answer1Temp, answer2Temp,answer3Temp] = [All[0], All[1], All[2], All[3]];

//создаем массив с вопросами и ответами
let arrQuestionTemp = [answer1Temp, answer2Temp, answer3Temp, questionTemp];
// переводим массив в строку
let strQuestionTempArr = JSON.stringify(arrQuestionTemp); 
// заносим в локальное хранилище именно строку, объект нельзя
localStorage.setItem('boxQuestionTempArr', strQuestionTempArr);
// выводим строку из хранилища
let resultQuestionTempArr = localStorage.getItem('boxQuestionTempArr');
//возвращаем строке вид массива (объекта)
let questionArr = JSON.parse(resultQuestionTempArr);
// шаблонизируем это дело в HTML
$(let = () => {
	let html = $('#template').html();
	let title = 'Философские учения Востока';
	let submit = 'проверить мои результаты';
	let answer = tmpl(html, {
		data: questionArr[0], title, submit,
		data2: questionArr[1],
		data3: questionArr[2] 
	 });

	$('body').append(answer);

let $myButton = $('#myButton');

// ========пытаемся пробовать вешать функции на кнопку
let $link = this;
let $body = $('body');
let $modal, $overlay;

let showModal = () => {
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

let showModalNo = () => {
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
for (let i = 0; i <= 2; i++) {	
	 for (let j = 1; j <= 3; j++) {
	 	eval("var $statusAnswer"+j+"_"+i+"= $('#answer"+j+"-"+i+"').prop('checked')")
	 }
} 
if ($statusAnswer1_1 == true && 
	$statusAnswer2_0 == true && 
	$statusAnswer3_2 == true) {
  	  	showModal();
 } else { showModalNo(); } }); });