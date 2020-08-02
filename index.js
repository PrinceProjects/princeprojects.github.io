let menu = document.getElementById("menu")
let navList = document.getElementById("nav-list");

menu.addEventListener('click', toggle)


// bug -- during first click -- not responding else fine
navList.style.display = "none"
function toggle(e){
	console.log("h")
	// console.log(navList.style.display=="none")
	if(navList.style.display=="none"){
		navList.style.display = "flex"
		// console.log(navList.style.display)
	} else {
		navList.style.display = "none"
	}
	// navList.style.display = navList.style.display ? "none" : "flex";
	// navList.style.display = "none";
}