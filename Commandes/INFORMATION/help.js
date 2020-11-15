const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {

    
    const embed = new Discord.MessageEmbed()
    .setTitle(`SpaceBotV2 | Commandes`, message.guild.iconURL({dynamic: true, size: 512}))
    .setColor("#9910F0")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`> ● Voici mon prefix :\`y!\`
    > ● J'ai un total de \`${client.commands.size}\` commandes !\n
    **⚙️ ● Commandes pour configurer le bot :**
     En développement !\n
    **🏅 ● Commandes pour les administrateur :**
     En développement !\n
    **✅ ● Toute les commmandes générale :**
     \`calc\`,\`fortnite\`,\`fortniteshop\`,\`help\`,\`invite\`,\`maj\`,\`lien\`,\`ping\`\n
    **📢 ● Toute les commandes information :**
     \`botinfo\`,\`channelinfo\`,\`uptime\`,\`insta\`,\`userinfo\`,\`serverinfo\`,
     \`meteo\`,\`covid\`,\`avatar\`\n
    **🖥️ ● Toute les commandes fun:**
     \`8ball\`,\`ascii\`,\`mdr\`,\`pleure\`,\`dice\`,\`frapper\`,\`calin\`,\`kiss\`\n
    **🌉 ● Toute les commandes gif:**
     \`birb\`,\`baguette\`,\`bunny\`,\`fail\`,\`pout\`,\`cat\`,\`clyde\`,\`dog\`,\`duck\`,\`fire\`\n
    **🔗 ● Liens : **
    > [**Invite-moi**](https://discord.com/api/oauth2/authorize?client_id=774734255082176562&permissions=8&scope=bot) **|** [**Support**](https://discord.gg/rAymF8z32r)
    `)
    message.channel.send(embed)

}


module.exports.help = {
    name: 'help',
};