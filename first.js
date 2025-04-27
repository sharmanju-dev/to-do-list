
let addItems = []; 
let addItemElement = document.querySelector("#addItem");

// Step 3: ADD function
function add() {
    let task = prompt("Enter a task:");
    if (task) {
        addItems.push(task);
        localStorage.setItem("tasks", JSON.stringify(addItems));
        alert("Task added successfully!");
    } else {
        alert("Task cannot be empty!");
    }
}


function view() {
    let allTasks = "";
    for (let i = 0; i < addItems.length; i++) {
        allTasks += (i + 1) + ". " + addItems[i] + "<br>";
    }
    addItemElement.innerHTML = allTasks || "No tasks found!";
}


function update() {
    let index = parseInt(prompt("Enter task number to update:")) - 1;
    if (index >= 0 && index < addItems.length) {
        let updatedTask = prompt("Enter updated task:");
        if (updatedTask) {
            addItems[index] = updatedTask;
            localStorage.setItem("tasks", JSON.stringify(addItems));
            alert("Task updated successfully!");
        } else {
            alert("Updated task cannot be empty!");
        }
    } else {
        alert("Invalid task number!");
    }
}


function delet() {
    let index = parseInt(prompt("Enter task number to delete:")) - 1;
    if (index >= 0 && index < addItems.length) {
        addItems.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(addItems));
        alert("Task deleted successfully!");
    } else {
        alert("Invalid task number!");
    }
}
