
// Payment Method JS code

document.querySelector(".dropdown__span").textContent;

/*------------------------------  Select Dropdown Functionality  --------------------------- */

const dd = document.querySelector('#dropdown-wrapper');
const links = document.querySelectorAll('.dropdown-list a');
const span = document.querySelector('.dropdown__span');



dd.addEventListener('click', function(event) {
  event.stopPropagation();
  this.classList.toggle('is-active');
});

// Add click event listeners to the links
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    span.innerHTML = evt.currentTarget.textContent;
    dd.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  dd.classList.remove('is-active');
});


/*------------------------------  Sidebar Functionality  --------------------------- */
function openNav() {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const sideNavEl = document.querySelector(".sidenav");
    if (screenWidth > 600) {
      document.getElementById("mySidenav").style.width = "22.757575rem";
      document.getElementById("main").style.marginLeft = "22.757575rem";
    } else if (screenWidth < 600){
      document.getElementById("mySidenav").style.width = "22.757575rem";
      // document.getElementById("main").style.marginLeft = "150px";
    }
  }
  
  function closeNav() {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (screenWidth > 600) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    } else if(screenWidth < 600) {
      document.getElementById("mySidenav").style.width = "0";
      // document.getElementById("main").style.marginLeft = "0";
    }
  }
  
  function toggleSidebar() {
    const sideNavEl = document.querySelector(".sidenav");
    const sideNavWidth = sideNavEl.offsetWidth;
    
    if (sideNavWidth > 0) {
      closeNav();
    } else {
      openNav();
    }
  }


/*------------------------------  Add Credit Card Functionality  --------------------------- */

const formProfileEl = document.querySelector(".profile__formBox");
const overlayEl = document.querySelector(".overlay");
const profileFormCrossUsersEl = document.querySelector(".profile__formBox--cross-users");
const addUsersFormEl = document.querySelector(".profile__formBox--addUsers");
const addUsersButton = document.querySelector(".users__add--content");

  
overlayEl.addEventListener("click", function(){
overlayEl.classList.remove("overlay__hidden");
addUsersFormEl.classList.remove("profile__formBox--hidden-users");
});
  
document.addEventListener("keydown", function(e){
if(e.key === "Escape"){
overlayEl.classList.remove("overlay__hidden");
addUsersFormEl.classList.remove("profile__formBox--hidden-users");
}
});



/*======================= Sidebar drop down script Starts========================== */
// const dropdown1 = document.querySelector(".sidenav__list--item-account");
// const dropdown2 = document.querySelector(".sidenav__list--item-users");
// const dropdown3 = document.querySelector(".sidenav__list--item-tracking");
// const list1 = document.querySelector(".sidenav__list--item-list1");
// const list2 = document.querySelector(".sidenav__list--item-list2");
// const list3 = document.querySelector(".sidenav__list--item-list3");
// const iconCaret1El1 = document.querySelector(".icon__caret1");
// const iconCaret1El2 = document.querySelector(".icon__caret2");
// const iconCaret1El3 = document.querySelector(".icon__caret3");


// dropdown1.addEventListener("click", function() {
//   list1.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list1.classList.contains("toggled")) {
//     iconCaret1El1.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El1.setAttribute("name", "chevron-up-outline");
//   }
// });

// dropdown2.addEventListener("click", function() {
//   list2.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list2.classList.contains("toggled")) {
//     iconCaret1El2.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El2.setAttribute("name", "chevron-up-outline");
//   }
// });

// dropdown3.addEventListener("click", function() {
//   list3.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list3.classList.contains("toggled")) {
//     iconCaret1El3.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El3.setAttribute("name", "chevron-up-outline");
//   }
// });

/*======================= Sidebar drop down script Ends ========================== */




// Payment Method Page JS Code Ends here....

































// /*------------------------------  Select Dropdown Functionality  --------------------------- */

// const dropdownWrappers = document.querySelectorAll('.dropdown-wrapper');

// // Add click event listeners to all dropdown wrappers
// for (let i = 0; i < dropdownWrappers.length; i++) {
//   const dd = dropdownWrappers[i];
//   const links = dd.querySelectorAll('.dropdown-list a');
//   const span = dd.querySelector('.dropdown__span');

//   dd.addEventListener('click', function (event) {
//     event.stopPropagation();
//     this.classList.toggle('is-active');
//   });

