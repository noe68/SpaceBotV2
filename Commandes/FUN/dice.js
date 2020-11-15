const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");

const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports.run = (client, message, args) => {
    message.delete();
    const embed = new Discord.MessageEmbed()
  .setColor("#d54e12")
  .setTitle("Random Dice")
  .setThumbnail('https://tse1.mm.bing.net/th?id=OIP.ZLMVUBYFb-m1Omubrd_AIgHaFj&pid=Api&P=0&w=281&h=211')
  .addFields(
    { name: "D#1", value: randomDice(), inline: true },
    { name: "D#2", value: randomDice(), inline: true },
    { name: "D#3", value: randomDice(), inline: true }
  )
  .addFields(
    { name: "D#4", value: randomDice(), inline: true },
    { name: "D#5", value: randomDice(), inline: true },
    { name: "D#6", value: randomDice(), inline: true }
  );

message.channel.send(embed);

}


module.exports.help = {
    name: 'dice',
};