const express = require("express");
const app = express();
const tasksRouter = require("./src/routes/tasks");
const sequelize = require("./src/config/database");
const cronIntialise = require("./src/cron");
const http = require("http");
const { Server } = require("socket.io");

app.use(express.json());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Routes
app.use("/tasks", tasksRouter);

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

io.on("connection", (socket) => {
  console.log(">>>> connection on");

  // Handle custom events from the client
  socket.emit("exampleEvent", { message: "Received your data" });
  // socket.on("exampleEvent", (data) => {
  //   console.log("Received exampleEvent:", data);
  //   // Emit an event back to the client

  // });

  // Handle client disconnect
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
