$(document).ready(function() {
    var start_pos=$('.shopping-cart').offset().top;
     $(window).scroll(function(){
      if ($(window).scrollTop()>=start_pos) {
          if ($('.shopping-cart').hasClass()==false) $('.shopping-cart').addClass('fixed');
      }
      else $('.shopping-cart').removeClass('fixed');
     });
    });

    //shopping__cart