//   // Add click event listeners to the links
//   for (let j = 0; j < links.length; j++) {
//     links[j].addEventListener('click', function (evt) {
//       evt.stopPropagation();
//       const selectedProfile = evt.currentTarget.dataset.profile;
//       span.innerHTML = evt.currentTarget.textContent;
//       span.setAttribute('data-profile', selectedProfile); // Set the data-profile attribute to the selected value
//       dd.classList.remove('is-active'); // Hide the dropdown after selecting an element
//     });
//   }
// }

// // Add a click event listener to the document
// document.addEventListener('click', function () {
//   for (let i = 0; i < dropdownWrappers.length; i++) {
//     dropdownWrappers[i].classList.remove('is-active');
//   }
// });

// /*------------------------------  Sidebar Functionality  --------------------------- */
// function openNav() {
//     let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     const sideNavEl = document.querySelector(".sidenav");
//     if (screenWidth > 600) {
//       document.getElementById("mySidenav").style.width = "22.757575rem";
//       document.getElementById("main").style.marginLeft = "22.757575rem";
//     } else if (screenWidth < 600){
//       document.getElementById("mySidenav").style.width = "22.757575rem";
//       // document.getElementById("main").style.marginLeft = "150px";
//     }
//   }
  
//   function closeNav() {
//     let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
//     if (screenWidth > 600) {
//       document.getElementById("mySidenav").style.width = "0";
//       document.getElementById("main").style.marginLeft = "0";
//     } else if(screenWidth < 600) {
//       document.getElementById("mySidenav").style.width = "0";
//       // document.getElementById("main").style.marginLeft = "0";
//     }
//   }
  
//   function toggleSidebar() {
//     const sideNavEl = document.querySelector(".sidenav");
//     const sideNavWidth = sideNavEl.offsetWidth;
    
//     if (sideNavWidth > 0) {
//       closeNav();
//     } else {
//       openNav();
//     }
//   }

//   /*------------------------------  Action Button Functionality  --------------------------- */ 

//   const actionIcons1El = document.querySelector(".users__list--action-icon-1");
//   const actionIcons2El = document.querySelector(".users__list--action-icon-2");
//   const actionIcons3El = document.querySelector(".users__list--action-icon-3");
//   const actionIcons4El = document.querySelector(".users__list--action-icon-4");
//   const actionIcons5El = document.querySelector(".users__list--action-icon-5");
//   const actionBox1El = document.querySelector(".users__list--action-box-1");
//   const actionBox2El = document.querySelector(".users__list--action-box-2");
//   const actionBox3El = document.querySelector(".users__list--action-box-3");
//   const actionBox4El = document.querySelector(".users__list--action-box-4");
//   const actionBox5El = document.querySelector(".users__list--action-box-5");
  
//   // Show/hide action box when an action icon is clicked
//   // actionIcons1El.addEventListener("click", function(){
//   //     actionBox1El.classList.toggle("hidden");
//   //     actionBox2El.classList.add("hidden");
//   //     actionBox3El.classList.add("hidden");
//   //     actionBox4El.classList.add("hidden");
//   //     actionBox5El.classList.add("hidden");
//   // });
  
//   // actionIcons2El.addEventListener("click", function(){
//   //     actionBox2El.classList.toggle("hidden");
//   //     actionBox1El.classList.add("hidden");
//   //     actionBox3El.classList.add("hidden");
//   //     actionBox4El.classList.add("hidden");
//   //     actionBox5El.classList.add("hidden");
//   // });
  
//   // actionIcons3El.addEventListener("click", function(){
//   //     actionBox3El.classList.toggle("hidden");
//   //     actionBox1El.classList.add("hidden");
//   //     actionBox2El.classList.add("hidden");
//   //     actionBox4El.classList.add("hidden");
//   //     actionBox5El.classList.add("hidden");
//   // });
  
//   // actionIcons4El.addEventListener("click", function(){
//   //     actionBox4El.classList.toggle("hidden");
//   //     actionBox1El.classList.add("hidden");
//   //     actionBox2El.classList.add("hidden");
//   //     actionBox3El.classList.add("hidden");
//   //     actionBox5El.classList.add("hidden");
//   // });
  
//   // actionIcons5El.addEventListener("click", function(){
//   //     actionBox5El.classList.toggle("hidden");
//   //     actionBox1El.classList.add("hidden");
//   //     actionBox2El.classList.add("hidden");
//   //     actionBox3El.classList.add("hidden");
//   //     actionBox4El.classList.add("hidden");
//   // });

