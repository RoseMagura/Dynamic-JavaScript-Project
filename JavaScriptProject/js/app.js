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
function makeActive() {
  const section = document.getElementsByTagName("section");
  var i;
  for (i = 0; i < section.length; i++) {
    let element = document.getElementById(`section${i + 1}`);
    let bounding = element.getBoundingClientRect();
    // if (element.ClassList === "your-active-class") {
    //   console.log(`Section ${i + 1} is active`);
    // }

    // let prevActive = document.getElementsByClassName("your-active-class");
    // console.log(prevActive);
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= window.innerHeight &&
      bounding.right <= window.innerWidth
    ) {
      const section1 = document.getElementById("section1");
      section1.classList.remove("your-active-class");
      // prevActive.classList.remove("your-active-class");
      element.classList.add("your-active-class");
    }
  }
}
//Hide nav when not in use
function hideNav() {
  setTimeout(function() {
    const nav = document.getElementById("navbar_list");
    nav.classList.add("hidden");
  }, 3000);
}

function showNav() {
  const nav = document.getElementById("navbar_list");
  document.addEventListener("scroll", function(e) {
    nav.classList.remove("hidden");
  });
}
// Scroll to anchor ID using scrollTO event

// Build menu

// Scroll to section on link click

// Set sections as active

buildNav();
makeActive();
hideNav();
showNav();
