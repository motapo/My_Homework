'use strict;'
//=====создаем объекты: "ВОПРОС"---"ВАРИАНТЫ ОТВЕТОВ"=====
var questionTemp = {
		title: 'Философские учения Востока',
		submit: 'проверить мои результаты',
		quest1: '1. Какое из философских учений вымышленное?',
		quest2: '2. Душа человека, возникающая в процессе жизни',
		quest3: '3. Древнейшее философское учение Китая',}
var answerAll = { 
	answer1: ["Учение 'Восьми стихий'", "Восьмерка Оно Озаки", "Философия 'Восьмеричного пути'"],
	answer2: ["Манас", "Атман", "Сансара"],
	answer3: ["Буддизм", "Конфуцианство", "Даосизм"]};		
// переводим объект в строку
var strQuestionTemp = JSON.stringify(questionTemp); 
var strAnswerAll = JSON.stringify(answerAll); 
// заносим в локальное хранилище именно строку, объект нельзя
localStorage.setItem('boxQuestionTemp', strQuestionTemp);
localStorage.setItem('boxAnswerAll', strAnswerAll);
// выводим строку из хранилища
var resultQuestionTemp = localStorage.getItem('boxQuestionTemp');
var resultAnswerAll = localStorage.getItem('boxAnswerAll');
//возвращаем строке вид объекта
var question = JSON.parse(resultQuestionTemp);
var answerAll = JSON.parse(resultAnswerAll);

// шаблонизируем это дело в HTML
    function loadtemp(){
      		
	var outputTitle = Mustache.render("{{title}}", question);
    document.getElementById('title').innerHTML = outputTitle;
	var outputQuest1 = Mustache.render("{{quest1}}", question);
	var templateAnswer1 = "{{#answer1}} <li><input name='answer1' type='radio' id='{{.}}' value=''><label for='{{.}}'> {{.}} </label> </li> {{/answer1}}";
	var resultAnswer1 = Mustache.render(templateAnswer1, answerAll);
	document.getElementById('qiestion1Div').innerHTML = resultAnswer1;
	var templateAnswer2 = "{{#answer2}} <li><input name='answer2' type='radio' id='{{.}}' value=''><label for='{{.}}'> {{.}} </label> </li> {{/answer2}}";
	var resultAnswer2 = Mustache.render(templateAnswer2, answerAll);
	document.getElementById('qiestion2Div').innerHTML = resultAnswer2;
	var templateAnswer3 = "{{#answer3}} <li><input name='answer3' type='radio' id='{{.}}' value=''><label for='{{.}}'> {{.}} </label> </li> {{/answer3}}";
	var resultAnswer3 = Mustache.render(templateAnswer3, answerAll);
	document.getElementById('qiestion3Div').innerHTML = resultAnswer3;
	document.getElementById('question1h5').innerHTML = outputQuest1;
	var outputQuest2 = Mustache.render("{{quest2}}", question);
    document.getElementById('question2h5').innerHTML = outputQuest2;
	var outputQuest3 = Mustache.render("{{quest3}}", question);
    document.getElementById('question3h5').innerHTML = outputQuest3;
    var outputSubmit = Mustache.render("{{submit}}", question);
    document.getElementById('myButton').setAttribute('value', outputSubmit);


var $statusAnswer1 = $("#Восьмерка Оно Озаки").prop('checked');	
console.log($statusAnswer1);
var $statusAnswer2 = $("#Манас").is(':checked');
console.log($statusAnswer2);
var $statusAnswer3 = $("#Конфуцианство").is(':checked');
console.log($statusAnswer3);


var statusAnswer1 = document.querySelector('#Восьмерка Оно Озаки');
var button = document.querySelector('#myButton');

$('#myButton').on('click', function(e) {
	console.log($statusAnswer1);
	console.log($statusAnswer2);
	console.log($statusAnswer3);
	e.preventDefault();
	if($statusAnswer1) {

  		console.log('ты прав!')
  	} else { console.log('ты не прав!')};
});


};





// ========пытаемся пробовать вешать функции на кнопку





