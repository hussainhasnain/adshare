
/* ============ Mobile Navigation Starts Here =============== */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");
   
});
/* ============ Mobile Navigation Ends Here =============== */

/* ============ Smooth Scroll =============== */
var scroll = new SmoothScroll('a[href*="#"]');

/* ============ Sticky JS =============== */
var sticky = new Sticky('.terms__table', {
    marginTop: 40,
});
