const info = require("../info.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(info.prefix) || msg.author.bot) {
    return;
  }
  const args = msg.content.slice(info.prefix.length).split(" ");
  const cmd = args.shift().toLowerCase();
  
});

client.login(info.token);
