// Get all the elements to that is involved in menu interactions

// Get the hamburger menu icon
const hamburgerIcon = document.getElementsByClassName('fa-bars')[0];

// Get  the whole menu
const menu = document.getElementsByClassName('menu-container')[0];

// Get the close menu icon
// const closeMenuIcon = document.querySelector('.close-icon .fa-times');
const closeMenuIcon  = document.getElementsByClassName('fa-times')[0];

// Show menu and hide the scrollbar when the humburger menu icon is clicked
hamburgerIcon.addEventListener('click', () => {
    menu.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
});

// Hide menu and show the scrollbar when the close menu icon is clicked
closeMenuIcon.addEventListener('click', (e) => {
    if (e.target == closeMenuIcon) {
        menu.style.display = 'none';
        document.documentElement.style.overflow = 'scroll';
    }
   
});

// When the menu (mobile menu) is opened and the window is resized (increased)
// Hide the menu
window.onresize = () => {
    if (window.innerWidth > 768) {
        document.documentElement.style.overflow = 'scroll';
        menu.style.display = 'none';
    }
};