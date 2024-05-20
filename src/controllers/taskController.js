const taskService = require("../services/taskService");

class TaskController {
  async getAllTasks(req, res) {
    try {
      //   const tasks = [];
      const tasks = await taskService.getAllTasks();
      console.log(">>>> getAllTasks", tasks);
      res.json(tasks);
    } catch (error) {
      console.log(">>>> error", error);
      res.status(500).json({ error: error.message });
    }
  }

  async createTask(req, res) {
    const { title, description, startDate, endDate, category } = req.body;
    try {
      console.log(">>>>> createTask", {
        title,
        description,
        startDate,
        endDate,
        category,
      });
      const task = await taskService.createTask(
        title,
        description,
        startDate,
        endDate,
        category
      );
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateTask(req, res) {
    const { id } = req.params;
    console.log(">>>> id", req.params);
    const updatedTask = req.body;
    try {
      const task = await taskService.updateTask(parseInt(id), updatedTask);
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteTask(req, res) {
    const { id } = req.params;
    try {
      await taskService.deleteTask(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new TaskController();
