$(function(){

	var html = $('#test').html();
	var name = 'Рачок Виктор Юрьевич';
	var span1 = 'Паталогически непереношу бездельников и уважаю тех, кто упав, снова встает и идет к мечте!';
	var title = 'Имею дикое желание освоить frontend:';
	var nick = 'motapo-';
	var motivation = 'Желание есть, мотивация железная, время найдем!)';

	var ulLi = [
	{ content: 'Жизненно важно развиваться, увеличивать багаж знаний' },
	{ content: 'Хочу сменить основной род деятельности' },
	{ content: 'Пришло время менять русло реки!)' }];
	
	var ulTable = [
	{  	table: 'Моб.номера'},
	{ 	table: 'Skype'	},
	{ 	table: 'Социалка' }];

	var numberMob = [
	{	num: '+380990470700'},
	{	num: '+380636530003'}];

	var links = [
	{ href: 'https://www.facebook.com/profile.php?id=100008426642384',
		 a: 'МОРДАbook&copy;' },
	{ href: 'https://ua.linkedin.com/in/виктор-рачок-b294aba3',
		 a: 'LinkedIn&copy;' }];

	var content = tmpl(html, {
		data: ulLi, name, span1, title, nick, motivation,
		tab: ulTable,
		number: numberMob,
		link: links });
		
	$('body').append(content);
});

var $myVar = $('img');
$myVar.on('click', function(){
	alert('работает!');
});