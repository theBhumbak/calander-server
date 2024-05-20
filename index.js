const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const tasksRouter = require("./src/routes/tasks");
const sequelize = require("./src/config/database");
const cors = require("cors");
const cronIntialise = require("./src/cron");

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
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
