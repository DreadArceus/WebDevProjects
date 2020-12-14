const Discord = require("discord.js");
const prefix = require("../../config.json").prefix;
const mongoose = require("mongoose");

const execute = async function (msg, args, model) {
  const t_date = new Date();
  t_date.setUTCMonth(args[2] - 1, args[1]);
  t_date.setUTCHours(args[3], args[4], 0, 0);
  const t = new model({ description: args[0], time: t_date });
  t.save();
  msg.channel.send(`Successfully added ${args[0]}`);
};

module.exports = {
  name: "add",
  description: "Command to add a new task to the DB",
  usage: "add [task] [due_day] [month] [hours] [minutes] (default time: 23:59)",
  execute,
};
