const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const ms = require('ms');

module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Voici l'uptime de SpaceBotV2")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#9910F0")
    .setDescription(`Mon uptime est de \`${ms(client.uptime, { long: true })}\``)
    .setFooter("©️ SpaceBotV2 - 2020 | Tous droits réservés.")
    message.channel.send(embed)
}

module.exports.help = {
    name: "uptime"
}