const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 
 console.log("Welcome Again !");

   var prefix = "$";

client.login('process.env.BOT_TOKEN');
