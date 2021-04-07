'use strict';
{
  $(function () {
    /*=================================================
    burger menu
    ===================================================*/
    $('.menu-btn').on('click', function () {
      $('.menu-btn, #nav').toggleClass('open');
      $('body').toggleClass('noscroll');
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
    // var $win = $(window),
    //   $header = $('.header-top'),
    //   $main = $('#main'),
    //   mainPos = $main.offset().top,
    //   changedClass = 'change';

    // $win.on('load scroll', function () {
    //   var value = $(this).scrollTop();
    //   if ($ > 768) {
    //     $header.addClass(changedClass);
    //   } else {
    //     $header.removeClass(changedClass);
    //   }
    // });

    var $win = $(window),
        $fv = $('#fv'),
        $headerTop = $('.header-top'),
        headerHeight = $fv.outerHeight(),
        changeClass = 'change';
      $win.on('load scroll', function () {
        var value = $(this).scrollTop();
        if ($win.width() > 768) {
          if (value > headerHeight) {
            $headerTop.addClass(changeClass);
          } else {
            $headerTop.removeClass(changeClass);
          }
        }
      });

    /*=================================================
    slider
    ===================================================*/
    $('.slick-slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
    });
  });
}
