// q5.js
$(function () {
    // 1. Click a manager -> highlight all direct reports
    $('.department').on('click', '.manager', function () {
        const managerId = $(this).data('id');
        // remove previous highlights
        $('.employee').removeClass('highlight');
        // highlight employees with data-manager == managerId
        $(`.employee[data-manager="${managerId}"]`).addClass('highlight');
    });

    // 2. Hover on an employee -> show contact info using .next()
    // We'll add a contact element right after employee (hidden), then show it on hover.
    $('.employee').each(function () {
        $(this).after(`<div class="contact">Contact: ${$(this).text().toLowerCase()}@example.com</div>`);
    });

    $('.department').on('mouseenter', '.employee', function () {
        $(this).next('.contact').slideDown(120);
    }).on('mouseleave', '.employee', function () {
        $(this).next('.contact').slideUp(120);
    });

    // 3. Click on a department -> change background of all members using .children()
    $('.dept-title').on('click', function () {
        const deptSection = $(this).closest('.department');
        deptSection.children().filter('.member').toggleClass('highlight');
    });

    // 4. Select a random employee -> highlight sibling employees
    $('#randomEmployee').on('click', function () {
        const allEmployees = $('.employee');
        const rand = Math.floor(Math.random() * allEmployees.length);
        const chosen = allEmployees.eq(rand);
        // highlight siblings (other employees in same department)
        chosen.siblings('.employee').addClass('highlight');
        // also highlight chosen for clarity
        chosen.addClass('highlight');
    });

    // 5. Collapse/expand team using .parent() and .find()
    let collapsed = false;
    $('#collapseTeams').on('click', function () {
        if (!collapsed) {
            // collapse teams: hide members but keep headings
            $('.department').each(function () {
                $(this).find('.member').not('.manager').slideUp(200);
            });
            collapsed = true;
        } else {
            $('.department').each(function () {
                $(this).find('.member').slideDown(200);
            });
            collapsed = false;
        }
    });
});
