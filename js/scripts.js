document.addEventListener("DOMContentLoaded", function(event) {

    'use strict';

    // Trigger nav
    var trigger = document.querySelector('.trigger'),
        nav = document.querySelector('.nav'),
        year = document.querySelector('.year'),
        date = new Date().getFullYear();

    year.innerHTML = date;

    trigger.addEventListener('click', navToggle, false);

    function navToggle(event) {
        event.preventDefault();
        nav.classList.toggle('show');
        this.classList.toggle('open');
    }

});
