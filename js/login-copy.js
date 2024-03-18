

/* ============ Mobile Navigation Starts Here =============== */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");

});

const btnSignInEl = document.querySelector(".btn__signin");

btnSignInEl.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform validation check for required fields
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  
  if (emailInput.value === "") {
    document.querySelector("#emailError").textContent = "Please enter your email address.";
    return; // Stop execution if validation fails
  } else {
    document.querySelector("#emailError").textContent = "";
  }

  if (passwordInput.value === "") {
    document.querySelector("#passwordError").textContent = "Please enter your password.";
    return; // Stop execution if validation fails
  } else {
    document.querySelector("#passwordError").textContent = "";
  }

  // Reset the form fields
  emailInput.value = "";
  passwordInput.value = "";
  
});

/**========== Google reCaptcha ======== */
// default loading indicator
$('.g-recaptcha').asyncReCAPTCHA({
  // spinner: {
  //   attach: true, 
  //   remove: true
  // }
});


/**============ Hide / Show Password Functionality =========== */
const eyeEl = document.querySelector(".passwordUser__eye");
const eyeIconEl = document.querySelector(".passwordUser__eye--icon");
const passwordUserInputEl = document.querySelector(".passwordUser__input");
const eyeOpenEl = document.querySelector(".passwordUser__eye--icon-open");
const eyeCloseEl = document.querySelector(".passwordUser__eye--icon-close");

  eyeEl.addEventListener("click", function(){
  if(passwordUserInputEl.type === "password"){
    passwordUserInputEl.type = "text";
    eyeOpenEl.style.display = "block";
    eyeCloseEl.style.display = "none";
    passwordUserInputEl.focus();
  }else{
    passwordUserInputEl.type = "password";
    eyeOpenEl.style.display = "none";
    eyeCloseEl.style.display = "block";
    passwordUserInputEl.focus();
  }
});




































    