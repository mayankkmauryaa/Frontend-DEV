// q4.js
$(function () {
    // 1. "Hide" button -> hide specific banner
    $('#hideOne').on('click', function () {
        $('#banner1').hide();
    });

    // 2. "Show" button -> show hidden banners
    $('#showAll').on('click', function () {
        $('#banners .banner').show();
    });

    // 3. "Slide Up/Down" buttons -> toggle banners
    $('#slideToggle').on('click', function () {
        $('#banners .banner').first().slideToggle(300);
    });

    // 4. "Fade In/Fade Out" -> show/hide gradually
    $('#fadeToggle').on('click', function () {
        $('#banners .banner').last().fadeToggle(300);
    });

    // 5. Automatically rotate through banners every 5 seconds using fadeIn/fadeOut
    (function rotate() {
        const banners = $('#banners .banner');
        let index = 0;
        banners.hide();
        banners.eq(0).show();
        setInterval(function () {
            banners.eq(index).fadeOut(400, function () {
                index = (index + 1) % banners.length;
                banners.eq(index).fadeIn(400);
            });
        }, 5000);
    })();
});