// // Hide action boxes when clicking anywhere on the document except the action icons
// // document.addEventListener("click", function(event) {
// //     // Check if the clicked element is an action icon or inside any of the action boxes
// //     if (
// //       !actionIcons1El.contains(event.target) &&
// //       !actionBox1El.contains(event.target) &&
// //       !actionIcons2El.contains(event.target) &&
// //       !actionBox2El.contains(event.target) &&
// //       !actionIcons3El.contains(event.target) &&
// //       !actionBox3El.contains(event.target) &&
// //       !actionIcons4El.contains(event.target) &&
// //       !actionBox4El.contains(event.target) &&
// //       !actionIcons5El.contains(event.target) &&
// //       !actionBox5El.contains(event.target)
// //     ) {
// //       actionBox1El.classList.add("hidden");
// //       actionBox2El.classList.add("hidden");
// //       actionBox3El.classList.add("hidden");
// //       actionBox4El.classList.add("hidden");
// //       actionBox5El.classList.add("hidden");
// //     }
// //   });

//   /*------------------------------  Profile Form Functionality  --------------------------- */
//   // const editButton = document.querySelector('.users__list--action-editForm');
// // const editUsersEl = document.querySelectorAll(".users__list--action-editForm");
// const deleteUsersEl = document.querySelectorAll(".users__list--action-deleteForm");
// const iconPencilEl = document.querySelector(".profile__details--edit");
// const iconPencilOrganisationEl = document.querySelector(".profile__personal--edit");
// const formProfileEl = document.querySelector(".profile__formBox");
// const formOrganisationEl = document.querySelector(".profile__organisation--formBox");
// const profileEl = document.querySelector(".profile");
// const overlayEl = document.querySelector(".overlay");
// const profileFormImgEl = document.querySelector(".profile__form--photo-img");
// const profileFormFileEl = document.querySelector(".profile__form--input");
// const profileFormCrossEl = document.querySelector(".profile__formBox--cross");
// const profileFormCrossUsersEl = document.querySelector(".profile__formBox--cross-users");
// const profileFormCrossDeleteEl = document.querySelector(".profile__formBox--cross-delete");
// const profileOrganisationFormCrossEl = document.querySelector(".profile__organisation--formBox--cross");
// const btnCancelEl = document.querySelector(".btn__cancel");
// const addUsersFormEl = document.querySelector(".profile__formBox--addUsers");
// const addUsersButton = document.querySelector(".users__add--content");
// const deleteUsersBoxEl = document.querySelector(".profile__formBox--delete");



// // Function to show the success message
// function showSuccessMessage(message) {
//     const successMessageElement = document.querySelector('.success');
//     successMessageElement.textContent = message;
//     successMessageElement.style.display = 'block';

//     // After 1.5 seconds, hide the success message
//     setTimeout(function () {
//         successMessageElement.style.display = 'none';
//     }, 1500);
// }

// // Get the input elements
// const nameInput = document.getElementById('firstname');
// const emailInput = document.getElementById('email');

// // Function to remove numeric words from the input and update the value
// function cleanInput(event, inputElement) {
//   let inputText = event.target.value;
//   const cleanedText = inputText.replace(/\d+/g, ''); // Remove all numeric words from the input

//   if (cleanedText !== inputText) {
//     // If the input text was modified, update the input field value
//     inputElement.value = cleanedText;
//     inputText = cleanedText; // Update the inputText to the cleaned version
//   }

//   // Prevent the user from typing numeric characters
//   if (/\d/.test(inputText)) {
//     event.preventDefault();
//   }
// }

// // Attach the event listeners to handle the input events (when typing)
// nameInput.addEventListener('input', function (event) {
//   cleanInput(event, nameInput);
// });

// emailInput.addEventListener('input', function (event) {
//   cleanInput(event, emailInput);
// });
// // Clean the input on page load (remove numeric words from the initial content) and restrict typing numeric data
// document.addEventListener('DOMContentLoaded', function () {
//   cleanInput({ target: nameInput });
//   nameInput.addEventListener('keydown', function (event) {
//     // Check if the key pressed is a numeric character (0-9) and prevent it if true
//     if (/^\d$/.test(event.key)) {
//       event.preventDefault();
//     }
//   });
// });

