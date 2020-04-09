// build the nav
function buildNav() {
  const section = document.getElementsByTagName("section");
  var i;
  for (i = 0; i < section.length; i++) {
    const list = document.createElement("LI");
    const link = document.createElement("a");
    const item1 = document.createTextNode(`Section ${i + 1}`);
    link.appendChild(item1);
    link.href = `#section${i + 1}`;
    list.appendChild(link);
    document.getElementById("navbar_list").appendChild(list);
  }
}

// Add class 'active' to section when near top of viewport
const makeActive = function() {
  const section = document.getElementsByTagName("section");
  var i;
  for (i = 0; i < section.length; i++) {
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
      const section1 = document.getElementById("section1");
      element.classList.add("your-active-class");
    }
  }
};

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
  document.addEventListener("scroll", function(e) {
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

// Scroll to anchor ID using scrollTO event

// Scroll to section on link click

buildNav();
showNav();
makeActive();
delayLoop();
