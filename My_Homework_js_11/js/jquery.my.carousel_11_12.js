(function ($) {

  $.fn.myсarousel = function(options){ 

    var defaults = {
      wrapperColor: 'black',
      wrapperBoxShadow: '1px 1px 10px blue',
      timeSlide: 500,
      imgBorder: '1px solid white',
      imgBorderRadius: 'none',
      leftRightButtonColor: 'lightgrey',
      colorArrow: 'black',
      colorTextPhoto: 'white',
      weightTextPhoto: '700'
      }
    var settings = $.extend(defaults, options);

    var $wrapper = $('.wrapper');
    var $img = $('img');
    var $leftRightButton = $('.carousel-arrow-left, .carousel-arrow-right');
    var $textPhoto = $('.carousel-list p');
    $wrapper.css({
      'background': settings.wrapperColor,
      'boxShadow': settings.wrapperBoxShadow
    });
    $img.css({
      'border': settings.imgBorder,
      'border-radius': settings.imgBorderRadius
    });
    $leftRightButton.css({
      'background': settings.leftRightButtonColor,
      'color': settings.colorArrow
    });
    $textPhoto.css({
      'color': settings.colorTextPhoto,
      'font-weight': settings.weightTextPhoto
    });

     var $leftUiel = $('.carousel-arrow-left');
     var $rightUiel = $('.carousel-arrow-right');
     var $elemntsList = $('.carousel-list');

     var $pixelsOffset = 320;
     var $currentLeftValue = 0;
     var $elemntsCount = $elemntsList.find('li').length;
     var $minimumOffset = -(($elemntsCount - 3)* $pixelsOffset);
     var $maximumOffset = 0;

     $leftUiel.click(function() {
      if ($currentLeftValue != $maximumOffset) {
        $currentLeftValue +=320;
        $elemntsList.animate({
          left: $currentLeftValue + 'px'}, settings.timeSlide);
        }
      });

     $rightUiel.click(function() {
      if ($currentLeftValue != $minimumOffset) {
       $currentLeftValue -=320;
       $elemntsList.animate({
        left: $currentLeftValue + 'px'}, settings.timeSlide);
       }
     });
    }
})(jQuery);