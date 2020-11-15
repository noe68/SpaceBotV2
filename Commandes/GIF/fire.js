const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/nrXif9YExO9EI/giphy.gif",
"https://media.giphy.com/media/3o72FfM5HJydzafgUE/giphy.gif",
"https://media.giphy.com/media/5nsiFjdgylfK3csZ5T/giphy.gif",
"https://media.giphy.com/media/yfEjNtvqFBfTa/giphy.gif",
"https://media.giphy.com/media/iH2IldVkqeLuJ7eJ0L/giphy.gif",
"https://media.giphy.com/media/ZxomYqy9uGtSQSSjth/giphy.gif",
"https://media.giphy.com/media/NTur7XlVDUdqM/giphy.gif",
"https://media.giphy.com/media/8Ep2aFnTfs6TC/giphy.gif",
"https://media.giphy.com/media/100QoSU9uTFU64/giphy.gif",
"https://media.giphy.com/media/15a78dCc2ESIw/giphy.gif",
"https://media.giphy.com/media/ontuGIyllqCRO/giphy.gif"
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de fire!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "fire"
}