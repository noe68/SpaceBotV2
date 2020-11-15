const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {

    var channel_info = new Discord.MessageEmbed()
    .setTitle("📌 Informations sur ce channel")
        .addField(`Voici les toute les info :`, `
                        > **📝 Nom du channel :**  ${"<#" + message.channel.id + ">"}
                        > **🔗 ID du channel :**  ${message.channel.id}
                        > **📋 Type de channel :**  ${message.channel.type}
                        > **📅 Date de création du channel :**  ${message.channel.createdAt}
                        `)
        .setFooter("©️ SpaceBotV2 - 2020 | Tous droits réservés.", client.user.avatarURL())
        
        .setColor("#9910F0")
    message.channel.send(channel_info)
}

module.exports.help = {
    name: "channelinfo"
}