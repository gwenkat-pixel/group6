const taskManager = new TaskManager();
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
});
/* taskManager.addTask("Test addTask method",
  "Write and test the addTask method on TaskManager",
  "Brent", "2021-07-08");
console.log(taskManager.tasks); */