// // Function to validate the form fields and save the data asynchronously
// async function validateForm() {
//   const nameInput = document.getElementById('firstname');
//   const emailInput = document.getElementById('email');
//   const profileDropdown = document.querySelector('.dropdown__span');

//   // Function to remove numeric words from the input and update the value
//   const cleanInput = function (event) {
//       let inputText = event.target.value;
//       const cleanedText = inputText.replace(/\d+/g, ''); // Remove all numeric words from the input

//       if (cleanedText !== inputText) {
//           // If the input text was modified, update the input field value
//           nameInput.value = cleanedText;
//           inputText = cleanedText; // Update the inputText to the cleaned version
//       }

//       // Prevent the user from typing numeric characters
//       if (/\d/.test(inputText)) {
//           event.preventDefault();
//       }
//   };
//   // Attach the event listener to handle the input event (when typing)
//   nameInput.addEventListener('input', cleanInput);

//   // Check if the name field is empty
//   if (nameInput.value.trim() === '') {
//       nameError.textContent = 'Please enter a name';
//       nameInput.focus();
//       return false;
//   } else {
//       nameError.textContent = ''; // Clear the error message if input is valid
//   }

//   // Check if the email field is empty
//   if (emailInput.value.trim() === '') {
//       emailError.textContent = 'Please enter an email';
//       emailInput.focus();
//       return false;
//   } else {
//       emailError.textContent = ''; // Clear the error message if input is valid
//   }

//   // Check if the email field has a valid email format using a simple regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailInput.value.trim())) {
//       emailError.textContent = 'Please enter a valid email address';
//       emailInput.focus();
//       return false;
//   } else {
//       emailError.textContent = ''; // Clear the error message if input is valid
//   }

//   // Check if a profile is selected
//   if (profileDropdown.innerHTML === 'Choose your Profile') {
//       alert('Please select a profile.');
//       return false;
//   }

//   // Prepare the data object for AJAX call
//   const data = {
//       name: nameInput.value.trim(),
//       email: emailInput.value.trim(),
//       profile: profileDropdown.innerHTML,
//   };

//   // Show the spinner during the AJAX call
//   const spinner = document.querySelector('.spinner');
//   spinner.style.display = 'block';

//   try {
//       // Make the AJAX call using fetch API
//       // const response = await fetch('/save-data', {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//       });

//       // Hide the spinner after the AJAX call is completed
//     spinner.style.display = 'none';

//       // Handle the response (optional)
//       if (response.ok) {
//           const responseData = await response.json();
//           console.log('Data saved successfully!', responseData);
//           // Show the success message
//           showSuccessMessage('Data saved successfully!');
//           return true; // Indicate the form is valid and data saved successfully
//       } else {
//           console.error('Error saving data:', response.statusText);
//           // Handle the error or show an error message to the user
//           return false;
//       }
//   } catch (error) {
//       console.error('Error saving data:', error);
//       // Hide the spinner in case of an error
//     spinner.style.display = 'none';
//       // Handle the error or show an error message to the user
//       return false;
//   }
// }

// // Function to save data in local storage
// function saveDataToLocalStorage(name, email, profile) {
//     const data = {
//         name: name,
//         email: email,
//         profile: profile,
//     };

//     // Convert the data to JSON and store it in local storage
//     localStorage.setItem('data', JSON.stringify(data));
// }

// // Function to populate the input fields in the popup form
// let editedRow = null;
// function populateFormFromRow1() {
//   // Get data from the first row
//   let name = document.querySelector('.users__list--name-text-1').textContent.trim();
//   let email = document.querySelector('.users__list--email-text-1').textContent.trim();
//   let profile = document.querySelector('.users__list--profile-text-1').textContent.trim();
 
//   // Set data to the input fields in the popup form
//   document.getElementById('firstname').value = name;
//   document.getElementById('email').value = email;
//   document.querySelector('.dropdown__span').innerHTML = profile;

//   // Default for banned, suspended and confirmed
//   document.querySelector('#suspended').innerHTML = 'N';
//   document.querySelector('#banned').innerHTML = 'N';
//   document.querySelector('#activeToggle').innerHTML = 'Y';
// }

// function populateFormFromRow2() {
//   // Get data from the first row
//   let name = document.querySelector('.users__list--name-text-2').textContent.trim();
//   let email = document.querySelector('.users__list--email-text-2').textContent.trim();
//   let profile = document.querySelector('.users__list--profile-text-2').textContent.trim();
 
