	createBody = {

	createHeader: function() {
		document.body.style.margin = "30px auto";
		document.body.style.paddingTop = "10px";
		document.body.style.width = "800px";
		document.body.style.height = "530px";
		document.body.style.border = "1px solid black";
		var mainDiv = document.createElement('div');
		mainDiv.className = "header";
		mainDiv.innerHTML = "<h4>Тест по программированию</h4>";
		document.body.insertBefore(mainDiv, document.body.firstChild);
		mainDiv.style.marginLeft = "310px";	
		mainDiv.style.marginBottom = "30px";
		mainDiv.style.color = "#664D1D";
	},
	createNameQuestion: function() {
		var nameList = document.createElement('ul');
		var body = document.getElementsByTagName('body');
		for (i =1 ; i < 4; i++) {
			var nameList = document.createElement('ul');
			body[0].appendChild(nameList)
			nameList.innerHTML = + i + '. Вопрос № '+ i;
			nameList.style.cssText = "color: grey; text-align: centre; font-weight: 700; margin: 10px 0px";
			nameList.style.marginLeft = "60px";
			nameList.style.marginTop = "20px";
			}
		},
	createAnswerLi: function() {
		var liAnswer = document.createElement('li');
		var nameList = document.getElementsByTagName('ul');
		for (i = 1; i < 4; i++) {
			for (j = 0; j < 3; j++) {
			var liAnswer = document.createElement('li');
			nameList[j].appendChild(liAnswer);		
			liAnswer.innerHTML = '<input type="checkbox" id="liAnswer'+ j +'nameList'+ i +'"><label for="liAnswer'+ j +'nameList'+ i +'">Вариант ответа № </label>'+ i;	
			liAnswer.style.listStyle = "none";
			liAnswer.style.marginLeft = "20px";
			liAnswer.style.marginTop = "10px";
			liAnswer.style.marginBottom = "-10px";
			}
		}
		var mySubmit = document.createElement('submit');
		mySubmit.className = "btn btn-primary btn-lg";
		mySubmit.innerHTML = 'Проверить мои результаты';
		document.body.appendChild(mySubmit);
		mySubmit.style.marginLeft = "310px";
		mySubmit.style.color = "white";
		mySubmit.style.border = "2px solid gray";		
		mySubmit.style.marginTop = "20px";
		},
	}				
createBody.createHeader();
createBody.createNameQuestion();
createBody.createAnswerLi();


