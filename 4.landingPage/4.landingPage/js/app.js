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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
console.log(sections);




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
// Add class 'active' to section when near top of viewport





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 * var element = document.getElementById("section1");
*/

// Build menu 

// Scroll to section on link click

for (let section of sections) {
    const header = section.querySelector('h2')
    const item = document.createElement("h3");
    item.textContent = header.textContent;
    item.addEventListener("click", function(){ section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}); }); 
    navBar.appendChild(item);

}


// Set sections as active


