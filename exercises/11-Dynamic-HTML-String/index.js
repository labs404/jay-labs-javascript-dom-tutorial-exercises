let myString = "<p>Hello!</p> <strong>My friend</strong>, we are in the year " + new Date().getFullYear();
// document.write(myString);
let myParagraph = document.createElement("p");
myParagraph.innerHTML = myString;
document.body.appendChild(myParagraph);

//jay's commit