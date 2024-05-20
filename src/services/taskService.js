const Task = require("../models/task");

class TaskService {
  async getAllTasks() {
    return Task.findAll();
  }

  async createTask(title, description, startDate, endDate, category) {
    return Task.create({ title, description, startDate, endDate, category });
  }

  async updateTask(id, updatedTask) {
    const task = await Task.findByPk(id);
    console.log(">>>> updateTask", id, task);

    if (!task) {
      throw new Error("Task not found");
    }
    return task.update(updatedTask);
  }

  async deleteTask(id) {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new Error("Task not found");
    }
    return task.destroy();
  }
  async findTasksByFilter(filter) {
    return Task.findAll(filter);
  }
}

module.exports = new TaskService();
