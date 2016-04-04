'use strict;'
//=====создаем объекты: "ВОПРОС"---"ВАРИАНТЫ ОТВЕТОВ"=====
var questionTemp = {
		title: 'Философские учения Востока',
		submit: 'проверить мои результаты',
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

      function loadtemp(){
      		
		var outputTitle = Mustache.render("{{title}}", question);
        document.getElementById('title').innerHTML = outputTitle;
		var outputQuest1 = Mustache.render("{{quest1}}", question);
        document.getElementById('question1h5').innerHTML = outputQuest1;
		var outputQuest2 = Mustache.render("{{quest2}}", question);
        document.getElementById('question2h5').innerHTML = outputQuest2;
		var outputQuest3 = Mustache.render("{{quest3}}", question);
        document.getElementById('question3h5').innerHTML = outputQuest3;
        var outputSubmit = Mustache.render("{{submit}}", question);
        document.getElementById('myButton').setAttribute('value', outputSubmit);

      }


// ========пытаемся пробовать вешать функции на кнопку
var $myCheckRadio = $('#question1h5');
var $myButton = $('#myButton');
console.log($myCheckRadio, $myButton);

$myButton.on('click', function() {

  alert( 'ты ошибся' )

});




// ========================

