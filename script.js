//colocar um background no header apos 50px de scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const lineRedHeader = document.querySelector('.line-red-header');
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
        lineRedHeader.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        lineRedHeader.classList.remove('active');
    }
});


//aparecer menu ao clicar no botão de bar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse'); 


navbarToggler.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');

    } else {
        navbarCollapse.classList.add('show');
    }
});

