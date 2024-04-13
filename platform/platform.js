/* ============ Mobile Navigation Starts Here =============== */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");

});



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
  