const Discord = require("discord.js");
const prefix = require("../../config.json").prefix;

const execute = async function (msg, args, DB) {
  const t = new Date();
  t.setUTCMonth(args[2] - 1, args[1]);
  t.setUTCHours(args[3], args[4], 0, 0);
  DB.push({
    task: args[0],
    time: t,
  });
  msg.channel.send(`New task added.\n Current DB: ${JSON.stringify(DB)}`);
};

module.exports = {
  name: "add",
  description: "Command to add a new task to the DB",
  usage: "add [task] [due_day] [month] [hours] [minutes] (default time: 23:59)",
  execute,
};
