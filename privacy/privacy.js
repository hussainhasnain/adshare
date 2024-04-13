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
var sticky = new Sticky('.privacy__table', {
    marginTop: 40,
});



/* ============ Scroll To Top Starts =============== */

let btn = document.querySelector('#buttonUp');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    
  });
});

/* ============ Scroll To Top Ends =============== */
