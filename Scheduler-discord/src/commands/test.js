const Discord = require("discord.js");
const prefix = require("../../config.json").prefix;

const execute = async function (msg, args) {
  msg.channel.send(
    `You have used the test command.\nBot Prefix: ${prefix} and Arguments: ${args}`
  );
};

module.exports = {
  name: "test",
  description: "test command",
  usage: "!test [args]",
  execute,
};
