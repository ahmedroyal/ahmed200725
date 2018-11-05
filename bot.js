
{
  "name": "Emoko",
  "description": "Emoko",
  "version": "0.0.0",
  "main": "bot.js",
  "scripts": {
    "start": "node bot.js"
  },
  "dependencies": {
   "discord.js": "^11.3.2",
    "fs": "^0.0.2",
    "giphy-api": "1.2.7",
    "math-expression-evaluator":"1.2.17",
    "common-tags":"1.7.2",
    "moment":"2.22.2",
     "canvas":"1.6.11",
    "jimp":"0.3.5",
    "hastebin-gen":"1.3.1",
    "google-translate-api":"2.3.0",
    "ascii-data-table":"2.1.1"
  }
}
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.login(process.env.BOT_TOKEN);

