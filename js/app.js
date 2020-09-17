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
const backToTop = document.querySelector('button'); // Back to top button
const header = document.querySelector('.page__header');
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
 * Displaying Back to top button when page Y offset is 600
*/
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 600) {
        backToTop.style.display = 'block';
    } else if (window.pageYOffset < 600) {
        backToTop.style.display = 'none';
    }
})
// Scroll to top when clicking the button
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0
    })
})
// Hide Navbar when scrolling
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 60) {
        header.style.opacity = '0';
    } else if (window.pageYOffset < 60) {
        header.style.opacity = '1';
    }
})

header.addEventListener('mouseover', () => {
    if (window.pageYOffset >= 60) {
        header.style.opacity = '1';
    }
})
// Build menu

// Scroll to section on link click

// Set sections as active


