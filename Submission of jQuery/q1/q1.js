// q1.js
$(document).ready(function () {
    // 1. On page load -> set personalized greeting by time of day
    function setGreetingByTime() {
        const now = new Date();
        const hour = now.getHours();
        let part = 'Hello';
        if (hour >= 5 && hour < 12) part = 'Good Morning';
        else if (hour >= 12 && hour < 18) part = 'Good Afternoon';
        else part = 'Good Evening';
        $('#greeting').text(`${part}, visitor!`);
    }
    setGreetingByTime();

    // 2. Button “Change Greeting” -> changes to a motivational quote
    $('#changeGreeting').on('click', function () {
        // replace text and add quote styling
        $('#greeting').text('“Don’t watch the clock; do what it does. Keep going.”').addClass('quote');
    });

    // 3. Toggle visibility of a welcome message using another button
    $('#toggleWelcome').on('click', function () {
        // toggle class to show/hide welcome message
        $('#welcomeMsg').toggleClass('hidden');
    });

    // 4. Show an alert when greeting is clicked
    $('#greeting').on('click', function () {
        alert($(this).text());
    });
});
