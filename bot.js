const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+SOON`,"http://twitch.tv/S-F")
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




client.on ("guildMemberAdd", member => {
  
  var role = member.guild.roles.find ("name","▶ 𝑴𝑬𝑴𝑩𝑬𝑹 ◀");
member.addRole(role);
  
})


  client.on ("guildMemberRemove", member => { 

  })








client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["288240894979604491"];
if (message.content.startsWith(prefix + 'ownerbot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**👑 انت صاحب البوت **")
} else {
   message.reply("**😡 انت لست صاحب البوت**");   
}
}
});"];
if (message.content.startsWith(prefix + 'ownerbot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**👑 انت صاحب البوت **")
} else {
   message.reply("**😡 انت لست صاحب البوت**");   
}
}
});








 





client.login(process.env.BOT_TOKEN);
