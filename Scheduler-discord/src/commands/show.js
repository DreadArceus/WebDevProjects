const Discord = require("discord.js");
const prefix = require("../../config.json").prefix;
const mongoose = require("mongoose");

const execute = async function (msg, args, model) {
  const list = model.find();
  var dc_list = "```";
  for await (const doc of list) {
    console.log(doc);
    dc_list += `${doc}\n`;
  }
  dc_list += "```";
  msg.channel.send(`${dc_list}`);
};

module.exports = {
  name: "show",
  description: "Command to show all tasks in DB",
  usage: "show",
  execute,
};
