const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/krewXUB6LBja/giphy.gif",
"https://media.giphy.com/media/vIJaz7nMJhTUc/giphy.gif",
"https://media.giphy.com/media/DtJAgycIRLK80/giphy.gif",
"https://media.giphy.com/media/82nxC1u2BC8VU1wiZq/giphy.gif",
"https://media.giphy.com/media/Y0zTJ7VrKo9P2/giphy.gif",
"https://media.giphy.com/media/xvGEx3cazysda/giphy.gif",
"https://media.giphy.com/media/b9QBHfcNpvqDK/giphy.gif",
"https://media.giphy.com/media/12rqBPpSz9jIA0/giphy.gif",
"https://media.giphy.com/media/msBAKoAHINITC/giphy.gif",
"https://media.giphy.com/media/2ATElMHGKoVeo/giphy.gif"
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de duck!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "duck"
}