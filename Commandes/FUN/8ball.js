const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");

const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports.run = (client, message, args) => {
    const embedok = new Discord.MessageEmbed()
    .setDescription(":x: | Désolé, Veuillez me posé une question avant d'effectuer cette action.")
    .setFooter("YesBot")
    .setColor("#2f3136")
    .setTimestamp()
    if (!args[1]) return message.reply(embedok);
  
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non", "Je sais pas", "Chepa", "Ouaip"];
    let question = args.slice(0).join(" ");
    let res = Math.floor(Math.random() * replies.length);
    
    let askEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor("BLUE")
      .addField("Question", question)
      .addField("Réponse", replies[res])
      .setFooter("©️ YesBotV2 - 2020 | Tous droits réservés.");
    
    message.channel.send(askEmbed)

}


module.exports.help = {
    name: '8ball',
};