// q3.js
$(function () {
    // 1. Click on a question -> toggle answer visibility
    $('.faq').on('click', '.question', function () {
        $(this).next('.answer').slideToggle(200);
    });

    // 2. Hover -> change question color
    $('.faq').on('mouseenter', '.question', function () {
        $(this).css('color', '#2a7ae2');
    }).on('mouseleave', '.question', function () {
        $(this).css('color', '');
    });

    // 3. Double-click question -> collapse all answers
    $('.faq').on('dblclick', '.question', function () {
        $('.answer').slideUp(200);
    });

    // 4. Focus on answer input -> highlight parent question
    $('.faq').on('focus', '.answer-input', function () {
        $(this).closest('.qa').find('.question').addClass('highlight');
    });

    // 5. Blur from input -> reset background color
    $('.faq').on('blur', '.answer-input', function () {
        $(this).closest('.qa').find('.question').removeClass('highlight');
    });
});
