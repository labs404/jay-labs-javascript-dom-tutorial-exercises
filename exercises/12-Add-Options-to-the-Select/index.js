let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

let selection = document.querySelector("#mySelect");

// Your code here
for (let country of countries) {
    console.log(country);
    let newOption = document.createElement("option");
    newOption.innerHTML = country;
    newOption.value = country;
    selection.appendChild(newOption);
};

selection.addEventListener("change", () => {
    alert(selection.value)
});