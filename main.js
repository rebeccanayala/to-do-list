let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== ""){
        tasks.push(taskInput.value);
        updateTaskList(taskList);
        taskInput.value = "";
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    const taskList = document.getElementById("taskList");
    updateTaskList(taskList);
}

function toggleTask(index) {
    tasks[index] = tasks[index].startsWith("[Concluída] ", "") ?
        tasks[index].replace("Concluída ", "") :
        "[Concluída] " + tasks[index];
    const taskList = document.getElementById("taskList");
    updateTaskList(taskList);    
}

function updateTaskList(taskList) {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
    <span class="${task.startsWith("[Concluída] ") ? "completed" : ""}">${task}</span>
    ${!task.startsWith("[Concluída] ") ? `<button onclick="toggleTask(${index})">Concluir</button>` : ""}
    <button onclick="removeTask(${index})">Remover</button>`;
        taskList.appendChild(li);
    });
}
