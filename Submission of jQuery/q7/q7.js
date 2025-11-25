// q7.js
$(function () {
    // 1. Search input filters courses in real-time using .keyup()
    $('#search').on('keyup', function () {
        const q = $(this).val().trim().toLowerCase();
        let matched = 0;

        $('.course').each(function () {
            const text = $(this).text();
            const lower = text.toLowerCase();
            // 2. Highlight matched text using .css() — we'll wrap matched portion in <span> for clarity
            $(this).html(text); // reset html

            if (q === '') {
                $(this).show();
            } else if (lower.indexOf(q) !== -1) {
                // Show and highlight matched substring
                const idx = lower.indexOf(q);
                const before = text.slice(0, idx);
                const match = text.slice(idx, idx + q.length);
                const after = text.slice(idx + q.length);
                $(this).html(`${before}<span class="highlight">${match}</span>${after}`);
                $(this).show();
                matched++;
            } else {
                // 3. Toggle visibility of courses not matching search
                $(this).hide();
            }
        });

        // 4. Show count of matched courses dynamically
        $('#count').text(`Matched: ${q === '' ? $('.course').length : matched}`);
    });

    // 5. Clear search -> reset list to show all courses
    $('#clearSearch').on('click', function () {
        $('#search').val('').keyup();
    });

    // initialize count
    $('#count').text(`Matched: ${$('.course').length}`);
});
