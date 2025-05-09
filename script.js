const header = document.querySelector("header");

window.addEventListener("scroll", function () 
{ 
    header.classList.toggle("sticky", window.scrollY > 0)
});

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".nav-list");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home-text', {delay: 150, origin: 'top'});
sr.reveal('.home-img', {delay: 300, origin: 'bottom'});
sr.reveal('.feature, .product, .contact, .cta', {delay: 200, origin: 'top'});