//   // Set data to the input fields in the popup form
//   document.getElementById('firstname').value = name;
//   document.getElementById('email').value = email;
//   document.querySelector('.dropdown__span').innerHTML = profile;

//   // Default for banned, suspended and confirmed
//   document.querySelector('#suspended').innerHTML = 'N';
//   document.querySelector('#banned').innerHTML = 'N';
//   document.querySelector('#activeToggle').innerHTML = 'Y';
// }
// function populateFormFromRow3() {
//   // Get data from the first row
//   let name = document.querySelector('.users__list--name-text-3').textContent.trim();
//   let email = document.querySelector('.users__list--email-text-3').textContent.trim();
//   let profile = document.querySelector('.users__list--profile-text-3').textContent.trim();
 
//   // Set data to the input fields in the popup form
//   document.getElementById('firstname').value = name;
//   document.getElementById('email').value = email;
//   document.querySelector('.dropdown__span').innerHTML = profile;

//   // Default for banned, suspended and confirmed
//   document.querySelector('#suspended').innerHTML = 'N';
//   document.querySelector('#banned').innerHTML = 'N';
//   document.querySelector('#activeToggle').innerHTML = 'Y';
// }
// function populateFormFromRow4() {
//   // Get data from the first row
//   let name = document.querySelector('.users__list--name-text-4').textContent.trim();
//   let email = document.querySelector('.users__list--email-text-4').textContent.trim();
//   let profile = document.querySelector('.users__list--profile-text-4').textContent.trim();
 
//   // Set data to the input fields in the popup form
//   document.getElementById('firstname').value = name;
//   document.getElementById('email').value = email;
//   document.querySelector('.dropdown__span').innerHTML = profile;

//   // Default for banned, suspended and confirmed
//   document.querySelector('#suspended').innerHTML = 'N';
//   document.querySelector('#banned').innerHTML = 'N';
//   document.querySelector('#activeToggle').innerHTML = 'Y';
// }
// function populateFormFromRow5() {
//   // Get data from the first row
//   let name = document.querySelector('.users__list--name-text-5').textContent.trim();
//   let email = document.querySelector('.users__list--email-text-5').textContent.trim();
//   let profile = document.querySelector('.users__list--profile-text-5').textContent.trim();
 
//   // Set data to the input fields in the popup form
//   document.getElementById('firstname').value = name;
//   document.getElementById('email').value = email;
//   document.querySelector('.dropdown__span').innerHTML = profile;

//   // Default for banned, suspended and confirmed
//   document.querySelector('#suspended').innerHTML = 'N';
//   document.querySelector('#banned').innerHTML = 'N';
//   document.querySelector('#activeToggle').innerHTML = 'Y';
// }
// // Function to update the row with the edited data
// function updateRowFromForm1() {
//   // Get data from the popup form
//   let editedName = document.getElementById('firstname').value;
//   let editedEmail = document.getElementById('email').value;
//   let editedProfile = document.querySelector('.dropdown__span').innerHTML;

//   // Update the row with the edited data
//   document.querySelector('.users__list--name-text-1').textContent = editedName;
//   document.querySelector('.users__list--email-text-1').textContent = editedEmail;
//   document.querySelector('.users__list--profile-text-1').textContent = editedProfile;
//   // Save the updated data to local storage
//   saveFormDataToLocalStorage(editedName, editedEmail, editedProfile);
// }

// function updateRowFromForm2() {
//   // Get data from the popup form
//   let editedName = document.getElementById('firstname').value;
//   let editedEmail = document.getElementById('email').value;
//   let editedProfile = document.querySelector('.dropdown__span').innerHTML;
//   // Update the row with the edited data
//   document.querySelector('.users__list--name-text-2').textContent = editedName;
//   document.querySelector('.users__list--email-text-2').textContent = editedEmail;
//   document.querySelector('.users__list--profile-text-2').textContent = editedProfile;
//   // Save the updated data to local storage
//   saveFormDataToLocalStorage(editedName, editedEmail, editedProfile);
// }

