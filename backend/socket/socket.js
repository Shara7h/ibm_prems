module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log("User connected");

    socket.on("taskUpdated", (task) => {

      io.emit("taskUpdated", task);

    });

  });

};
