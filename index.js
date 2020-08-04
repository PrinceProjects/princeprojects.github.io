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