const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "tasks",
  "task_7sd5_user",
  "d8SUqCK9By6Ysxz1dWVL2DjVBhdoSZTq",
  {
    host: "dpg-cp5l2h779t8c73f0ab70-a:5432",
    dialect: "postgres",
  }
);

module.exports = sequelize;
