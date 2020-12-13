const Discord = require("discord.js");
const test = require("./test.js");

const execute = async function (msg, args) {
  if (!args.length) {
    msg.channel.send(`All commands: \`${Object.keys(commands).join("`, `")}\``);
  } else {
    cmd = commands[args[0]];
    msg.channel.send(
      `Details about the \`${cmd.name}\` command:\n> ${cmd.description}\n> Usage: ${cmd.usage}`
    );
  }
};

const help = {
  name: "help",
  description: "Command used to get help about all bot commands",
  usage: "!help [command-name]",
  execute,
};

const commands = {
  test,
  help,
};

module.exports = commands;
