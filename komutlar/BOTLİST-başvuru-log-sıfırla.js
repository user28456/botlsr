const Discord = require('discord.js');
const client = new Discord.Client();
const cdb = require('croxydb')
const db = require('quick.db')
exports.run = (client, message, args) => {
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
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<a:attention:836376259960897557> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "kb!"
 db.delete(`westralogkanal_${message.guild.id}`);
  message.channel.send(`<a:781157554973704214:833983183295873064> Başvuru log kanalı başarıyla sıfırlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-log-sıfırla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};