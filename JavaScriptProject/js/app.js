//create essential global variables
const section = document.getElementsByTagName("section");
// build the nav
function buildNav() {
  for (let i = 0; i < section.length; i++) {
    const listItem = document.createElement("LI");
    const link = document.createElement("a");
    const item1 = document.createTextNode(`Section ${i + 1}`);
    link.appendChild(item1);
    listItem.appendChild(link);
    document.getElementById("navbar_list").appendChild(listItem);
    //This event listener and function will add scroll functionality for sections
    //nav bar
    listItem.addEventListener(
      "click",
      function anchorScroll() {
        let element = document.getElementById(`section${i + 1}`);
        element.scrollIntoView();
      },
      false
    );
    const navbar_menu = document.getElementById("navbar_menu");
    navbar_menu.appendChild(document.getElementById("navbar_list"));
  }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  for (let i = 0; i < section.length; i++) {
    let element = document.getElementById(`section${i + 1}`);
    element.classList.remove("your-active-class");
    let bounding = element.getBoundingClientRect();
    //check if this section is in the viewport and then change CSS accordingly
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= window.innerHeight &&
      bounding.right <= window.innerWidth
    ) {
      element.classList.add("your-active-class");
    }
  }
}

//Hide nav when not in use
function hideNav() {
  const timerID = setTimeout(function() {
    const nav = document.getElementById("navbar_list");
    nav.classList.add("hidden");
  }, 3000);
  document.addEventListener("scroll", function() {
    clearTimeout(timerID);
  });
}

//Show nav when scrolling
function showNav() {
  const nav = document.getElementById("navbar_list");
  document.addEventListener("scroll", function() {
    nav.classList.remove("hidden");
  });
}

//Make sure nav can be hidden as many times as needed by using a loop
function delayLoop() {
  let i = 0;
  setTimeout(function() {
    if (i < 10) {
      delayLoop();
      hideNav();
    }
  }, 5000);
}

//Set event listener so that page will dynamically show which pane is active
document.addEventListener("scroll", makeActive, false);

buildNav();
showNav();
delayLoop();
