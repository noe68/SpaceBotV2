const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/3o7TKIQVip2Kc8amD6/giphy.gif",
"https://media.giphy.com/media/JyOsEVxu2Nk8E/giphy.gif",
"https://media.giphy.com/media/QvcMke6SRfHbi/giphy.gif",
"https://media.giphy.com/media/z0w6r9j5nuU8g/giphy.gif",  
"https://media.giphy.com/media/12IRXa3DLCWnny/giphy.gif",
"https://media.giphy.com/media/kHuLtYIhMcX6zxoMVH/giphy.gif",
"https://media.giphy.com/media/8cMxRywewjys8/giphy.gif",
"https://media.giphy.com/media/ddAGR2jh0FDoY/giphy.gif",
"https://media.giphy.com/media/3o7TKKfAAsHhIAYYCY/giphy.gif",
"https://media.giphy.com/media/OHHQoctgGsyPu/giphy.gif",
"https://media.giphy.com/media/pBjRP5FEA0Rpu/giphy.gif",
"https://media.giphy.com/media/2fJ3kgoTA96EwddgCZ/giphy.gif"
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de birb!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "birb"
}