// function updateRowFromForm3() {
//   // Get data from the popup form
//   let editedName = document.getElementById('firstname').value;
//   let editedEmail = document.getElementById('email').value;
//   let editedProfile = document.querySelector('.dropdown__span').innerHTML;
//   // Update the row with the edited data
//   document.querySelector('.users__list--name-text-3').textContent = editedName;
//   document.querySelector('.users__list--email-text-3').textContent = editedEmail;
//   document.querySelector('.users__list--profile-text-3').textContent = editedProfile;
//   // Save the updated data to local storage
//   saveFormDataToLocalStorage(editedName, editedEmail, editedProfile);
// }
// function updateRowFromForm4() {
//   // Get data from the popup form
//   let editedName = document.getElementById('firstname').value;
//   let editedEmail = document.getElementById('email').value;
//   let editedProfile = document.querySelector('.dropdown__span').innerHTML;

//   // Update the row with the edited data
//   document.querySelector('.users__list--name-text-4').textContent = editedName;
//   document.querySelector('.users__list--email-text-4').textContent = editedEmail;
//   document.querySelector('.users__list--profile-text-4').textContent = editedProfile;
//   // Save the updated data to local storage
//   saveFormDataToLocalStorage(editedName, editedEmail, editedProfile);
// }
// function updateRowFromForm5() {
//   // Get data from the popup form
//   let editedName = document.getElementById('firstname').value;
//   let editedEmail = document.getElementById('email').value;
//   let editedProfile = document.querySelector('.dropdown__span').innerHTML;
//   // Update the row with the edited data
//   document.querySelector('.users__list--name-text-5').textContent = editedName;
//   document.querySelector('.users__list--email-text-5').textContent = editedEmail;
//   document.querySelector('.users__list--profile-text-5').textContent = editedProfile;
//   // Save the updated data to local storage
//   saveFormDataToLocalStorage(editedName, editedEmail, editedProfile);
// }

// document.querySelector('.btn__save').addEventListener('click', function () {
//   // Validate the form
//   if (validateForm()) {
//     // Check if the form is for the first row or second row
//     if (editedRow === 1) {
//       // If the form is for the first row, update only the first row
//       updateRowFromForm1();
//     } else if (editedRow === 2) {
//       // If the form is for the second row, update only the second row
//       updateRowFromForm2();
//     }
//     else if (editedRow === 3) {
//       // If the form is for the second row, update only the second row
//       updateRowFromForm3();
//     }
//     else if (editedRow === 4) {
//       // If the form is for the second row, update only the second row
//       updateRowFromForm4();
//     }
//     else if (editedRow === 5) {
//       // If the form is for the second row, update only the second row
//       updateRowFromForm5();
//     }

//     // Reset the editedRow variable after saving the data
//     editedRow = null;

//     // Show the success message
//     showSuccessMessage('Data saved successfully!');
//   }
// });

// // Function to save the form data to localStorage
// function saveFormDataToLocalStorage(name, email, profile) {
//     const data = {
//         name: name,
//         email: email,
//         profle: profile,
//     };

//     // Store the data as a JSON string in localStorage
//     localStorage.setItem('formData', JSON.stringify(data));
// }

// // Function to retrieve the form data from localStorage and populate the form
// function populateFormFromLocalStorage() {
//     const dataString = localStorage.getItem('formData');
//     if (dataString) {
//         const data = JSON.parse(dataString);
//         document.getElementById('firstname').value = data.name;
//         document.getElementById('email').value = data.email;
//         document.querySelector('.dropdown__span').innerHTML = data.profile;
//     }
// }
// // Populate the form fields from localStorage when the page loads
// populateFormFromLocalStorage();
// overlayEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   formProfileEl.classList.remove("profile__formBox--hidden-users");
// //   formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
// })
// document.addEventListener("keydown", function(e){
//   if(e.key === "Escape"){
//     overlayEl.classList.remove("overlay__hidden");
//     formProfileEl.classList.remove("profile__formBox--hidden-users");
//     // formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
//   }
// });
// profileFormCrossEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   formProfileEl.classList.remove("profile__formBox--hidden-users");
// });
// addUsersButton.addEventListener("click", function(){
//     addUsersFormEl.classList.add("profile__formBox--hidden-users");
//     overlayEl.classList.add("overlay__hidden");
// });
  
// overlayEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   addUsersFormEl.classList.remove("profile__formBox--hidden-users");
// //   formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
// })
  
// document.addEventListener("keydown", function(e){
//   if(e.key === "Escape"){
//     overlayEl.classList.remove("overlay__hidden");
//     addUsersFormEl.classList.remove("profile__formBox--hidden-users");
//     // formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
//   }
// });
// profileFormCrossUsersEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   addUsersFormEl.classList.remove("profile__formBox--hidden-users");
// });


