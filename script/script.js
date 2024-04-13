let $ = document;

let menuBtn = $.querySelector('#menubtn');
let menu = $.querySelector('#menu');
let sideNav = $.querySelector('.sidenav');

sideNav.style.right = "-330px";

menuBtn.addEventListener('click', function () {
    if (sideNav.style.right === "-330px") {
        sideNav.style.right = "0";
        menu.src = "./img/close.png";
    } else {
        sideNav.style.right = "-330px";
        menu.src = "./img/menu.png";
    }    
})