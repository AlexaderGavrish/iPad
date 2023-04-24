
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


  

// Рабочий вариан без jquery чистый js

// (() => {
//     window.onload = () => {
//         let header__burger = document.querySelector('.header__burger');
//         let header__menu = document.querySelector('.header__menu');
//         let body = document.querySelector('body');
//         header__burger.addEventListener('click', (e) => {
//             header__burger.classList.toggle('active');
//             header__menu.classList.toggle('active');
//             body.classList.toggle('lock');
//         })
//     }
// })();
