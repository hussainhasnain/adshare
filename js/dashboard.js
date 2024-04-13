

/* ============ Mobile Navigation Starts Here =============== */

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");

});

/* =============== Mobile Navigation Ends Here ================= */



/* =============== Search box starts Here ================= */

const searchEl = document.querySelector(".icon__search");
const searchCloseEl = document.querySelector(".header__search--content-icon");

searchEl.addEventListener("click", function(){
  headerEl.classList.add("search-open");
});

searchCloseEl.addEventListener("click", function(){
  headerEl.classList.remove("search-open");
});

/* =============== Search box Ends Here ================= */


/* =============== Msg box starts Here ================= */

const msgIconEl = document.querySelector(".header__icons--box-msg");
const msgOpenEl = document.querySelector(".header__icons--box-msgs");


msgIconEl.addEventListener("click", function(){
  msgOpenEl.classList.toggle("msg-open");
  notificationOpenEl.classList.remove("notification-open");
});

document.addEventListener("click", function(event) {
  const target = event.target;

  // Check if the clicked element is outside the list div
  if (!msgOpenEl.contains(target) && !msgIconEl.contains(target)) {
    msgOpenEl.classList.remove("msg-open");
  }
});
    
/* =============== Msg box Ends Here ================= */

/* =========== Notification box starts Here ========== */

const bellIconEl = document.querySelector(".header__icons--box-bell");
const notificationOpenEl = document.querySelector(".header__icons--box-bells");


bellIconEl.addEventListener("click", function(){
  notificationOpenEl.classList.toggle("notification-open");
  msgOpenEl.classList.remove("msg-open");

});

document.addEventListener("click", function(event) {
  const target = event.target;

  // Check if the clicked element is outside the list div
  if (!notificationOpenEl.contains(target) && !bellIconEl.contains(target)) {
    notificationOpenEl.classList.remove("notification-open");
  }
});

/* =========== Notification box Ends Here ========== */


/* =========== Profile Starts Here ========== */

const profileIconEl = document.querySelector(".header__profile");
const profileBoxEl = document.querySelector(".header__profileBox");

profileIconEl.addEventListener("click", function(){
    profileBoxEl.classList.toggle("profile-open");
});

document.addEventListener("click", function(event) {
  const target = event.target;

  // Check if the clicked element is outside the list div
  if (!profileIconEl.contains(target) && !profileBoxEl.contains(target)) {
    profileBoxEl.classList.remove("profile-open");
  }
});

/* =========== Profile Ends Here ========== */


/*============= Jvector Map USA ===============*/
jQuery(document).ready(function() {
  jQuery('.sales__map--map').vectorMap({ map: 'usa_en',
  backgroundColor: 'transparent',
  borderColor: '#fff',
  borderOpacity: 0.25,
  borderWidth: 1,
  color: '#afdfff',
  enableZoom: true,
  hoverColor: '#48adf0',
  hoverOpacity: null,
  normalizeFunction: 'linear',
  scaleColors: ['#b6d6ff', '#005ace'],
  selectedColor: '#c9dfaf',
  selectedRegions: null,
  showTooltip: true, });
});
/*============= Jvector Map Ends here ===============*/



/*============= Stats Section Stats chart ===============*/
var sparklineData = [10,20, 30, 40, 35, 20, 25, 38, 49, 60, 70, 91, 12, 15,];

    function randomizeArray(arr) {
      var newArray = arr.slice();
      for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
      return newArray;
    }

    var options = {
      series: [{
        data: randomizeArray(sparklineData)
      }],
      chart: {
        type: 'area',
        height: 80,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0
      },
      colors: ['#DCE6EC'],
    };
var chart = new ApexCharts(document.querySelector("#chart-spark1"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart-spark2"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart-spark3"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart-spark4"), options);
chart.render();

/*============= Section Stats Chart Ends here ===============*/


/*============= Section Account chart starts here ===============*/

/*============= Area Chart starts here ===============*/
function generateDayWiseTimeSeries(baseTimestamp, count, range) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseTimestamp;
      var y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      series.push([x, y]);
      baseTimestamp += 86400000; // Adding one day in milliseconds
      i++;
    }
    return series;
  }
  

  var options = {
    series: [
      {
        name: 'GROWTH ACTUAL',
        data: generateDayWiseTimeSeries(new Date('01 June 2023 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'ACTUAL',
        data: generateDayWiseTimeSeries(new Date('01 June 2023 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
      {
        name: 'PLAN',
        data: generateDayWiseTimeSeries(new Date('01 June 2023 GMT').getTime(), 20, {
          min: 10,
          max: 15
        })
      }
    ],
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        }
      }
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
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
      horizontalAlign: 'right'
    },
    xaxis: {
        type: 'datetime',
        
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
        show: false // Hide grid lines
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



/*============= Column Chart starts here ===============*/
  var options = {
    series: [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }],
    annotations: {
    points: [{
      x: 'Bananas',
      seriesIndex: 0,
      label: {
        borderColor: '#775DD0',
        offsetY: 0,
        style: {
          color: '#fff',
          background: '#775DD0',
        },
        text: 'Bananas are good',
      }
    }]
  },
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
        show: false
      },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '50%',
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  
  grid: {
    row: {
      colors: ['#fff', '#f2f2f2']
    }
  },
  xaxis: {
    labels: {
      rotate: -45
    },
    categories: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    tickPlacement: 'on'
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
    show: false // Hide grid lines
  },
  
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100]
    },
  }
  };

  var chart = new ApexCharts(document.querySelector(".bar-chart"), options);
  chart.render();
/*============= Column Chart Ends here ===============*/



/*============= Vertical bar chart starts here ===============*/
var options = {
  series: [{
    name: 'Today', // Label for the first series
    data: [44, 55, 41, 64, 22, 43]
  }, {
    name: 'Yesterday', // Label for the second series
    data: [53, 32, 33, 52, 13, 44]
  }],
  chart: {
    type: 'bar',
    height: 248,
    toolbar: {
      show: false // Hide the chart toolbar
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top',
      },
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: false,
    width: 1,
    colors: ['#fff']
  },
  tooltip: {
    shared: true,
    intersect: false
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
  },
  yaxis: {
    labels: {
      show: false // Set show property to false to hide the labels
    }
  },
  grid: {
    show: true, // Set show property to true to display grid lines
    borderColor: '#b9c0c5', // Color of the grid lines
    strokeDashArray: 4, // Length of the dash pattern for the grid lines
    position: 'back', // Position the grid lines behind the bars
    xaxis: {
      lines: {
        show: true // Show vertical grid lines for the x-axis
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -3,
    offsetX: -1
  }
};

var chart = new ApexCharts(document.querySelector(".vertical-bar-chart"), options);
chart.render();

/*============= Vertical bar chart Ends here ===============*/

















