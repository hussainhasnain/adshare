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


  // Select element
  // $('#permissionsProfile').selectize();



/*------------------------------  Profile Selection Functionality  --------------------------- */
 
  document.addEventListener('DOMContentLoaded', function() {

    // Define an object to store the toggle configurations for each profile
    let toggleConfigurations = {
      '1': {
        'adminfee1': true,
        'adminfee2': false,
        'adminfee3': true,
        'adminfee4': false,
        'adminfee5': true,
        'adminfee6': false,
        'adminfee7': true,
        'adminfee8': false,
        'adminfee9': true,
        'adminfee10': false,
        'adminfee11': true
      },
      '2': {
        // Configuration for Profile 2
      },
      '3': {
        // Configuration for Profile 3
      },
      // Add more configurations for additional profiles if needed
    };
  
    // Save the initial checkbox states for the selected profiles
    let initialCheckboxStates = {};
    for (let i = 1; i <= 11; i++) {
      let checkboxId = 'adminfee' + i;
      // initialCheckboxStates[checkboxId] = document.getElementById(checkboxId).checked;
    }
  
    // Listen for click events on the dropdown menu items
    let dropdownItems = document.querySelectorAll('.dropdown-list a');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        let selectedProfile = item.getAttribute('data-profile');
  
        // Toggle the checkboxes based on the selected profile configuration
        if (selectedProfile !== '') {
          let toggleConfiguration = toggleConfigurations[selectedProfile];
          for (let checkboxId in toggleConfiguration) {
            document.getElementById(checkboxId).checked = toggleConfiguration[checkboxId];
          }
        } else {
          for (let i = 1; i <= 11; i++) {
            let checkboxId = 'adminfee' + i;
            document.getElementById(checkboxId).checked = initialCheckboxStates[checkboxId];
          }
        }
      });
    });
});

/*------------------------------  Delete Profile Box Functionality  --------------------------- */
const createBtnEl = document.querySelector(".createp");
const profileFormCrossDeleteEl = document.querySelector(".profile__formBox--cross-delete");
const deleteUsersBoxEl = document.querySelector(".profile__formBox--delete");
const overlayEl = document.querySelector(".overlay");
const btnCancelEl = document.querySelector(".btn__cancel");


  // createBtnEl.addEventListener("click", function(){
  //     deleteUsersBoxEl.classList.add("profile__formBox--hidden-users");
  //     overlayEl.classList.add("overlay__hidden");
  // });

overlayEl.addEventListener("click", function(){
  overlayEl.classList.remove("overlay__hidden");
  deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
//   formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
})

document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    overlayEl.classList.remove("overlay__hidden");
    deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
    // formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
  }
});

// profileFormImgEl.addEventListener("click", function(){
//   profileFormFileEl.click();
// });

// profileFormCrossDeleteEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
// });

// btnCancelEl.addEventListener("click", function(){
//   overlayEl.classList.remove("overlay__hidden");
//   deleteUsersBoxEl.classList.remove("profile__formBox--hidden-users");
// });


/* JS code to Capitalize the Permission Catalog Text */
const itemNameTextEl = document.querySelectorAll('.permissions__catalog--item-name-text');

// run through each element and update its text content
itemNameTextEl.forEach(element => {
    const words = element.textContent.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    element.textContent = capitalizedWords.join(' ');
});



