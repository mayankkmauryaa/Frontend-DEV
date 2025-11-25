// q9.js
// Use the two separate jQuery instances:
// jQuery1 (old) handles carousel rotation
// jQuery2 (new) manages modals/tooltips and widget highlights

/* ========== Version 1 (jQuery1) carousel rotation ========== */
(function ($) {
    // ensure $ points to jQuery1
    const slides = $('#carousel .slide');
    let idx = 0;
    slides.hide().eq(0).show().addClass('active');

    // rotate every 3 seconds using fadeOut/fadeIn
    setInterval(function () {
        slides.eq(idx).fadeOut(300).removeClass('active');
        idx = (idx + 1) % slides.length;
        slides.eq(idx).fadeIn(300).addClass('active');
    }, 3000);
})(window.jQuery1);

/* ========== Version 2 (jQuery2) for widget modal/tooltips ========== */
(function ($) {
    // highlight active widget on click
    $('#widgets').on('click', '.widget', function () {
        $('.widget').css('background', '');
        $(this).css('background', '#e6ffe6'); // highlight active
    });

    // attach tooltips on hover using jQuery2
    $('#widgets').on('mouseenter', '.widget', function (e) {
        const txt = $(this).data('widget') + ' info';
        const tip = $('#tooltip');
        tip.text(txt).css({ top: e.pageY + 8, left: e.pageX + 8 }).fadeIn(100);
    }).on('mousemove', '.widget', function (e) {
        $('#tooltip').css({ top: e.pageY + 8, left: e.pageX + 8 });
    }).on('mouseleave', '.widget', function () {
        $('#tooltip').fadeOut(100);
    });

    // modal popup simulation: on double click show simple alert-like modal
    $('#widgets').on('dblclick', '.widget', function () {
        const content = 'Notification for ' + $(this).data('widget');
        // simple modal using a dynamic element
        const modal = $('<div class="modal" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);padding:20px;border:1px solid #333;background:#fff;z-index:9999;"></div>');
        modal.append(`<p>${content}</p><button class="closeBtn">Close</button>`);
        $('body').append(modal);
        modal.find('.closeBtn').on('click', function () { modal.remove(); });
    });
})(window.jQuery2);
