/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

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
