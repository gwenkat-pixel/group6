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
const taskHtml = createTaskHtml("Go to supermarket", 
  "Pick up paper towels, burger buns, and tabouli", 
  "Bob", "2021-07-10", "TODO");
  console.log(taskHtml);