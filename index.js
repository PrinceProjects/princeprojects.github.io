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

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}