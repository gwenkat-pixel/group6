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