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
const dropdown1 = document.querySelector(".sidenav__list--item-account");
const dropdown2 = document.querySelector(".sidenav__list--item-users");
const dropdown3 = document.querySelector(".sidenav__list--item-tracking");
const list1 = document.querySelector(".sidenav__list--item-list1");
const list2 = document.querySelector(".sidenav__list--item-list2");
const list3 = document.querySelector(".sidenav__list--item-list3");
const iconCaret1El1 = document.querySelector(".icon__caret1");
const iconCaret1El2 = document.querySelector(".icon__caret2");
const iconCaret1El3 = document.querySelector(".icon__caret3");


dropdown1.addEventListener("click", function() {
  list1.classList.toggle("toggled");

  // Check if the list is toggled and update the icon accordingly
  if (list1.classList.contains("toggled")) {
    iconCaret1El1.setAttribute("name", "chevron-down-outline");
  } else {
    iconCaret1El1.setAttribute("name", "chevron-up-outline");
  }
});

dropdown2.addEventListener("click", function() {
  list2.classList.toggle("toggled");

  // Check if the list is toggled and update the icon accordingly
  if (list2.classList.contains("toggled")) {
    iconCaret1El2.setAttribute("name", "chevron-down-outline");
  } else {
    iconCaret1El2.setAttribute("name", "chevron-up-outline");
  }
});

dropdown3.addEventListener("click", function() {
  list3.classList.toggle("toggled");

  // Check if the list is toggled and update the icon accordingly
  if (list3.classList.contains("toggled")) {
    iconCaret1El3.setAttribute("name", "chevron-down-outline");
  } else {
    iconCaret1El3.setAttribute("name", "chevron-up-outline");
  }
});

/*======================= Sidebar drop down script Ends ========================== */