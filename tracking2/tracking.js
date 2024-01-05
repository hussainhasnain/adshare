

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