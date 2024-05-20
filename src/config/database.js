const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tasks", "sumit", "password", {
  host: "127.0.0.1",
  dialect: "postgres",
});

module.exports = sequelize;
