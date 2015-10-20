(function () {

    'use strict';

    // Trigger nav
    var trigger = document.querySelector('.trigger');
    nav = document.querySelector('.nav');

    trigger.addEventListener('click', navToggle, false);

    function navToggle() {
        alert('trigger');
        if (nav.style.display = 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
        if (this)
    }



    // $(".trigger").on('click', function(e) {
    //     $('.nav').slideToggle();
    //     e.preventDefault();
    // })

})

