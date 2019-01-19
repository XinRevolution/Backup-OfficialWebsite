$(function(){
    // 控制 Header 樣式
    if($('.js-ctrl-background').data('header') == "bright")
        $('.js-style-toggleable, .wrapper').addClass('bright');

    // 時間軸 - 季 - 展開
    $(document).on('click', '.js-btn-switch', function(){
       $(this).parent().toggleClass('storyExpand'); 
    });

    // 時間軸 - 章 - 點選
    $(document).on('click', '.storyDiv a', function(event){
    });
});