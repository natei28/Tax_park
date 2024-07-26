/* Аналог CSS sticky (фиксация меню при скролинге) */
window.onscroll = function() {fixTop()};
var header = document.getElementById("page-header");
function fixTop(){
    if (window.pageYOffset > 50) {header.classList.add("sticky-header");}
    else {header.classList.remove("sticky-header");}}

/* Скрипт для правой и левой кнопки меню, чтоб был активен только 1 или нисколько */
var Ch1 = document.getElementById('menu-button-left');
var Ch2 = document.getElementById('menu-button-right');

Ch1.onclick = function() {document.getElementById('menu-button-right').checked=false;}
Ch2.onclick = function() {document.getElementById('menu-button-left').checked=false;}

/* Скрипт настроек для слайдера Owl-carusel */
$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        items:1,
        loop:true,
        autoplay:false,
        smartSpeed:1000,
        autoplayTimeout:7000,
        nav:false,
        dots:false,
        center: true,		
    });
});
    const slider_feedback = $("#slider-feedback").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:7000,
        nav:false,
        dots:false,
        center: false,
        responsive:{
            0:{items:1},
            800:{items:2},
            1200:{items:3},
        }
    });
    