const mongoose = require("mongoose");

const task = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    time: {
      type: Date,
    },
  },
  { collection: "Tasks" }
);

module.exports = mongoose.model("tasks", task);
