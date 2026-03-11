const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
