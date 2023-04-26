let tasks = [];

function addTask(){
    let taskInput = document.getElementById("taskInput");
    let newTask = taskInput.value;
    tasks.push(newTask);
    taskInput.value="";
    updateList();
}

function updateList(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(function(task){
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    })
}
