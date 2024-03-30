// Your code here
let toDoInput = document.querySelector("#addToDo");
let toDoList = document.querySelector("ul");


toDoInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        console.log(toDoInput.value);
        addToDoItem();
    }  
})

function addToDoItem() {
    let newItem = document.createElement("li");
    newItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${toDoInput.value}`;
    toDoList.appendChild(newItem);
    toDoInput.value = "";
}

function deleteTask(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("fa-trash")) {
      const listItem = clickedElement.parentElement.parentElement;
      toDoList.removeChild(listItem);
    }
}

toDoList.addEventListener("click", deleteTask