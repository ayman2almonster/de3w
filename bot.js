const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 
 console.log("Welcome Again !");

   var prefix = "$";

client.on('message', message => {
    if(message.content.startsWith(prefix+'support')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`suport server **[here](https://discord.gg/MDXQZnJ)**`)
    .setColor('RANDOM');
    
        message.author.send(embed)
}

.on("guildMemberAdd", async function (member) {
    if (data[member.guild.id]) {
        if (member.guild.roles.get(data[member.guild.id])) {
            try {
                member.addRole(member.guild.roles.get(data[member.guild.id]));
            } catch (error) {
                console.error(error);
            }
        }
    }
})

client.on('message', message => {
    if(message.content.startsWith(prefix + 'ip')) {
   const args = message.content.split(" ")
   const ip = args[1]
   const port = args[2]
      if(!ip) return message.channel.send("** Write Server IP **");
      if(!port){
          let embed = new Discord.RichEmbed()
          .setColor('#642EFE')
          .setThumbnail(`https://api.minetools.eu/favicon/${ip}/25565`) 
          .addField("📜 Server NIP",`${ip}`,true)
          .addField("🌐 Server Port",`No PorT`)
          .setImage(`http://status.mclive.eu/${ip}/${ip}/25565/banner.png`) 
          .setFooter(`KingBoT`)
          .setTimestamp()
      message.channel.send(embed)
      }
      if(port){
          let rembed = new Discord.RichEmbed()
          .setColor('#642EFE')
          .setThumbnail(`https://api.minetools.eu/favicon/${ip}/${port}`) 
          .addField("📜 Server NIP",`${ip}`,true)
          .addField("🌐 Server Port",`${port}`, true)
          .setImage(`http://status.mclive.eu/${ip}/${ip}/${port}/banner.png`) 
          .setFooter(`KingBoT`)
                  .setTimestamp()
      message.channel.send(rembed)
      }
      
  }})
  
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "375381620057964544") return message.reply('انت لست صاحب البوت!!!');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] تم إعادة تشغيل البوت بنجاح!`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('process.env.BOT_TOKEN');
        },3000);
    }
