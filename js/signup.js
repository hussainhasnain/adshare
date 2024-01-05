
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




const btnNextEl = document.querySelector(".btn__next");
const btnNextStep2 = document.querySelector(".btn__next2");
const btnSignUp = document.querySelector(".btn__signUp");
const formFirstEl = document.querySelector(".form__first");
const formSecondEl = document.querySelector(".form__second");
const formThirdEl = document.querySelector(".form__third");

/**
// Regular Expression for Valid Character (Wild Card Validation)
const validCharPattern = /^[a-zA-Z0-9/s-]+$/;

function isValidInput(input, errorElement){
  const value = input.value;
  if(!validCharPattern.test(value)){
    errorElement.textContent = "Invalid Characters entered";
    return false;
  }else{
    errorElement.textContent = "";
    return true;
  }
}

 */

btnNextEl.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform validation check for required fields
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const firstNameInput = document.querySelector("#firstname");
  const lastNameInput = document.querySelector("#lastname");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === "") {
        emailError.textContent = "Please enter your email address";
        return;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address";
        return;
    } else {
        emailError.textContent = "";
    }
  if (passwordInput.value === "") {
    document.querySelector("#passwordError").textContent = "Please enter your password";
    return;
  } else {
    document.querySelector("#passwordError").textContent = "";
  }

  if (firstNameInput.value === "") {
    document.querySelector("#firstNameError").textContent = "Please enter your fistname";
    return;
  } else {
    document.querySelector("#firstNameError").textContent = "";
  }

  if (lastNameInput.value === "") {
    document.querySelector("#lastNameError").textContent = "Please enter your lastname";
    return;
  } else {
    document.querySelector("#lastNameError").textContent = "";
  }

  // Validation passed, hide the first form and display the second form
  formSecondEl.style.display = "block";
  formFirstEl.style.display = "none";
});

const btnPrev2El = document.querySelector('.btn__prev2');
btnPrev2El.addEventListener('click', function(){
  formFirstEl.style.display ="block";
  formSecondEl.style.display = "none";
});
const btnPrev3El = document.querySelector('.btn__prev3');
btnPrev3El.addEventListener('click', function(){
  formSecondEl.style.display ="block";
  formThirdEl.style.display = "none";
});


btnNextStep2.addEventListener("click", function(event) {
  event.preventDefault();

  const charityInput = document.querySelector("#charity");
  const urlInput = document.querySelector("#url");
  const phoneInput = document.querySelector("#phone");
  const countrySelect = document.querySelector("#country");

  //validation
  
  if (charityInput.value === "") {
    document.querySelector("#organisationError").textContent = "Enter organisation name";
    return;
  } else {
    document.querySelector("#organisationError").textContent = "";
  }
  // with https:// validation
  const urlRegex =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

  // without https:// validation

  // const urlRegex = /^([a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https?:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|((https?:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?))$/g;


  if (urlInput.value === "") {
    document.querySelector("#urlError").textContent = "Please enter your url address";
    return;
  } else if (!urlRegex.test(urlInput.value)) {
    urlError.textContent = "Please enter a valid url address";
    return;
  }
  else {
    document.querySelector("#urlError").textContent = "";
  }

  if (phoneInput.value === "") {
    document.querySelector("#phoneError").textContent = "Please enter your phone number";
    return;
  } else {
    document.querySelector("#phoneError").textContent = "";
  }
  if(countrySelect.value === ""){
    document.querySelector("#countryError").textContent = "Please select your country";
    return;
  }else{
    document.querySelector("#countryError").textContent = "";
  }


  
  formThirdEl.style.display = "block";
  formSecondEl.style.display = "none";

});

document.querySelector('.btn__third').addEventListener("click", function(event){
  event.preventDefault;
  const addressInput = document.querySelector("#address1");
  const cityInput = document.querySelector("#city");
  const postInput = document.querySelector("#postcode");
  const stateInput = document.querySelector("#state");

  if (addressInput.value === "") {
    document.querySelector("#address1Error").textContent = "Please enter your address";
    return;
  } else {
    document.querySelector("#address1Error").textContent = "";
  }

  if (cityInput.value === "") {
    document.querySelector("#cityError").textContent = "Please enter your city";
    return;
  } else {
    document.querySelector("#cityError").textContent = "";
  }
  if (postInput.value === "") {
    document.querySelector("#postcodeError").textContent = "Please enter your post code";
    return;
  } else {
    document.querySelector("#postcodeError").textContent = "";
  }

});
// Get the select element
const selectCountry = document.getElementById("country");

// Fetch country data from REST Countries API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Extract country names from the response data
    const countryNames = data.map(country => country.name.common);

    // Sort country names alphabetically
    countryNames.sort();

    // Populate the select element with country options
    countryNames.forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      selectCountry.appendChild(option);
    });
  })
  .catch(error => {
    console.log("An error occurred while fetching country data:", error);
  });


/* ============ Mobile Navigation Starts Here =============== */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");

});


/**========== Google reCaptcha ======== */
// default loading indicator
$('.g-recaptcha').asyncReCAPTCHA({
// spinner: {
//   attach: true, 
//   remove: true
// }
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
