/* Аналог CSS sticky (фиксация меню при скролинге) */
window.onscroll = function() {fixTop()};
var header = document.getElementById("page-header");
function fixTop(){
    if (window.pageYOffset > 50) {
    header.classList.add("sticky-header");
}
    else {
        header.classList.remove("sticky-header");
    }
}

/* Скрипт для правой и левой кнопки меню, чтоб был активен только 1 или нисколько */
var Ch1 = document.getElementById('check-ID1');
var Ch2 = document.getElementById('check-ID2');

Ch1.onclick = function() {
    document.getElementById('check-ID2').checked=false;}
Ch2.onclick = function() {
    document.getElementById('check-ID1').checked=false;}