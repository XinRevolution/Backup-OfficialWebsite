var Scrollable = true;

$(function () {
    // 輪盤套件初始化
    $('.slick-row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300
    });

    // 事件 - 滑鼠滾輪移動
    $(document).on('mousewheel', '.js-block-mousewheel', function (evt) {
        if (Scrollable) {
            Scrollable = false;

            if (evt.deltaY > 0)
                $('.slick-next').click();
            else
                $('.slick-prev').click();

            setTimeout(function () {
                Scrollable = true;
            }, 1300);
        }
    });
});