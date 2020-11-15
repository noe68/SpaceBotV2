const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_nomentions = new Discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_nomentions)            
    }else {
        var calin = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> **viens de faire un calin à** <@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://zupimages.net/up/19/10/8vk8.gif")
        message.channel.send(calin)
    }
}


module.exports.help = {
    name: 'calin',
};