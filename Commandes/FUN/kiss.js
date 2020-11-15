const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_mentions)
    }else {
        var kiss_embed = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> **viens de faire un bisous à** " + "<@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://zupimages.net/up/19/10/6a6f.jpg")
        message.channel.send(kiss_embed)
    }

}


module.exports.help = {
    name: 'kiss',
};