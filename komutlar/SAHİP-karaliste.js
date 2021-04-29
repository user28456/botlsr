const Discord = require('discord.js');
const cdb = require("croxydb");

exports.run = async(cclient, message, args) => {

if(message.author.id !== "493003491560783872") return message.channel.send("<a:781157570785443851:833983185377296384> Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("<a:781157570785443851:833983185377296384> Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send("<a:781157570785443851:833983185377296384> Bir sebep belirtmelisin!")

message.channel.send("<a:781157554973704214:833983183295873064> **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.")
const westra = new Discord.MessageEmbed()
.setColor("#GREEN")
.setTimestamp()
.setDescription(`<a:781157554973704214:833983183295873064> **${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
cclient.channels.cache.get("836036177281679370").send(westra)
cdb.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: 'karaliste',
    description: 'Karaliste',
    usage: 'karaliste'
  };