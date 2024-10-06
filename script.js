document.addEventListener("DOMContentLoaded", function() {
    const HAMBURGER_ICON = document.querySelector(".hamburger-container");
    const HEADER = document.getElementById("header");
    const MAIN = document.getElementById("main");
    const FOOTER = document.getElementById("footer");
    const LINKS = document.querySelector(".navigation-links");

    if (HAMBURGER_ICON) {
        HAMBURGER_ICON.addEventListener('click', () => {
            HAMBURGER_ICON.classList.toggle('active');
            HEADER.classList.toggle('active');
            MAIN.classList.toggle('active');
            FOOTER.classList.toggle('active');
            LINKS.classList.toggle('active');      
        });
    } else {
        console.error('Hamburger icon not found!');
    }
     
    // set the menu to close when its links are clicked
    const NAVLINKS = document.querySelectorAll(".navigation-links a");
    console.log(NAVLINKS);
    NAVLINKS.forEach(link => {
        link.addEventListener("click", function() {
            HAMBURGER_ICON.classList.remove('active');
            HEADER.classList.remove('active');
            MAIN.classList.remove('active');
            FOOTER.classList.remove('active');
            LINKS.classList.remove('active');
        });
    });
});

