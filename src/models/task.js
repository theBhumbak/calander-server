const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
/*
category: "Health"
description: "Sdjskdksjd"
endDate: "Sun May 19 2024 18:00:00 GMT+0530"
startDate: "Sun May 19 2024 17:00:00 GMT+0530"
title: "Shdjshdkhs"
*/
const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  startDate: {
    type: DataTypes.DATE,
  },
  endDate: {
    type: DataTypes.DATE,
  },
  category: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;

// {}
