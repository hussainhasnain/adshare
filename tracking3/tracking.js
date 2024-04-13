

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


// /**=================== Table Sorting Starts ========================= */

document.addEventListener("DOMContentLoaded", function () {
  // Get the profile headers
  var profileHeaders = document.querySelectorAll('.trackings__list--profile-sort');

  // Add click event listener to each profile header
  profileHeaders.forEach(function (header) {
      header.addEventListener('click', function () {
          // Find the parent container for the rows
          var userListContainer = header.closest('.trackings__list--content');

          // Find all user rows inside the container (excluding the header row)
          var userRows = Array.from(userListContainer.querySelectorAll('.trackings__list:not(:first-child)'));

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


// // /**=================== Edit and Update Functionality ========================= */

// const editBtnEl = document.querySelector(".tracking__buttons--edit");
// const updateBtnEl = document.querySelector(".tracking__buttons--update");

// const trackingURIEl = document.querySelector(".tracking__buttons--uri");
// const inputBtnEl = document.querySelector(".tracking__buttons--input");

// const inputLinkEl = document.querySelector(".tracking__buttons--input-link");

// const updateMessageEl = document.querySelector(".updateMessage");
// const copyMessageEl = document.querySelector(".copyMessage");

// // const trackingInputEl = document.querySelector(".tracking__buttons--code-para-text");

// editBtnEl.addEventListener("click", function(){
//   updateBtnEl.classList.remove("hidden");
//   editBtnEl.classList.add("hidden");

//   // trackingURIEl.classList.add("hidden");
//   // inputBtnEl.classList.remove("hidden");

//   inputLinkEl.disabled = false;
//   inputLinkEl.focus();

//   inputLinkEl.setSelectionRange(inputLinkEl.value.length, inputLinkEl.value.length);
// });

// updateBtnEl.addEventListener("click", function(){
//   editBtnEl.classList.remove("hidden");
//   updateBtnEl.classList.add("hidden");

//   trackingURIEl.classList.remove("hidden");
//   // inputBtnEl.classList.add("hidden");

//   updateMessageEl.classList.remove("hidden");
//   inputLinkEl.disabled = true;
//   setTimeout(() => {
//     updateMessageEl.classList.add("hidden");
//   }, 2500);
// });
// // /**=================== Edit and Update Functionality Ends ========================= */



/**=================== Copying of Tracking Code starts ========================= */

const trackingInputEl = document.querySelector(".tracking__buttons--code-para-text");

function trackingCodeCopy() {
  const copyMessageEl = document.querySelector(".copyMessage");
 
  // Get the text field
  var copyText = document.getElementById("trackingCode");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  // alert("Copied the text: " + copyText.value);

  copyMessageEl.classList.remove("hidden");
  
  
  setTimeout(() => {
    copyMessageEl.classList.add("hidden");
  }, 2500);

  trackingInputEl.blur();

}
/**=================== Copying of Tracking Code Ends ========================= */

/**=================== Edit and Update Functionality Starts ========================= */


const editBtnEl = document.querySelector(".tracking__buttons--edit");
const updateBtnEl = document.querySelector(".tracking__buttons--update");

const trackingURIEl = document.querySelector(".tracking__buttons--uri");
const inputBtnEl = document.querySelector(".tracking__buttons--input");

const inputLinkEl = document.querySelector(".tracking__buttons--input-link");

const updateMessageEl = document.querySelector(".updateMessage");
const copyMessageEl = document.querySelector(".copyMessage");
const updateMessageValidation = document.querySelector(".updateMessage__text");
const updateMessageContent = document.querySelector(".updateMessage__content");



editBtnEl.addEventListener("click", function(){
  updateBtnEl.classList.remove("hidden");
  editBtnEl.classList.add("hidden");

  inputLinkEl.disabled = false;
  inputLinkEl.focus();

  inputLinkEl.setSelectionRange(inputLinkEl.value.length, inputLinkEl.value.length);
});


// function checkURL (abc) {
//   var string = abc.value;
//   if (!~string.indexOf("http")) {
//     string = "http://" + string;
//   }
//   abc.value = string;
//   return abc
// }


updateBtnEl.addEventListener("click", function(){
  const input = inputLinkEl.value.trim(); 
  const urlPattern = /^(http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;



  // Empty URL validation
  if (input === "") {
    updateMessageValidation.innerText = "Domain URL cannot be empty";
    document.querySelector(".updateMessage__icon").classList.add("hidden");
    updateMessageEl.classList.remove("hidden");
    updateMessageContent.style.backgroundColor= "#ff109b";
    setTimeout(() => {
      updateMessageEl.classList.add("hidden");
    }, 3000);
    inputLinkEl.disabled = false;
    inputLinkEl.focus();
    return;
  }



  // URL Validation
  if (!input.match(urlPattern)) {
    updateMessageValidation.innerText = "URL Syntax is not valid";
    document.querySelector(".updateMessage__icon").classList.add("hidden");
    updateMessageEl.classList.remove("hidden");
    updateMessageContent.style.backgroundColor= "#ff109b";
   
    setTimeout(() => {
      updateMessageEl.classList.add("hidden");
    }, 3000);
    inputLinkEl.disabled = false;
    inputLinkEl.focus();
    return;
  }

  
  editBtnEl.classList.remove("hidden");
  updateBtnEl.classList.add("hidden");

  trackingURIEl.classList.remove("hidden");

  updateMessageValidation.innerText = "Domain URL is successfully updated";
  document.querySelector(".updateMessage__icon").classList.remove("hidden");
  updateMessageEl.classList.remove("hidden");
  updateMessageContent.style.backgroundColor= "#3335CF";
  inputLinkEl.disabled = true;
  setTimeout(() => {
    updateMessageEl.classList.add("hidden");
  }, 2500);
});

/**=================== Edit and Update Functionality Ends ========================= */



/**=================== Adding google Tag Manager through JS starts ========================= */

document.addEventListener("DOMContentLoaded", function() {
  // Get the textarea element
  let textArea1 = document.getElementById("tagmanager1");
  let textArea2 = document.getElementById("tagmanager2");

  // Set the value of the textarea1 to the Google Tag Manager code snippet
  textArea1.value = `
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXX');</script>
      <!-- End Google Tag Manager -->
  `;

  // textArea1.value = "";

  // Set the value of the textarea2 to the Google Tag Manager code snippet
  textArea2.value = `
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
  `;

});

/**=================== Adding google Tag Manager through JS Ends ========================= */


/**=================== Copying of Google Tag Manager starts ========================= */


// navigator.clipboard.writeText(text);



document.addEventListener("DOMContentLoaded", function(){

  const tagManagerIcon1 = document.querySelector(".tagManager__copy--icon-1");
  const tagManagerIcon2 = document.querySelector(".tagManager__copy--icon-2");

  const textArea1 = document.querySelector(".tagManager__textArea--1").value;
  const textArea2 = document.querySelector(".tagManager__textArea--2").value;

  const copyMessageText1 = document.querySelector(".copyMessage__tag1");
  const copyMessageText2 = document.querySelector(".copyMessage__tag2");


  


  tagManagerIcon1.addEventListener("click", function(){
    
    if(textArea1 !== ""){
      navigator.clipboard.writeText(textArea1);
      // console.log(textArea1);

      copyMessageText1.classList.remove("hidden");
      setTimeout(() => {
        copyMessageText1.classList.add("hidden");
      }, 2000);
    }else{
      console.log("Text Area 1 is empty");
    }
    

    
  });

  tagManagerIcon2.addEventListener("click", function(){
    
    if(textArea2 !== ""){
      navigator.clipboard.writeText(textArea2);
      // console.log(textArea2);

      copyMessageText2.classList.remove("hidden");
      setTimeout(() => {
        copyMessageText2.classList.add("hidden");
      }, 2000);
    }else{
      console.log("Text Area 2 is empty");
    }
    

    
  });


});














/**=================== Copying of Google Tag Manager Ends ========================= */
