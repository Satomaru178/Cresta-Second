'use strict';
{
  $(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.menu-btn, #mask').on('click', function () {
      $('.menu-btn, #nav, #mask').toggleClass('open');
    });

    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });

    /*=================================================
    スクロール後のヘッダーメニュー変化
    ===================================================*/
    var $win = $(window),
      $header = $('.header-top'),
      $main = $('#main'),
      mainPos = $main.offset().top,
      changedClass = 'change';

    $win.on('load scroll', function () {
      var value = $(this).scrollTop();
      if (value > mainPos) {
        $header.addClass(changedClass);
      } else {
        $header.removeClass(changedClass);
      }
    });
