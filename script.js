/*  ------------------------
    SHOW/HIDE HAMBURGER MENU 
    ------------------------ */
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


/*  --------------------------------------------------------------------------------------------
    CHANGE THE SOURCE OF IMAGES (TABLET / DESKTOP/ DEFAULT MOBILE) DEPENDING ON ON WINDOW WIDTH:
    --------------------------------------------------------------------------------------------
    HERO IMAGE 
    ------------ */
var desktop_image = document.querySelector(".hero-image");
function replacePattern() {

    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    console.clear();

    if(windowWidth >= 768 && windowWidth < 1024) {
        desktop_image.src = "./images/homepage/tablet/image-homepage-hero.jpg";
        console.log(`hero-image src: ${desktop_image.src}`);
    }
    else if (windowWidth >= 1024) {
        desktop_image.src= "./images/homepage/desktop/image-homepage-hero.jpg"; 
        console.log(`hero-image src: ${desktop_image.src}`);
    } else {
        desktop_image.src = " ./images/homepage/mobile/image-homepage-hero.jpg";
        console.log(`hero-image src: ${desktop_image.src}`);
    }
}

replacePattern();
window.addEventListener('resize', replacePattern);

    
/*  ------------------------
    ABOUT ME IMAGE 
    ------------------------ */
var profile_image = document.querySelector(".profile-image");
function replacePortrait() {

    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if(windowWidth >= 768 && windowWidth < 1024) {
        profile_image.src = "./images/homepage/tablet/image-homepage-profile.jpg";
        console.log(`profile-image src: ${profile_image.src}`);
    }
    else if (windowWidth >= 1024) {
        profile_image.src= "./images/homepage/desktop/image-homepage-profile.jpg"; 
        console.log(`profile-image src: ${profile_image.src}`);
    } else {
        profile_image.src = " ./images/homepage/mobile/image-homepage-profile.jpg";
        console.log(`profile-image src: ${profile_image.src}`);
    }
}

replacePortrait();
window.addEventListener('resize', replacePortrait);


/*  ------------------------
    "MANAGE" PROJECT IMAGE 
    ------------------------ */
    var manage_image = document.querySelector(".manage");
    function replaceManage() {
    
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
        if(windowWidth >= 768 && windowWidth < 1024) {
            manage_image.src = "./images/portfolio/tablet/image-portfolio-manage.jpg";
            console.log(`manage src: ${profile_image.src}`);
        }
        else if (windowWidth >= 1024) {
            manage_image.src= "./images/portfolio/desktop/image-portfolio-manage.jpg"; 
            console.log(`manage src: ${profile_image.src}`);
        } else {
            manage_image.src = " ./images/portfolio/mobile/image-portfolio-manage.jpg";
            console.log(`manage src: ${profile_image.src}`);
        }
    }
    
    replaceManage();
    window.addEventListener('resize', replaceManage);

    /*  ------------------------
    "INSURE" PROJECT IMAGE 
    ------------------------ */
    var insure_image = document.querySelector(".insure");
    function replaceInsure() {
    
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
        if(windowWidth >= 768 && windowWidth < 1024) {
            insure_image.src = "./images/portfolio/tablet/image-portfolio-insure.jpg";
            console.log(`manage src: ${insure_image.src}`);
        }
        else if (windowWidth >= 1024) {
            insure_image.src= "./images/portfolio/desktop/image-portfolio-insure.jpg"; 
            console.log(`manage src: ${insure_image.src}`);
        } else {
            insure_image.src = " ./images/portfolio/mobile/image-portfolio-insure.jpg";
            console.log(`manage src: ${insure_image_image.src}`);
        }
    }
    
    replaceInsure();
    window.addEventListener('resize', replaceInsure);

    /*  ------------------------
    "BOOKMARK" PROJECT IMAGE 
    ------------------------ */
    var bookmark_image = document.querySelector(".bookmark");
    function replaceBookmark() {
    
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
        if(windowWidth >= 768 && windowWidth < 1024) {
            bookmark_image.src = "./images/portfolio/tablet/image-portfolio-bookmark.jpg";
            console.log(`manage src: ${bookmark_image.src}`);
        }
        else if (windowWidth >= 1024) {
            bookmark_image.src= "./images/portfolio/desktop/image-portfolio-bookmark.jpg"; 
            console.log(`manage src: ${bookmark_image}`);
        } else {
            bookmark_image.src = " ./images/portfolio/mobile/image-portfolio-bookmark.jpg";
            console.log(`manage src: ${bookmark_image.src}`);
        }
    }
    
    replaceBookmark();
    window.addEventListener('resize', replaceBookmark);
    



