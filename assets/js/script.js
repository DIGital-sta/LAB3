const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');


burger.onclick = function() {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
};


document.querySelectorAll('.js-scroll').forEach(link => {
    link.onclick = function() {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    };
});