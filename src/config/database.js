const { Sequelize } = require("sequelize");
const isServer = require("../util");

const sequelize = isServer
  ? new Sequelize(
      "task_7sd5",
      "task_7sd5_user",
      "d8SUqCK9By6Ysxz1dWVL2DjVBhdoSZTq",
      {
        host: "dpg-cp5l2h779t8c73f0ab70-a",
        dialect: "postgres",
      }
    )
  : new Sequelize("tasks", "sumit", "password", {
      host: "127.0.0.1",
      dialect: "postgres",
    });

module.exports = sequelize;
