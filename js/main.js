'use strict';
{
  $(function () {
    /*=================================================
    burger menu
    ===================================================*/
    $('.menu-btn, #mask').on('click', function () {
      $('.menu-btn, #nav, #mask').toggleClass('open');
    });

    /*=================================================
    smooth scroll
    ===================================================*/
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });

    /*=================================================
    sticky header
    ===================================================*/
    var $win = $(window),
      $header = $('.header-top'),
      $main = $('#main'),
      mainPos = $main.offset().top,
      changedClass = 'change';

    $win.on('load scroll', function () {
      var value = $(this).scrollTop();
      if (value > (mainPos / 3)) {
        $header.addClass(changedClass);
      } else {
        $header.removeClass(changedClass);
      }
    });

    /*=================================================
    slider
    ===================================================*/
    $('.slick-slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
    });
  });
}
