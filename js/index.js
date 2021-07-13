( function(){
  const taskManager = new TaskManager(),
        taskForm = document.getElementById("task-form"),
        name = document.getElementById("name"),
        description = document.getElementById("description"),
        assignedTo = document.getElementById("assigned-to"),
        dueDate = document.getElementById("due-date");

  taskForm.addEventListener("submit", function(event) {
    if (true) { // add isValid(taskForm) here
      taskManager.addTask(name.value, description.value, 
        assignedTo.value, dueDate.value);
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
})();