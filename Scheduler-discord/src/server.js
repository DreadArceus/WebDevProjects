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
  const temp = msg.content.slice(info.prefix.length).split(" ");
  const cmd = temp[0];
  const args = temp.slice(1);
  delete temp;
  msg.channel.send(`Your command: ${cmd}\nYour arguments: ${args}`);
});

client.login(info.token);