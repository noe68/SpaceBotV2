const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");



module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Voici tous les lien important !")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#9910F0")
    .setDescription(`__**Voici le discord du créateur**__ :
     > **[Jack's Nooob#6859](https://discordapp.com/users/579260691458818060#${message.channel.id})**
     __**Voici le serveur support du bot**__ :
     > **[Rejoind-Moi](https://discord.gg/NCVHdpc)**
     __**Voici le lien pour inviter YesBotV2**__ :
     > **[Invite-Moi](https://discord.com/oauth2/authorize?client_id=763786835037519903&permissions=8&scope=bot)**
     __**Voici le twitch du créateur**__ :
     > **[Twitch](https://www.twitch.tv/jacksnooob)**`)
     .setFooter("©️ SpaceBotV2 - 2020 | Tous droits réservés.")

     message.channel.send(embed)
}


module.exports.help = {
    name: 'lien',
};