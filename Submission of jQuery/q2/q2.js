// q2.js
$(function () {
    // 1. Click on a product -> highlight background
    $('#products').on('click', '.product', function (e) {
        // prevent click when clicking favorite button
        if ($(e.target).hasClass('favorite')) return;
        $('.product').removeClass('highlight');
        $(this).addClass('highlight');
    });

    // 2. Hover over a product -> show additional product details
    $('#products').on('mouseenter', '.product', function () {
        $(this).find('.details').slideDown(150);
    }).on('mouseleave', '.product', function () {
        $(this).find('.details').slideUp(150);
    });

    // 3. Clicking a “Favorite” icon -> toggles a “selected” class
    $('#products').on('click', '.favorite', function (e) {
        e.stopPropagation(); // prevent parent click
        $(this).toggleClass('selected');
    });

    // 4. Apply different styles to products with discounts using attribute selector
    // Add a special class for products with data-discount attribute
    $('[data-discount]').each(function () {
        $(this).addClass('discounted');
        const d = $(this).data('discount');
        $(this).prepend(`<div class="badge">-${d}%</div>`);
    });

    // 5. Show an alert if a product is out of stock (using data attribute)
    $('#products').on('click', '.product', function () {
        const stock = parseInt($(this).data('stock'), 10);
        if (stock === 0) {
            alert('Sorry — this product is out of stock.');
        }
    });
});
