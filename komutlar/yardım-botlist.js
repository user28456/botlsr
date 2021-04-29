const cdb = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => {
   let karaliste = cdb.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("RED")
 .setDescription(`<a:781157570785443851:833983185377296384> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/VBZFU5vx4T) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
       if(cdb.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("RED")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/VBZFU5vx4T)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "493003491560783872") return message.channel.send(bakim)

}
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Kestra Botlist Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('')
.setColor('#63a4fb')
.setDescription(`Kestra botu eklemek için \`kb!botdavet\` yazabilirsiniz.`)  
.addField(`» Başvurular`,` \`kb!başvuru-gidecek-kanal-ayarla\` | Başvuruların Gideceği Kanal`)
.addField(`» Başvuru Log`,` \`kb!başvuru-log-ayarla\` | Bot Onaylandı / Reddedildi Log Kanalı.`)
.addField(`» Yetkili Rol`,` \`kb!botlist-yetkili-rol-ayarla\` | Botları Onaylayacak Yetkili Rol.`)
.addField(`» Bot Reddet`,` \`kb!botreddet <BotID> <SahipID> <Sebep>\` | Botu Reddedersiniz.`)
.addField(`» Bot Onayla`,` \`kb!botonayla <BotID> <SahipID>\` | Botu Onaylarsınız.`)
.addField(`» Bilgilendirme`,` \`kb!botdavet\` | Kestra'yı Sunucunuza Davet Edersiniz
\`kb!istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 2
  };
  exports.help = {
    name: 'botlist'
  }; 
  