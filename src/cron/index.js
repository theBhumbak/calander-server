const cron = require("node-cron");
const { findTasksByFilter } = require("../services/taskService");
const { Op } = require("sequelize");

const cronIntialise = (io) => {
  console.log("for io im here");
  io.on("connection", (socket) => {
    console.log("for io User Connected");
    console.log(`User Connected: ${socket.id}`);

    cron.schedule("*/30 * * * * *", async () => {
      // Your task logic here
      const mins = new Date().getMinutes();
      const startRange = new Date().setMinutes(mins + 1);
      const filter = {
        where: {
          startDate: {
            [Op.gte]: startRange,
          },
        },
      };
      try {
        const tasks = await findTasksByFilter(filter);
        socket.emit("receive_message", tasks);
      } catch (error) {
        console.log(">>>>> cron error", error);
      }
    });
    socket.on("join_room", (data) => {
      socket.join(data);
    });
    socket.on("send_message", (data) => {
      socket.broadcast.emit("receive_message", data);
    });
  });
};

module.exports = cronIntialise;
