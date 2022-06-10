let showCloseMenu = document.querySelector(".burger");
showCloseMenu .addEventListener('click', show);

function show() {  /*функция делает из бургера крестик и показывает\скрывает меню*/ 
    let y = document.querySelector(".menu_links");
    y.classList.toggle("active");

    let z = document.querySelector(".burger_poloski");
    z.classList.toggle("rotate");

    let w = document.querySelector(".poloskaSpan");
    w.classList.toggle("ischezaet");
}

let offset = 0; /* смещение от левого края*/ 
const sliderLine = document.querySelector('.slider_line');
document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 360;
    if (offset > 720) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 360;
    if (offset < 0) {
        offset = 720;
    }
    sliderLine.style.left = -offset + 'px'
})