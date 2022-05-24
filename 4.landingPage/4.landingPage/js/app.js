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





// Scroll to anchor ID using scrollTO event

// Build menu 

// Scroll to section on link click


const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
console.log(sections);


//For all sections create a button
for (let section of sections) {
    //take the title
    const header = section.querySelector('h2')
    //Create the button 
    const item = document.createElement("button");
    //use the text from the title for the section
    item.textContent = header.textContent;
    item.setAttribute("id",header.textContent );
    //add the new item to the navBar - HTML
    navBar.appendChild(item);

    item.addEventListener("click", function()
        { 
            section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
      );
}




// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      const textOfSection = section.querySelector('h2');
      const menuItem = document.getElementById(textOfSection.textContent);
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 50 && box.bottom >= 50) {
        // Apply active state to the section and the menu button
        section.classList.add("your-active-class");
        menuItem.classList.add("acti");
      } else {
        // Remove active state to the section and the menu button
        section.classList.remove("your-active-class");
        menuItem.classList.remove("acti");
      }
    }
  }

  //make active during scroll
  document.addEventListener("scroll", function() 
    {
        makeActive();
    });


/*

 // when click over the button, scroll to the next function
    item.addEventListener("click", function()
        { 
            section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            section.classList.add("your-active-class");
            item.classList.add("acti"); 
        }
    ); 
 
    if(isInViewport(section))
        {section.classList.add("your-active-class");
         item.classList.add("acti");}
    else 
        {section.classList.remove("your-active-class");
        item.classList.remove("acti");}

*/


console.log(window.scrollY);
console.log(window.innerHeight);
console.log(document.documentElement.clientHeight);

//console.log(window.scrollY+headerHeight);

// Set sections as active


