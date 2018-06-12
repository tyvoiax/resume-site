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
        menu.style.display = 'none';
        document.documentElement.style.overflow = 'scroll';
    }
};

// Smooth scrolling using jquery
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Close menu before scrolling to the target
    if (window.innerWidth < 768) {
        document.documentElement.style.overflow = 'scroll';
        menu.style.display = 'none';
    }
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

