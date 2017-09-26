//Megan's Function
function className(){
	var pic = document.getElementsByClassName("bork");
	pic[0].innerHTML = "<img class='rounded-circle' src='wink.jpg' width='240' height='240'>";
}

window.addEventListener("load", className, false);