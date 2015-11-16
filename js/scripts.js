document.addEventListener("DOMContentLoaded", function(event) {

    'use strict';

    // Trigger nav
    var trigger = document.querySelector('.trigger'),
        nav = document.querySelector('.nav');

    trigger.addEventListener('click', navToggle, false);

    function navToggle(event) {
        event.preventDefault();
        nav.classList.toggle('show');
        this.classList.toggle('open');
    }

});
