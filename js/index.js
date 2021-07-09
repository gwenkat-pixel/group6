const taskManager = new TaskManager();
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", function(event) {
  const email = 
    document.getElementById("");
  if (true) { // add isValid(taskForm) here
    taskManager.addTask();
  }
  event.preventDefault();
  taskForm.reset();
});