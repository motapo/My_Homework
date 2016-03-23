var stopwatchInterval = 0;      // интервал нашего цикла
var stopwatchClock = $(".container.stopwatch").find(".clock"),
    stopwatchDigits = stopwatchClock.find('span');

// Если предыдущая сессия была закончена в то время как секундомер был запущен
// то запустит его снова по времени.
if(Number(localStorage.stopwatchBeginingTimestamp) && Number(localStorage.stopwatchRunningTime)){
    var runningTime = Number(localStorage.stopwatchRunningTime) + new Date().getTime() - Number(localStorage.stopwatchBeginingTimestamp);
    localStorage.stopwatchRunningTime = runningTime;
    startStopwatch(); }

// Если прошло какое-то время, то производится его запись на экран
// в случае если значение не равно нулю
if(localStorage.stopwatchRunningTime){
    stopwatchDigits.text(returnFormattedToMilliseconds(Number(localStorage.stopwatchRunningTime)));
} else { localStorage.stopwatchRunningTime = 0; }
$('#start').on('click',function(){ 
    if(stopwatchClock.hasClass('inactive')){ startStopwatch() } });
$('#pause').on('click',function(){ pauseStopwatch(); });
$('#reset').on('click',function(){ resetStopwatch(); });

// функция паузы секундомера
        stopwatchClock.on('click',function(){
        if(stopwatchClock.hasClass('inactive')){
        startStopwatch()} else {pauseStopwatch();}});
function startStopwatch(){
    // предотвращает создание нескольких запусков одновременно
        clearInterval(stopwatchInterval);
    var startTimestamp = new Date().getTime(),
        runningTime = 0;
        localStorage.stopwatchBeginingTimestamp = startTimestamp;

    var stopStart = document.getElementById('startId');
        stopStart.style.background = "yellow";
    var stopPause = document.getElementById('pauseId');
        stopPause.style.background = "red";
    var stopStartA = document.getElementById('start');
        stopStartA.innerHTML = 'Тикает)';
    var stopRes = document.getElementById('resetId');
        stopRes.style.background = "#40FF00";
    var stopResA = document.getElementById('reset');
        stopResA.innerHTML = 'сброс';
    var stopPauseA = document.getElementById('pause');
        stopPauseA.innerHTML = 'Стоп?';

     // происходит запоминание длительности предыдущей сессии
    if(Number(localStorage.stopwatchRunningTime)){
        runningTime = Number(localStorage.stopwatchRunningTime);
    } else{ localStorage.stopwatchRunningTime = 1; }

    // каждые 100 мс проводится расчет
    // time = новое время (дата) - время последней остановки + предыдущее время работы
        stopwatchInterval = setInterval(function () {
    var stopwatchTime = (new Date().getTime() - startTimestamp + runningTime);
        stopwatchDigits.text(returnFormattedToMilliseconds(stopwatchTime)); }, 100);
        stopwatchClock.removeClass('inactive');}

function pauseStopwatch(){
    // останавливаем выполнение интервала
        clearInterval(stopwatchInterval);
        if(Number(localStorage.stopwatchBeginingTimestamp)){

        //  в режиме паузы вычисляется время простоя
    var runningTime = Number(localStorage.stopwatchRunningTime) + new Date().getTime() - Number(localStorage.stopwatchBeginingTimestamp);
        localStorage.stopwatchBeginingTimestamp = 0;
        localStorage.stopwatchRunningTime = runningTime;
        stopwatchClock.addClass('inactive');

    var stopStart = document.getElementById('startId');
        stopStart.style.background = "red";
    var stopStartA = document.getElementById('start');
        stopStartA.innerHTML = 'Дальше?';
    var stopPause = document.getElementById('pauseId');
        stopPause.style.background = "yellow";
    var stopRes = document.getElementById('resetId');
        stopRes.style.background = "#40FF00";
    var stopPauseA = document.getElementById('pause');
        stopPauseA.innerHTML = '&#8987; &#8987; &#8987;';} }

// функция сброса секундомера
function resetStopwatch(){
        clearInterval(stopwatchInterval);
        stopwatchDigits.text(returnFormattedToMilliseconds(0));
        localStorage.stopwatchBeginingTimestamp = 0;
        localStorage.stopwatchRunningTime = 0;
        stopwatchClock.addClass('inactive');

     var stopStart = document.getElementById('startId');
        stopStart.style.background = "yellow";
    var stopPause = document.getElementById('pauseId');
        stopPause.style.background = "yellow";
    var stopStartA = document.getElementById('start');
        stopStartA.innerHTML = 'Стартуем!';
    var stopRes = document.getElementById('resetId');
        stopRes.style.background = "yellow";
    var stopResA = document.getElementById('reset');
        stopResA.innerHTML = '&#8986; &#8986; &#8986;';
    var stopPauseA = document.getElementById('pause');
        stopPauseA.innerHTML = '&#8987; &#8987; &#8987;'; }

function returnFormattedToMilliseconds(time){
    var milliseconds = Math.floor((time % 1000) / 1),
        milliseconds = milliseconds < 100 ? '0' + milliseconds : milliseconds;
        seconds = Math.floor((time/1000) % 60),
        minutes = Math.floor((time/(1000*60)) % 60),
        hours = Math.floor((time/(1000*60*60)) % 24);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;}