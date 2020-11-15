const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
    message.delete();
    
    let Huglist = [
        "https://media1.tenor.com/images/b7e132fd3f4e110ea54ef8aa8f4eebbe/tenor.gif",
        "https://media1.tenor.com/images/e56e1ae197ea11668756e6e82407e5c5/tenor.gif",
        "https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif",
        "https://media1.tenor.com/images/e8a39c41b8e2eacdf0fd4b5889a5f323/tenor.gif",
        "https://media1.tenor.com/images/58a26a738703565f7fc276aedabfcfb3/tenor.gif",
        "https://media1.tenor.com/images/9c15748dfa9bba01a7c184cdb80e6e36/tenor.gif"
    
    
    
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" oof, j'aurais pas aimé")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "pout"
}