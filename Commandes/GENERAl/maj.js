const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setDescription(`**Patch Note : SpaceBotV2 | #1 | 14/11/2020**

        **● Avancement du bot **
        ✅ Commandes d'information : **Bientôt Fini !** 
        :o: Commandes de configuration : **En développement !** 
        :no_entry: Commandes d'administration : **En cour de réflexions !**
        :o: Commandes d'économie : **En développement !** 
        :no_entry: Commandes de musique : **En cour de réflexions !** 
        :no_entry: Commandes de Modération : **En cour de réflexions !**
        :o: Commandes de Gif : **En développement !** 
        :o: Commandes Fun : **En développement !** 
        
        :o: : **En développement**
        ✅ : **Fini ou Bientôt fini**
        :no_entry: :** En réflexions**
        
        **Equipe SpaceBotV2**`)
        .setColor("#9910F0")
        .setTitle("Voici la dernière mise a jour du bot ❓")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("©️ SpaceBotV2 - 2020. Tous droits réservés.", client.user.avatarURL())
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'maj',
};