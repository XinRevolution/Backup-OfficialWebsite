$(window).on('load', function () {
  $('#block-preloader').delay(1000).fadeOut("slow");
});


$(function () {
  // 事件 - 點選  - 漢堡圖 - Toggle
  $(document).on('click', '#btn-menu', function(){
    $('#btn-menu').toggleClass('is-active');
    $('#block-menu').toggleClass('menu-active');
  });

  // 事件 - 點選 - 關於我們 - Toggle
  $(document).on('click', '#btn-aboutUs-toggle', function(){
    $('#block-aboutUs').toggleClass('aboutUs-active');
  });

  // 事件 - 點選 - 關於我們 - Close
  $(document).on('click', '#btn-aboutUs-close', function(){
    $('#block-aboutUs').removeClass('aboutUs-active');
  });
});