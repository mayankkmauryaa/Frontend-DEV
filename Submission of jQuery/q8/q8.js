// q8.js
$(function () {
    // 1. "Add New Post" -> append a new post
    $('#addPost').on('click', function () {
        const title = $('#postTitle').val().trim() || 'Untitled';
        const content = $('#postContent').val().trim() || 'No content.';
        const newPost = $(`<article class="post"><h3>${title}</h3><p>${content}</p></article>`);
        $('#posts').append(newPost);
        $('#postTitle, #postContent').val('');
    });

    // 2. "Prepend Featured Post" -> add a post at the top
    $('#prependFeatured').on('click', function () {
        const featured = $(`<article class="post featured"><h3>Featured: Quick Tips</h3><p>Featured content goes here.</p></article>`);
        $('#posts').prepend(featured);
    });

    // 3. "Remove Last Post" -> delete last element
    $('#removeLast').on('click', function () {
        $('#posts .post').last().remove();
    });

    // 4. Add tags to posts -> use .before()/.after() for placement
    // For demonstration, add a tag after every post on hover
    $('#posts').on('mouseenter', '.post', function () {
        if ($(this).find('.tag').length === 0) {
            $(this).append(`<div class="tag">#news</div>`);
        }
    });

    // 5. Highlight posts with specific keywords dynamically
    // If a post contains 'performance' (case-insensitive), highlight it
    function highlightKeyword(keyword) {
        $('#posts .post').each(function () {
            const txt = $(this).text().toLowerCase();
            if (txt.indexOf(keyword.toLowerCase()) !== -1) {
                $(this).addClass('highlight');
            } else {
                $(this).removeClass('highlight');
            }
        });
    }
    // initial highlight of 'performance'
    highlightKeyword('performance');

    // also demonstrate dynamic checking every time a post is added
    $('#posts').on('DOMNodeInserted', function () {
        highlightKeyword('performance');
    });
});
