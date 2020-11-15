const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/locytmihz2ZvhPBe7U/giphy.gif",
"https://media.giphy.com/media/DBa2SlWqSKBnG/giphy.gif",
"https://media.giphy.com/media/3o6Zt4RfCVclHXyVj2/giphy.gif",
"https://media.giphy.com/media/jRK6lBWTb795e/giphy.gif",
"https://media.giphy.com/media/l0HlQS2CueufiYmUU/giphy.gif",
"https://media.giphy.com/media/KHhaSdqhakNxa884ea/giphy.gif",
"https://media.giphy.com/media/jRK6lBWTb795e/giphy.gif",
"https://media.giphy.com/media/3o72Fl9Ep94MnOcaB2/giphy.gif",
"https://media.giphy.com/media/dxfy2RfnNB82fm7NAd/giphy.gif",
"https://media.giphy.com/media/Y3e0ZqRzQcHSV8W9MF/giphy.gif",
"https://media.giphy.com/media/5z9yCKpNzCmlUkmgcl/giphy.gif"
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de clyde!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "clyde"
}