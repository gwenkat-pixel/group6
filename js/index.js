const taskManager = new TaskManager();
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", function(event) {
  const email = 
    document.getElementById("");
  if (true) { // add isValid(taskForm) here
    taskManager.addTask();
    taskManager.render();
  }
  event.preventDefault();
  taskForm.reset();
});
taskManager.addTask("Go to supermarket", 
  "Pick up paper towels, burger buns, and tabouli", 
  "Bob", "July 10, 2021", "TODO");
taskManager.addTask("Make hummus", 
  "Puree garbanzo beans for the party", 
  "Bob", "July 10, 2021", "TODO");
taskManager.render();