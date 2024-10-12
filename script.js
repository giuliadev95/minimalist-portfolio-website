/* SHOW/HIDE HAMBURGER MENU */
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


/* CHANGE SOURCE OF HERO IMAGE ON DESKTOP */
var desktop_image = document.querySelector(".hero-image");
function replacePattern() {

    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    console.clear();
    console.log(desktop_image.src);

    if(windowWidth >= 768 && windowWidth < 1024) {
        desktop_image.src = "./images/homepage/tablet/image-homepage-hero@2x.jpg"
        console.log(desktop_image.src);
    }
    else if (windowWidth >= 1024) {
        desktop_image.src= "./images/homepage/desktop/image-homepage-hero@2x.jpg";
        console.log(desktop_image.src);
    } else {
        desktop_image.src = " ./images/homepage/mobile/image-homepage-hero@2x.jpg"
    }
}

replacePattern();
window.addEventListener('resize', replacePattern);

/*
funzione modulare:
function replaceSrc(mobile, tablet, desktop) {
     if(windowWidth >= 768 && windowWidth < 1024) {
        desktop_image.src = tablet
        console.log(desktop_image.src);
    }
    else if (windowWidth >= 1024) {
        desktop_image.src= desktop
        console.log(desktop_image.src);
    } else {
        desktop_image.src = mobile
    }
}
}
*/



