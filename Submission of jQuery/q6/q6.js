// q6.js
$(function () {
    // 1. Subscribe -> enable notifications
    $('#topics').on('click', '.subscribe', function () {
        const topicDiv = $(this).closest('.topic');
        topicDiv.find('span').addClass('subscribed');
        showMessage(`Subscribed to ${topicDiv.data('topic')}`);
    });

    // 2. Unsubscribe -> disable notifications
    $('#topics').on('click', '.unsubscribe', function () {
        const topicDiv = $(this).closest('.topic');
        topicDiv.find('span').removeClass('subscribed');
        showMessage(`Unsubscribed from ${topicDiv.data('topic')}`);
    });

    // 3. Dynamically add new subscription topics -> attach .on() click events
    // Use event delegation above so newly added topics automatically have working buttons.
    $('#addTopic').on('click', function () {
        const name = $('#newTopic').val().trim();
        if (!name) {
            showMessage('Please enter a topic name.');
            return;
        }
        const html = `<div class="topic" data-topic="${name}">
      <span>${name}</span>
      <button class="subscribe">Subscribe</button>
      <button class="unsubscribe">Unsubscribe</button>
    </div>`;
        $('#topics').append(html);
        $('#newTopic').val('');
        showMessage(`Added topic "${name}"`);
    });

    // 4. Remove specific subscription -> detach .off() event
    // We'll provide a remove-by-name example (removes topic div and turns off events for it).
    // For demo: remove topic when double-clicked
    $('#topics').on('dblclick', '.topic', function () {
        const topicDiv = $(this);
        const name = topicDiv.data('topic');
        // detach events directly attached to this element
        topicDiv.off();
        topicDiv.remove();
        showMessage(`Removed topic "${name}" and detached its events`);
    });

    // 5. Show success message -> dynamically inserted into DOM on action
    function showMessage(msg) {
        $('#messageArea').stop(true, true).text(msg).fadeIn(150).delay(1500).fadeOut(400);
    }
});
