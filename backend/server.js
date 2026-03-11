const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const taskRoutes = require("./routes/taskRoutes");
const socketHandler = require("./sockets/socket");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);

mongoose.connect("mongodb://localhost:27017/taskdb")
.then(() => console.log("MongoDB connected"));

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

socketHandler(io);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
