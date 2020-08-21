// Navigation menu
let menu = document.getElementById("menu")
let navList = document.getElementById("nav-list");

menu.addEventListener('click', toggle)

// bug -- during first click -- not responding else fine *fixed*
navList.style.display = "none"
function toggle(e){
	if(navList.style.display=="none"){
		navList.style.display = "flex"		
	} else {
		navList.style.display = "none"
	}
}

// Dealing with form submission on pressing ENTER key
var el1 = document.querySelector("form input[name='name']");
var el2 = document.querySelector("form input[name='email']");
var el3 = document.querySelector("form textarea[name='message']");

let contactForm = document.getElementById("contact_form");

el1.addEventListener( 'keydown', submitHandler )
el2.addEventListener( 'keydown', submitHandler )
el3.addEventListener( 'keydown', submitHandler )

function submitHandler (e) {
	if (e.which == 13) {
        event.preventDefault();
        contactForm.submit();
    }
}

// Service worker for offline support
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}