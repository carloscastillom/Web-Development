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





// build the nav
// Add class 'active' to section when near top of viewport


const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
console.log(sections);



const isInViewport = function (elem) {
	const distance = elem.getBoundingClientRect();
	return (
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.top > -10
	);
};


// Scroll to anchor ID using scrollTO event

// Build menu 

// Scroll to section on link click

//list were all position Y for the sections are added 
const height = []; 
//variable for position y of the section 
let positionY = 0;



//For all sections 
for (let section of sections) {
    //take the title
    const header = section.querySelector('h2')
    //Create the button 
    const item = document.createElement("button");
   
    //use the text from the title for the section
    item.textContent = header.textContent;

    // when click over the button, scroll to the next function
    item.addEventListener("click", function(){ section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); }); 
    
    //add the new item to the navBar - HTML
    navBar.appendChild(item);

    //increase the position by the new height of the current section and push it to the list Height
    positionY += section.getBoundingClientRect().height;
    height.push(positionY);

    if(isInViewport(section))
        {section.classList.add("your-active-class");
         item.classList.add("acti");}
    else 
        {section.classList.remove("your-active-class");
        item.classList.remove("acti");}

    console.log(section);
    console.log(section.getBoundingClientRect());


}
console.log(window.scrollY);
console.log(window.innerHeight);
console.log(document.documentElement.clientHeight);

//console.log(window.scrollY+headerHeight);

// Set sections as active


