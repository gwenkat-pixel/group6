function createTaskHtml(name, description, assignedTo,
  dueDate, status){
    const html = `
    <li class="list-group-item">
    <div class="card">
      <h1 class="card-header">${name}</h1>
      <div class="card-body">
        <p class="card-text">${description}</p>
        <p>Assigned to: <span class="assigned">${assignedTo}</span></p>
        <p>Date due: <span class="date-due">${dueDate}</span></p>
        <p>Status: ${status}</p>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Status
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Todo</a>
              <a class="dropdown-item" href="#">In Progress</a>
              <a class="dropdown-item" href="#">Review</a>
              <a class="dropdown-item" href="#">Done</a>
            </div>
          </div>
        <a href="#" class="btn btn-success">Completed</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
  </li>
    `;
}

class TaskManager {
  constructor(tasks, currentId=0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(name, description, assignedTo, 
    dueDate, status="TODO") {
    this.currentId += 1;
    const newTask = {
      id: this.currentId,
      name,
      description,
      assignedTo,
      dueDate,
      status
    }
    this.tasks.push(newTask);
  }
}