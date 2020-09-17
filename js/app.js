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
const sectionTitle = document.querySelectorAll('h2'); // all subheadings
/**
 * End Global Variables
 * Start Helper Functions
 * Function for adding active class to Section and to Navbar list items 
 * when in viewport
*/
const backupFun = enteries => {
    enteries.forEach(entery => {
        if (entery.isIntersecting) {
            entery.target.classList.add('your-active-class');
            let id = entery.target.getAttribute('id');
            document.querySelector(`[href='#${id}']`).classList.add('active');
        } else {
            entery.target.classList.remove('your-active-class');
            let id = entery.target.getAttribute('id');
            document.querySelector(`[href='#${id}']`).classList.remove('active');
        }
    })
}
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
const observer = new IntersectionObserver(backupFun, {
    threshold: 0.55
})
sections.forEach(element => {
    observer.observe(element);
})
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


