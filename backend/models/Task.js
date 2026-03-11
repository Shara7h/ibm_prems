const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  assignedTo: String,
  status: {
    type: String,
    default: "todo"
  },
  deadline: Date
});

module.exports = mongoose.model("Task", TaskSchema);
