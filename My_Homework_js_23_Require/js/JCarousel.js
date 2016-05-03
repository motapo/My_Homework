// 1. 'JCarousel' - это имя модуля
// 2. ['jquery', 'jcarousel'] - зависимости - бибилиотеки или же другие модули, которые будут использованы в этом блоке
// 3.  функция, которая будет выполнена после загрузки всех зависимостей.
define('JCarousel', ['jquery', 'jcarousel'], function ($, jcarousel){
  
  var JqCar = $(function() {
  $('.jcarousel').jcarousel({
      wrap: 'both',
      animation: {
        duration: 200,
        easing:   'linear',
        complete: function() {
        }}
  });
// Инициализация прокрутки слайдера
  $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });
  $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });
 // Пагинация слайдера
  $('.jcarousel-pagination')
  // Триггер класса active
  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
// Инициализация пагинации слайдера
  $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });
// Автопрокрутка слайдера
  $('.jcarousel').jcarouselAutoscroll({
      interval: 4000,
      target: '+=1',
      autostart: true
  });
});

  //обязательно нужно всегда возвращать результат, чтобы можно было его использовать в MAIN.JS
  return JqCar;
}) 