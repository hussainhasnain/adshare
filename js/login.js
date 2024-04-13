
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

/* ============ Mobile Navigation Starts Here =============== */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");

});


/**=================== Form Validation & AJAX =============== */

$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var $form = $(this);

    // Perform form validation
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var hasError = false;

    // Check if the email field is empty
    if (email === '') {
      showError('emailError', 'Please fill in the email field');
      hasError = true;
    } else {
      hideError('emailError');
    }

    // Check if the password field is empty
    if (password === '') {
      showError('passwordError', 'Please fill in the password field');
      hasError = true;
    } else {
      hideError('passwordError');
    }

    // Validate email format
    if (!validateEmail(email)) {
      showError('emailError', 'Please enter a valid email address');
      hasError = true;
    } else {
      hideError('emailError');
    }

    // Submit the form if there are no errors
    if (!hasError) {
      $form.ajaxSubmit({
        success: function(response) {
          // Display success message
          $('#formMessage').text('You have signed in successfully!').show();

          // Reset form fields
          $form.trigger('reset');
        },
        error: function() {
          alert('Error submitting form. Please try again.');
        }
      });
    }
  });


  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(elementId, errorMessage) {
    $('#' + elementId).text(errorMessage).show();
  }

  
  function hideError(elementId) {
    $('#' + elementId).text('').hide();
  }
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




































    