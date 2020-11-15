const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const axios = require('axios');

module.exports.run = async(client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`Merci de bien vouloir entré un pseudo instagrame`)
    }
    let url, response, account, details;
    try {
        url = `https://instagram.com/${args[0]}/?__a=1`;
        response = await axios.get(url)
        account = response.data
        details = account.graphql.user
    } catch (error) {
        return message.channel.send(`Pas un compte`)
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(`Voici l'instagrame de :${details.is_verified ? `${details.username} ✅` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
        .setDescription(`**Voici sa description** :${details.biography}`)
        .setThumbnail(details.profile_pic_url)
        .addFields(
            {
                name: "Total de poste:",
                value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                inline: true
            },
            {
                name: "Totale d'abonnés :",
                value: details.edge_followed_by.count.toLocaleString(),
                inline: true
            },
            {
                name: "Total d'abonnements:",
                value: details.edge_follow.count.toLocaleString(),
                inline: true
            }
        )
     message.channel.send(embed)


}

module.exports.help = {
    name: "insta"
}