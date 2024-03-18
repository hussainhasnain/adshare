

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

/*------------------------------  Profile Form Functionality  --------------------------- */

const iconPencilEl = document.querySelector(".profile__details--edit");
const iconPencilOrganisationEl = document.querySelector(".profile__personal--edit");
const formProfileEl = document.querySelector(".profile__formBox");
const formOrganisationEl = document.querySelector(".profile__organisation--formBox");
const profileEl = document.querySelector(".profile");
const overlayEl = document.querySelector(".overlay");
const profileFormImgEl = document.querySelector(".profile__form--photo-img");
const profileFormFileEl = document.querySelector(".profile__form--input");
const profileFormCrossEl = document.querySelector(".profile__formBox--cross");
const profileOrganisationFormCrossEl = document.querySelector(".profile__organisation--formBox--cross");

iconPencilEl.addEventListener("click", function(){
  formProfileEl.classList.add("profile__formBox--hidden");
  overlayEl.classList.add("overlay__hidden");
});

iconPencilOrganisationEl.addEventListener("click", function(){
  formOrganisationEl.classList.add("profile__organisation--formBox--hidden");
  overlayEl.classList.add("overlay__hidden");
});

overlayEl.addEventListener("click", function(){
  overlayEl.classList.remove("overlay__hidden");
  formProfileEl.classList.remove("profile__formBox--hidden");
  formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
})

document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    overlayEl.classList.remove("overlay__hidden");
    formProfileEl.classList.remove("profile__formBox--hidden");
    formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
  }
});

profileFormCrossEl.addEventListener("click", function(){
  overlayEl.classList.remove("overlay__hidden");
  formProfileEl.classList.remove("profile__formBox--hidden");
});

profileOrganisationFormCrossEl.addEventListener("click", function(){
  overlayEl.classList.remove("overlay__hidden");
  formOrganisationEl.classList.remove("profile__organisation--formBox--hidden");
});



/**====== Edit and Update Functionality of Username ==========*/
const passwordUserEl = document.querySelector(".passwordUser");
// const passowrdUserVal = document.querySelector(".passwordUser").value;
const btnEditEl = document.querySelector(".btn__edits");
const btnUpdateEl = document.querySelector(".btn_update");

btnEditEl.addEventListener("click", function(){
  passwordUserEl.removeAttribute('readonly');
  passwordUserEl.focus();
  const inputValueLength = passwordUserEl.value.length;
  passwordUserEl.setSelectionRange(inputValueLength, inputValueLength);
  btnUpdateEl.classList.remove('hidden');
  btnEditEl.classList.add('hidden');
});

jQuery('.btn_update').click(()=>{

  jQuery('.btn_edit').removeClass('hidden'); jQuery('.btn_update').addClass('hidden');
  jQuery('.passwordUser').attr('readonly', true);
});


/**============ Hide / Show Password Functionality Starts =========== */
const eyeEl = document.querySelectorAll(".passwordUser__eye");
const eyeIconEl = document.querySelector(".passwordUser__eye--icon");
const passwordUserInputEl = document.querySelectorAll(".passwordUser__input");
const eyeOpenEl = document.querySelectorAll(".passwordUser__eye--icon-open");
const eyeCloseEl = document.querySelectorAll(".passwordUser__eye--icon-close");


eyeEl.forEach(function(i, index){
  i.addEventListener("click", function(){
    const passwordInput = passwordUserInputEl[index];
    const eyeOpen = eyeOpenEl[index];
    const eyeClose = eyeCloseEl[index];
    if(passwordInput.type === "password"){
          passwordInput.type = "text";
          eyeOpen.style.display = "block";
          eyeClose.style.display = "none";
          passwordInput.focus();
        }else{
          passwordInput.type = "password";
          eyeOpen.style.display = "none";
          eyeClose.style.display = "block";
          passwordInput.focus();
        }
  });
});

/**============ Hide / Show Password Functionality Ends =========== */


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