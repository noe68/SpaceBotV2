const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/cno2xWuCqkG6A/giphy.gif",
"https://media.giphy.com/media/wsJHi6a1JwoXC/giphy.gif",
"https://media.giphy.com/media/NKeVGRQ8Uj7Da/giphy.gif",
"https://media.giphy.com/media/l2Sq2YYdLXLZnEtQA/giphy.gif",
"https://media.giphy.com/media/NKeVGRQ8Uj7Da/giphy.gif",
"https://media.giphy.com/media/Z5SMZDDtlPgL6/giphy.gif",
"https://media.giphy.com/media/hrSMjnL0T6sVLSpoqo/giphy.gif",
"https://media.giphy.com/media/871qwDxfSemEE/giphy.gif",
"https://media.giphy.com/media/GHPmyOgFZjR0k/giphy.gif",
"https://media.giphy.com/media/10xUg8DdgQSs9i/giphy.gif"
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de bunny!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "bunny"
}