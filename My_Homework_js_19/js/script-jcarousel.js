$(function() {
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