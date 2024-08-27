document.getElementById("add-task-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        const listItem = document.createElement("li");
        listItem.className = "task-item";

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.className = "complete-btn";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        listItem.appendChild(taskContent);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";

        completeButton.addEventListener("click", function() {
            listItem.classList.toggle("completed");
        });

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });
    }
});