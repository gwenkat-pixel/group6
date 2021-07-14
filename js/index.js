const taskManager = new TaskManager();
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", function(event) {
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const assignedTo = document.getElementById("assigned-to");
  const dueDate = document.getElementById("due-date");
  if (true) { // add isValid(taskForm) here
    taskManager.addTask(name.value, description.value, 
      assignedTo.value, dueDate.value);
    taskManager.render();
  }
  event.preventDefault();
  taskForm.reset();
});
/* taskManager.addTask("Go to supermarket", 
  "Pick up paper towels, burger buns, and tabouli", 
  "Bob", "July 10, 2021", "TODO");
taskManager.addTask("Make hummus", 
  "Puree garbanzo beans for the party", 
  "Bob", "July 10, 2021", "TODO"); */
taskManager.render();