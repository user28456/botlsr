const Discord = require('discord.js')
const cdb = require("croxydb");

exports.run = (client, message, args) => {
      if(cdb.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#ff2e32")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/VBZFU5vx4T)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "493003491560783872") return message.channel.send(bakim)

}
  
  if(message.author.id != "493003491560783872") return //Bot sahip id
  
  if(!args[0]) return message.channel.send('**Bakım modunu açmak için kb!bakım aç**')
  
  if(args[0] === 'aç') {
    if(cdb.fetch(`bakim`)) return message.channel.send('**Bakım modu zaten açık**')
    message.channel.send('<a:781157554973704214:833983183295873064> | **Bakım modu açıldı.**')
    cdb.set(`bakim`, 'acik')
  }
  if(args[0] === 'kapat'){
    if(!cdb.fetch(`bakim`)) return message.channel.send('**Bakım modu zaten kapalı.**')
    message.channel.send('<a:781157554973704214:833983183295873064> | **Bakım modu kapatıldı.**')
    cdb.delete(`bakim`)
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'bakım',
  usage: "bakım"
}
