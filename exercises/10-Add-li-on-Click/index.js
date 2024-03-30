let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newElem = document.createElement("li");
	newElem.innerHTML = "Forth element";
	document.querySelector("#myList").appendChild(newElem);
});
