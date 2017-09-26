//Megan's Function
function className(){
	var pic = document.getElementsByClassName("bork");
	pic[0].innerHTML = "<img class='rounded-circle' src='wink.jpg' width='240' height='240'>";
}

window.addEventListener("load", className, false);

//David's function

function tagName(){
	var phone = document.getElementsByTagName("p");
	phone[0].innerHTML = "<img class='rounded-circle' src='phone.jpg' alt='Corgi on phone' width='240' height='240'>";

}
window.addEventListener("load", tagName, false);
