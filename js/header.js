/* Mobile Hamburger menu  */
document.addEventListener('DOMContentLoaded', function() {
    const HAMBURGER_ICON = document.querySelector('.hamburger-container');
    if (HAMBURGER_ICON) {
        HAMBURGER_ICON.addEventListener('click', () => {
            HAMBURGER_ICON.classList.toggle('active');
        });
    } else {
        console.error('Hamburger icon not found!');
    }
});
