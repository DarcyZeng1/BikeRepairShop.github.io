// // Get all the navigation links
// const navLinks = document.querySelectorAll("nav ul li a");

// // Attach click event listeners to each link
// navLinks.forEach((link) => {
//   link.addEventListener("click", function() {
//     // Remove 'active' class from all links
//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//     });

//     // Add 'active' class to the clicked link
//     this.classList.add("active");
//   });
// });


//==========================================================

// Get the current page's URL path
const currentPagePath = window.location.pathname;

// Get all the navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Iterate over each link and check if it matches the current page
navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");

  console.log("Path is: "+currentPagePath+"|||");
  console.log("Sec: "+ linkPath);

  // Check if the link's href matches the current page's path
  if (currentPagePath.endsWith(linkPath)) {
    link.classList.add("active"); // Add the 'active' class to the matching link
  }
});

//============bookBtn==================================

const bookButton = document.getElementById("bookButton");

if (bookButton) {
  bookButton.addEventListener("click", function() {
    window.location.href = "bookingConfirm.html";
  });
}


var screenWidth = window.innerWidth;
console.log(screenWidth);


/*==========Text Concent============ */



var screenWidth = window.innerWidth;
var fontSizePercentage = screenWidth / 100;
var titleSize = screenWidth / 75;

var elements = document.querySelectorAll("#textContent");
var title = document.getElementById("textTitle")

title.style.fontSize = titleSize + "px";

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = fontSizePercentage + "px";
}

var pageHeight = document.documentElement.scrollHeight;
console.log("Page height: " + pageHeight + "px");

var boxElements = document.getElementsByClassName("homeBox");

for (var i = 0; i < boxElements.length; i++) {
  var boxElement = boxElements[i];
  var contentHeight = boxElement.offsetHeight;
  
  if (boxElement !== null && boxElement !== undefined) {
    console.log("Content height of element " + (i + 1) + ": " + contentHeight + "px");
    
    if (pageHeight > contentHeight) {
      boxElement.style.height = pageHeight + "px";
    }
  }
}



