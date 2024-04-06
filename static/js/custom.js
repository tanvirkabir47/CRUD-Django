// Dark Theme Toggle Start
document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("dark-theme-toggle");
    const darkIcon = document.getElementById("darkIcon");
    const body = document.body;

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        darkIcon.src = currentTheme === "dark-theme" ? "/static/images/sun.png" : "/static/images/moon.png";
    }

    themeButton.addEventListener("click", function () {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            darkIcon.src = "/static/images/moon.png";
            localStorage.setItem("theme", "light-theme");
        } else {
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
            darkIcon.src = "/static/images/sun.png";
        }
    });
});


// Mobile Menu Button Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const navbarContent = document.getElementById('navbar');

menuBtn.addEventListener('click', ()=>{
    navbarContent.style.right = "0"; 
})
menuCloseBtn.addEventListener('click', ()=>{
    navbarContent.style.right = "-100%"; 
})


// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});





// Scroll to Top 
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}