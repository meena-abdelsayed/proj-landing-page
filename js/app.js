/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById('navbar__list'); // unordered list items
const sections = document.querySelectorAll('section'); // all existing sections
const sectionTitle = document.querySelectorAll('h2');
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
for (let i = 0; i < sections.length; i++) {
    const listItems = document.createElement('li');
    const anchorElem = document.createElement('a');
    const anchorIdText = "section" + (i + 1);
    const anchorTextElem = document.createTextNode(sectionTitle[i].textContent);
    anchorElem.appendChild(anchorTextElem);
    anchorElem.setAttribute('href', ('#' + anchorIdText));
    anchorElem.classList.add('menu__link');
    listItems.appendChild(anchorElem);
    navbarList.appendChild(listItems);
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


