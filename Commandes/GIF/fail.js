const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
        "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif",
        "https://media.giphy.com/media/XpxVDWILLXC92/giphy.gif",
        "https://media.giphy.com/media/AAnIjZPUhrUM8/giphy.gif",
        "https://media.giphy.com/media/KHJw9NRFDMom487qyo/giphy.gif",
        "https://media.giphy.com/media/li0dswKqIZNpm/giphy.gif",
        "https://media.giphy.com/media/nKN7E76a27Uek/giphy.gif",
        "https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif",
        "https://media.giphy.com/media/Dc1w8y69enroY/giphy.gif",
        "https://media.giphy.com/media/NQL7Wuo2JSQSY/giphy.gif",
        "https://media.giphy.com/media/ZFZLIuWWkr29y/giphy.gif",
        "https://media.giphy.com/media/ABoaCMjkoqmIg/giphy.gif",
        "https://media.giphy.com/media/3og0IQvQkzyfxgjzLa/giphy.gif",
        "https://media.giphy.com/media/xTiTnLbo0KIJ8hrNjG/giphy.gif",
        "https://media.giphy.com/media/Jalikml2XiUgw/giphy.gif",
        "https://media.giphy.com/media/UXSB8HYbpLQNq/giphy.gif",
        "https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif",
        "https://media.giphy.com/media/exjT1SpxS88Yo/giphy.gif",
        "https://media.giphy.com/media/FewMZauWeGB0IpNpVO/giphy.gif",
        "https://media.giphy.com/media/xTiTnLbo0KIJ8hrNjG/giphy.gif",
        "https://media.giphy.com/media/3o7rc0N1lGLO9dUAz6/giphy.gif",
        "https://media.giphy.com/media/NDzYciTuZlOFy/giphy.gif",
        "https://media.giphy.com/media/LYd7VuYqXokv20CaEG/giphy.gif",
        "https://media.giphy.com/media/YTJXDIivNMPuNSMgc0/giphy.gif",
        "https://media.giphy.com/media/lOgzjLU2mmN3VoUG4S/giphy.gif",
        "https://media.giphy.com/media/myuLckXB7OjfGw1gSb/giphy.gif",
        "https://media.giphy.com/media/hQKiGV6MG8WmsHg2yx/giphy.gif",
        "https://media.giphy.com/media/l4KhKwYNat8Z6KAaQ/giphy.gif",
        "https://media.giphy.com/media/UsOoz5EYqRxXW/giphy.gif",
        "https://media.giphy.com/media/3LDqFQ1RcHDTa/giphy.gif",
        "https://media.giphy.com/media/WgJU7dr1uq5Ik/giphy.gif"  
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de fail!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "fail"
}