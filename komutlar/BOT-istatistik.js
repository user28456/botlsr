const Discord = require("discord.js");
const moment = require("moment");
const cdb = require('croxydb');
const os = require("os");
require("moment-duration-format");

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
  const msg = new Discord.MessageEmbed()
    .setColor("#63a4fb")
    .setFooter(client.user.tag, client.user.avatarURL())
  .addField(
  "» **Sahibim**","<@493003491560783872>"
  )
    .addField(
      "» **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "» **Çalışma süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
     .addField(
      "» **Kullanıcılar**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      "» **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "» **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", client.ws.ping + " ms", true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .setThumbnail("https://media.discordapp.net/attachments/704352497422041168/727241966236074054/giphy-5.gif?width=544&height=408")
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .addField("**➥ Linkler**", "[Davet Linki](https://discord.com/oauth2/authorize?client_id=792177459268157440&scope=bot&permissions=8)\n[ Destek Sunucu](https://discord.gg/VBZFU5vx4T)\n[Website](Yakında)");
  return message.channel.send(msg);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["i"],
    permLevel: 0,
}

exports.help = {
  name: "istatistik",
};