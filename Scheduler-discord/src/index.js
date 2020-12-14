const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const commands = require("./commands");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the mongoDB database.");
  })
  .catch((err) => {
    console.log(`Unable to connect to the mongoDB database. Error: ${err}`);
  });
const task_model = require("./database/mongodb");

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

  cmd.execute(msg, args, task_model);
});

client.login(config.token);
