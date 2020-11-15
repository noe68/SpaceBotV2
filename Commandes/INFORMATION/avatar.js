const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {

    
    user = message.mentions.members.first()
    if (user) { image = user.user.displayAvatarURL({ dynamic: true }) } else { image = message.author.displayAvatarURL({ dynamic: true }) }


    var mentionned = message.mentions.users.first() || message.author

        let embed = new Discord.MessageEmbed()
        .setDescription(`**Voici l'avatar de** : **[${mentionned.username}](${mentionned.avatarURL()})**`)
        .setImage(image)
        .setColor("#9910F0")
        .setFooter(`L'avatar de ${mentionned.username}`)

        message.channel.send(embed)

}


module.exports.help = {
    name: 'avatar',
};