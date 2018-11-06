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
    if (message.content === '.user') {
        if(!message.channel.guild) return message.reply(`❌ هذا الأمر فقط ل السيرفرات`);
   
   message.guild.fetchInvites().then(invs => {
   let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
   let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   var moment = require('moment');
   var men = message.mentions.users.first();
   var heg;
   if(men) {
   heg = men
   } else {
   heg = message.author
   }
   var mentionned = message.mentions.members.first();
   var h;
   if(mentionned) {  /// tm t3del mn Fox
   h = mentionned
   } else {
   h = message.member
   }
   moment.locale('ar-TN');
   var idDark = new  Discord.RichEmbed()
   
   .setColor("RANDOM")
     .setThumbnail(message.author.avatarURL)
   .addField(' دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('`D/M/YYYY HH:mm`')} **\n** \**${moment(heg.createdTimestamp).fromNow()}**` ,true) 
   .addField('انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('`D/M/YYYY HH:mm`')} \n \**${moment(h.joinedAt).fromNow()}\**`, true)
   .addField('عدد الدعوات', `${inviteCount}`, true) /// Dark last
   .setFooter(message.author.username , message.author.avatarURL)
   message.channel.sendEmbed(idDark);
   })}
   });




client.login(process.env.BOT_TOKEN);
