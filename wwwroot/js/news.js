$(function () {
    // 事件 - 點選 - More 按鈕 - Toggle
    $(document).on('click', '.js-btn-more', function () {
        var newsBlock = $(this).parents('.js-block-news').first();
        if (newsBlock.hasClass('news-active')) {
            newsBlock.removeClass('news-active');
            newsBlock.addClass('refresh');
            $(this).text('more');
        } else {
            $('.js-block-news').removeClass('news-active');
            newsBlock.addClass('news-active');
            newsBlock.removeClass('refresh');
            $(this).text('collapse');
        }
    });
});

