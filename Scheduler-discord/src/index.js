const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const commands = require("./commands");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity("~help");
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) {
    return;
  }

  const args = msg.content.slice(config.prefix.length).split(" ");
  const cmd_name = args.shift().toLowerCase();

  if (!commands[cmd_name]) {
    msg.react("🚫");
    return;
  }

  const cmd = commands[cmd_name];

  cmd.execute(msg, args);
});

client.login(config.token);
