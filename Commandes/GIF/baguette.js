const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/Yxq7SC6yTAwZG/giphy.gif",
"https://media.giphy.com/media/WS4yjkonjYSGk8cOsn/giphy.gif",
"https://media.giphy.com/media/146GYpNvSkSTcI/giphy.gif",
"https://media.giphy.com/media/l3q300qQxJ0ixNC6I/giphy.gif",
"https://media.giphy.com/media/uJGkiiZPO7Rqo/giphy.gif",
"https://media.giphy.com/media/5b43RhvTaudjP7vjM9/giphy.gif",
"https://media.giphy.com/media/S8agwQKV4uVyM/giphy.gif",
"https://media.giphy.com/media/3otPoxE27rVTTJLmgg/giphy.gif",
"https://media.giphy.com/media/cInA7KwT6JCPUppXIj/giphy.gif",
"https://media.giphy.com/media/W6Lo9AQkMd1gj3vELn/giphy.gif",
"https://media.giphy.com/media/xAG8Hr3TxhoD7GR6g1/giphy.gif",
"https://media.giphy.com/media/QwtYvjwgMlwl5dCCGg/giphy.gif"
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de baguette!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "baguette"
}