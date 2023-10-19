document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const addButton = document.getElementById("add");
  const taskList = document.getElementById("task-list");

  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  for (const taskText of savedTasks) {
    createTask(taskText);
  }

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTask(taskText);
      taskInput.value = "";
      updateLocalStorage();
    }
  });

  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
        updateLocalStorage();
      }
    }
  });

  function createTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<span>${taskText}</span><button class="delete">Hapus</button><button class="edit">Edit</button><button class="done">Selesai</button>`;
    taskList.appendChild(taskItem);

    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
      updateLocalStorage();
    });

    const editButton = taskItem.querySelector(".edit");
    editButton.addEventListener("click", function () {
      const updatedTaskText = prompt("Edit tugas:", taskText);
      if (updatedTaskText !== null) {
        taskItem.querySelector("span").textContent = updatedTaskText;
        updateLocalStorage();
      }
    });

    const doneButton = taskItem.querySelector(".done");
    doneButton.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
      updateLocalStorage();
    });
  }

  function updateLocalStorage() {
    const taskItems = document.querySelectorAll("#task-list li span");
    const tasks = Array.from(taskItems).map((item) => item.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