// // Delete Box Functionality
// for(let i = 0; i < deleteUsersEl.length; i++){
//   deleteUsersEl[i].addEventListener("click", function(){
//       deleteUsersBoxEl.classList.add("profile__formBox--hidden-users");
//       overlayEl.classList.add("overlay__hidden");
//   });
// }
// overlayEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
// //   formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
// })
  
// document.addEventListener("keydown", function(e){
//   if(e.key === "Escape"){
//     overlayEl.classList.remove("overlay__hidden");
//     deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
//     // formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
//   }
// });
// profileFormCrossDeleteEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
// });

// btnCancelEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
// });


// // New code added

// /*======================= Edit button Functionality ========================== */

// // Select all elements with the class "users__list--action-edited"
// const editButtons = document.querySelectorAll('.users__list--action-edited');

// // Function to handle the click event
// function handleEditButtonClick(index) {
//   formProfileEl.classList.add("profile__formBox--hidden-users");
//   overlayEl.classList.add("overlay__hidden");
//   editedRow = index;
//   // Call the function when the edit button is clicked
//   // populateFormFromRow(index);
// }

// // Add event listeners dynamically
// editButtons.forEach((button, index) => {
//   button.addEventListener('click', () => handleEditButtonClick(index + 1));
// });

// /*======================= Edit button Functionality Ends ========================== */



// /*======================= Sidebar drop down script Starts========================== */
// const dropdown1 = document.querySelector(".sidenav__list--item-account");
// const dropdown2 = document.querySelector(".sidenav__list--item-users");
// const dropdown3 = document.querySelector(".sidenav__list--item-tracking");
// const list1 = document.querySelector(".sidenav__list--item-list1");
// const list2 = document.querySelector(".sidenav__list--item-list2");
// const list3 = document.querySelector(".sidenav__list--item-list3");
// const iconCaret1El1 = document.querySelector(".icon__caret1");
// const iconCaret1El2 = document.querySelector(".icon__caret2");
// const iconCaret1El3 = document.querySelector(".icon__caret3");


// dropdown1.addEventListener("click", function() {
//   list1.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list1.classList.contains("toggled")) {
//     iconCaret1El1.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El1.setAttribute("name", "chevron-up-outline");
//   }
// });

// dropdown2.addEventListener("click", function() {
//   list2.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list2.classList.contains("toggled")) {
//     iconCaret1El2.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El2.setAttribute("name", "chevron-up-outline");
//   }
// });

// dropdown3.addEventListener("click", function() {
//   list3.classList.toggle("toggled");

//   // Check if the list is toggled and update the icon accordingly
//   if (list3.classList.contains("toggled")) {
//     iconCaret1El3.setAttribute("name", "chevron-down-outline");
//   } else {
//     iconCaret1El3.setAttribute("name", "chevron-up-outline");
//   }
// });

// /*======================= Sidebar drop down script Ends ========================== */


// /**=================== Table Sorting Starts ========================= */

document.addEventListener("DOMContentLoaded", function () {
    // Get the profile headers
    var profileHeaders = document.querySelectorAll('.Paymentss__list--profile');

    // Add click event listener to each profile header
    profileHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            // Find the parent container for the rows
            var userListContainer = header.closest('.Paymentss__list--content');

            // Find all user rows inside the container (excluding the header row)
            var userRows = Array.from(userListContainer.querySelectorAll('.Paymentss__list:not(:first-child)'));

            // Get the index of the clicked profile header
            var columnIndex = Array.from(header.parentElement.children).indexOf(header);

            // Determine the sorting order (ascending or descending)
            var sortOrder = header.dataset.sortOrder || 'asc';

            // Sort the rows based on the profile text
            userRows.sort(function (a, b) {
                var aValue = a.children[columnIndex].textContent.trim().toLowerCase();
                var bValue = b.children[columnIndex].textContent.trim().toLowerCase();

                if (sortOrder === 'asc') {
                    return aValue.localeCompare(bValue);
                } else {
                    return bValue.localeCompare(aValue);
                }
            });

            // Update the dataset to store the current sorting order
            header.dataset.sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

            // Remove existing rows from the container
            userRows.forEach(function (row) {
                userListContainer.removeChild(row);
            });

            // Append the sorted rows back to the container
            userRows.forEach(function (row) {
                userListContainer.appendChild(row);
            });
        });
    });
});

// /**=================== Table Sorting Ends ========================= */

