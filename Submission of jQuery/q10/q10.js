// q10.js
$(function () {
    // Simulated list of existing emails for uniqueness check
    const existingEmails = ['test@example.com', 'user@site.com', 'hello@world.com'];

    // Helper: validate email regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Validate on form submit
    $('#regForm').on('submit', function (e) {
        e.preventDefault();
        let valid = true;
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();

        // Reset
        $('.errorMsg').hide();
        $('input').removeClass('invalid');

        // 1. Check Name field -> not empty
        if (name === '') {
            $('#nameError').show();
            $('#name').addClass('invalid');
            valid = false;
        }

        // 2. Check Email field -> valid format and uniqueness
        if (!isValidEmail(email)) {
            $('#emailError').text('Enter a valid email address.').show();
            $('#email').addClass('invalid');
            valid = false;
        } else if (existingEmails.includes(email.toLowerCase())) {
            $('#emailError').text('Email already in use.').show();
            $('#email').addClass('invalid');
            valid = false;
        }

        // 3. Check Password -> minimum 8 characters
        if (!password || password.length < 8) {
            $('#passError').show();
            $('#password').addClass('invalid');
            valid = false;
        }

        if (valid) {
            // 4. Show success message if all fields valid
            $('#result').text('Registration successful!').addClass('success').show();
            // Optionally add new email to existingEmails to simulate uniqueness after registration
            existingEmails.push(email.toLowerCase());
        } else {
            $('#result').text('').removeClass('success');
        }
    });

    // 5. Highlight invalid fields dynamically with red border using .css()
    // We'll check fields on blur to provide dynamic feedback
    $('#name').on('blur', function () {
        if ($(this).val().trim() === '') $(this).addClass('invalid');
        else $(this).removeClass('invalid');
    });

    $('#email').on('blur', function () {
        const val = $(this).val().trim();
        if (!isValidEmail(val) || existingEmails.includes(val.toLowerCase())) $(this).addClass('invalid');
        else $(this).removeClass('invalid');
    });

    $('#password').on('blur', function () {
        if ($(this).val().length < 8) $(this).addClass('invalid');
        else $(this).removeClass('invalid');
    });
});
