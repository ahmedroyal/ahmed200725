const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Test`,"http://twitch.tv/S-F")
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





client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("Yes.?");
    }
});









client.on('message', message => {
var prefix = ".";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**.bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});






client.on ('message', msg => { 
  if (msg.content ===  'كس امك') { 
    msg.reply('لا تسب').then(sb => {  
    msg.delete(30);
   sb.delete(1200);
      
  })
  }
});






client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('.ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});








client.on('message', message => {
    if (message.content.startsWith(".bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});








client.on('message', message => {
            if (message.content.startsWith(prefix . "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **bc1** ' ,' **بث جماعي + للكل + مطور** ')
.addField('     **bc2**  ' ,' **بث جماعي + للكل + غير مطور** ')
.addField('     **bc3** ' , '**بث جماعي + للأونلاين + غير مطور + منشن للشخص**') 
.addField('     **bc4** ' , '**بث جماعي + للكل + غير مطور + منشن للشخص**') 
.addField('     **ping** ' ,' ** سرعة اتصال البوت**')
.addField('     **كت تويت** ' , '**هذي لعبة الكت تويت**')
.addField('     **هل تعلم ** ' ,' **  لعبة هل تعلم  ** ')
.addField('     **clear ** ' ,' **  لمسح الشات بدون رقم  ** ')
.addField('     **say ** ' ,' **  عشان يتكلم عنك  ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});





client.login(process.env.BOT_TOKEN);
