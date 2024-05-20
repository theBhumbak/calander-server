const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const tasksRouter = require("./src/routes/tasks");
const sequelize = require("./src/config/database");
const cronIntialise = require("./src/cron");

app.use(express.json());

const server = http.createServer(app);

app.use("/tasks", tasksRouter);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

cronIntialise(io);

server.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
