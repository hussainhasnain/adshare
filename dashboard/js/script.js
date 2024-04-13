/*------------------------------  No data Functionality  --------------------------- */
// const mainEl = document.querySelector('.main');
// const nodataEl = document.querySelector('.no-data');
// const hamburgerEl = document.querySelector('.hamburger');


/* ============ Preloader event =============== */
// window.addEventListener('load', function() {
//   const preloader = document.querySelector('.preloader');
//    setTimeout(function() {
//      preloader.style.display = 'none'; // Hide the preloader
// }, 500); // 0.5 seconds delay
// });




  /*=======================Toggle sidebar for mobile devices starts ========================== */

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


/*=======================Toggle sidebar for mobile devices Ends ========================== */



/*======================= Date Calender Drop Down Starts  ========================== */

// const dd = document.querySelector('#dropdown-wrapper');
// const links = document.querySelectorAll('.dropdown-list a');
// const span = document.querySelector('.dropdown__span');
// const checkboxInputEls = document.querySelectorAll('.profileActive');
// const profileActivezEls = document.querySelectorAll('.paddActivez');

// dd.addEventListener('click', function(event) {
//   event.stopPropagation();
//   this.classList.toggle('is-active');
// });

// // Add click event listeners to the links
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function(evt) {
//     evt.stopPropagation();
//     span.innerHTML = evt.currentTarget.textContent;
//     dd.classList.remove('is-active'); // Hide the dropdown after selecting an element
   
//   });
// }

// // Add a click event listener to the document
// document.addEventListener('click', function() {
//   dd.classList.remove('is-active');
// });







// const dd = document.querySelector('#dropdown-wrapper');
// const links = document.querySelectorAll('.dropdown-list a');
// const span = document.querySelector('.dropdown__span');
// const checkboxInputEls = document.querySelectorAll('.profileActive');
// const profileActivezEls = document.querySelectorAll('.paddActivez');

// // Set initial text of dropdown span to the text of the last profile in the list
// span.textContent = links[links.length - 1].textContent;

// dd.addEventListener('click', function(event) {
//   event.stopPropagation();
//   this.classList.toggle('is-active');
// });

// // Add click event listeners to the links
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function(evt) {
//     evt.stopPropagation();
//     span.innerHTML = evt.currentTarget.textContent;
//     dd.classList.remove('is-active'); // Hide the dropdown after selecting an element
//   });
// }

// // Add a click event listener to the document
// document.addEventListener('click', function() {
//   dd.classList.remove('is-active');
// });









/*======================= Date Calender Drop Down Starts  ========================== */

const dd = document.querySelector('#dropdown-wrapper');
const links = document.querySelectorAll('.dropdown-list a');
const span = document.querySelector('.dropdown__span');


// Function to print the month name to the console
function printMonthName(monthsName) {
  console.log("Selected Month:", monthsName);
}

// Set initial text of dropdown span to the text of the last month in the list
span.textContent = links[links.length - 1].textContent;



// Log the name of the initial month to the console on page load
printMonthName(span.textContent);

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
    // Log the name of the selected month to the console
    printMonthName(evt.currentTarget.textContent);
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  dd.classList.remove('is-active');
});


/*======================= Date Calender Drop Down Ends  ========================== */



/*============= Section Account chart starts here ===============*/

/*============= Area Chart starts here ===============*/

//  data array with values for each month
var data2021 = [5, 10 , 6, 10, 15, 10, 10, 15, 10, 25, 15, 18];
var data2022 = [35, 42, 15, 30, 25, 10, 5, 15, 10, 15, 15, 18];
var data2023 = [5, 10, 15, 20, 5, 10, 15,30, 20, 10, 5, 10];



  var options = {
    series: [
      // {
      //   name: '2021',
      //   data: data2021, 
      // },
      {
        name: '2023',
        data: data2022, 
      },
      {
        name: '2024',
        data: data2023, 
      },
    ],
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        }
      }
    },
    // colors: ['#008FFB', '#00E396', '#CED4DC'],
    colors: ['#008FFB', '#BBD2FF', '#CED4DC'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false 
      }
    },
    // xaxis: {
    //     type: 'datetime',        
    //   },
    xaxis: {
      type: 'category', // Use category type for x-axis
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
      yaxis: {
        labels: {
          show: false // Set show property to false to hide the labels
        }
      },
      grid: {
        row: {
          colors: ['transparent'], // Set transparent color for row
          opacity: 0 // Set opacity to 0 for row
        },
        borderColor: 'transparent', // Set transparent color for border
        show: false, // Hide grid lines
        padding: {
          left: 0,
          right: 0
         }
      },
    labels: {
        show: false // Set show property to false to hide the labels
      }
  };
  
  var charts = document.querySelectorAll(".area-chart");
  charts.forEach(function (chartElement) {
    var chart = new ApexCharts(chartElement, options);
    chart.render();
  });
  
/*============= Area Chart Ends here ===============*/




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



/*------------------------------  Plan Switch Functionality Starts --------------------------- */

// const accountGraphs = document.querySelector(".account__plan");
// const planEl = document.querySelector(".plan").textContent;
// console.log(planEl);


// if(planEl == 'Growth' || planEl == 'Enterprise'){
//   accountGraphs.classList.remove('hidden');
// }

// // Get all gallery items
// const galleryItems = document.querySelectorAll('.gallery__item');
// const galleryElement = document.querySelector('.gallery');

// // Loop through the gallery items
// galleryItems.forEach(item => {
//   // Get the figure class index
//   const figureClassIndex = parseInt(item.classList[1].split('--')[1]);
  
//   // Check the range of the figure class index
//   if (figureClassIndex >= 1 && figureClassIndex <= 7) {
    
//     galleryElement.style.gridTemplate = 'repeat(09, 5vw) / repeat(8, 1fr)';

//   } else if (figureClassIndex >= 1 && figureClassIndex <= 14) {
  
//     galleryElement.style.gridTemplate = 'repeat(18, 5vw) / repeat(8, 1fr)';
//     // Remove the style for figure class range 1-14
    
//   }
// });

/*------------------------------  Plan Switch Functionality Ends --------------------------- */







/*------------------------------  Gallery height Fix starts --------------------------- */


document.addEventListener('DOMContentLoaded', function() {

  function adjustGalleryLayout() {
    
    let galleryItems = document.querySelectorAll('.gallery__item');
    let numRows = 0;

    
    if (galleryItems.length > 0) {
      numRows = Math.ceil(galleryItems.length / 8);
    }

    // Adjust the grid template rows property dynamically
    document.querySelector('.gallery').style.gridTemplateRows = 'repeat(' + numRows + ', 5vw)';
  }

  adjustGalleryLayout();

  // Listen for window resize events to adjust the layout dynamically
  window.addEventListener('resize', adjustGalleryLayout);
});

/*------------------------------  Gallery height Fix Ends --------------------------- */






