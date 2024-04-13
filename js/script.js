
/* ============ Preloader event =============== */
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
   setTimeout(function() {
     preloader.style.display = 'none'; // Hide the preloader
}, 500); // 0.5 seconds delay
});
   
/* ============ Mobile Navigation Starts Here =============== */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const body = document.html;

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");

  // Check if the header has the nav-open class *********** Applying position: fixed to the body for nav open
//   if (headerEl.classList.contains('nav-open')) {
//     document.documentElement.style.overflow = 'hidden';

    
// } else {
  
//   document.documentElement.style.overflow = 'scroll';
// }

});

// Check if header has .nav-open class

/* ============ Mobile Navigation Ends Here =============== */

/**======= Typed Js ========*/

var typed = new Typed('#element', {
    strings: ['Get Heard', 'Get Known', 'Get Seen'],
    typeSpeed: 50,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
});


/**======= Typed Js Ends  =======*/


/*============= Cookies Pop Up ===============*/

// Function to check if the user has accepted the cookies
function hasAcceptedCookies() {
  return localStorage.getItem('cookiesAccepted') === 'true';
}

// Function to set the user's acceptance of cookies
function setCookiesAccepted() {
  localStorage.setItem('cookiesAccepted', 'true');
}
  
// Function to show the cookie popup after a delay
function showCookiePopupWithDelay() {
  if (!hasAcceptedCookies()) {
    setTimeout(function() {
      document.getElementById('cookie-popup').style.display = 'block';
    }, 1000); // 1-second delay
  }
}
  

// Function to hide the cookie popup and set the acceptance flag
function acceptCookies() {
  document.getElementById('cookie-popup').style.display = 'none';
  setCookiesAccepted();
}

// Event listener for accepting cookies
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);

// Show the cookie popup on page load with a delay
document.addEventListener('DOMContentLoaded', showCookiePopupWithDelay);



