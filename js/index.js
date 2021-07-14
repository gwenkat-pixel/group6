( function(){
  const taskManager = new TaskManager(),
        taskForm = document.getElementById("task-form"),
        name = document.getElementById("name"),
        description = document.getElementById("description"),
        assignedTo = document.getElementById("assigned-to"),
        dueDate = document.getElementById("due-date");

  function validateFormFieldInput() {   
    if (!name.value) {
      document.querySelector("#name-alert").classList.remove("d-none");
      setTimeout(function(){
        document.querySelector("#name-alert").classList.add("d-none");
      }, 2000);
      return false;
    } else if (!dueDate.value) {
      document.querySelector("#date-alert").classList.remove("d-none");
      setTimeout(function(){
        document.querySelector("#date-alert").classList.add("d-none");
      }, 2000);
      return false;
    } else {return true;}
  }
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateFormFieldInput()) {
      taskManager.addTask(name.value, description.value, 
        assignedTo.value, dueDate.value);
      taskManager.render();
      taskForm.reset();
    }
  });
/*   taskManager.addTask("Go to supermarket", 
    "Pick up paper towels, burger buns, and tabouli", 
    "Bob", "July 10, 2021", "TODO");
  taskManager.addTask("Make hummus", 
    "Puree garbanzo beans for the party", 
    "Bob", "July 10, 2021", "TODO"); */
  taskManager.render();
})();