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
  return section;
}

// Add class 'active' to section when near top of viewport
function isActive() {
  let element = document.getElementsByTagName("section");
  let bounding = element.getBoundingClientRect();
  let prevActive = document.getElementsByClassName("your-active-class");
  console.log(bounding);
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= window.innerHeight &&
    bounding.right <= window.innerWidth
  ) {
    prevActive.classList.remove("your-active-class");
    element.classList.add("your-active-class");
  }
}
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
buildNav();
isActive();
