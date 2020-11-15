const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/DvyLQztQwmyAM/giphy.gif",
"https://media.giphy.com/media/RQSuZfuylVNAY/giphy.gif",
"https://media.giphy.com/media/Pn1gZzAY38kbm/giphy.gif",
"https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
"https://media.giphy.com/media/qpP7VsPNeBtpC/giphy.gif",
"https://media.giphy.com/media/LfCt1sR1VweBy/giphy.gif",
"https://media.giphy.com/media/Bc3SkXz1M9mjS/giphy.gif",
"https://media.giphy.com/media/BpDYodBlBXFIs/giphy.gif",
"https://media.giphy.com/media/LfCt1sR1VweBy/giphy.gif",
"https://media.giphy.com/media/Bc3SkXz1M9mjS/giphy.gif",
"https://media.giphy.com/media/aCqb9YW7QclN3rtto5/giphy.gif",
"https://media.giphy.com/media/5WhcSpUjK02f30sDQr/giphy.gif",
"https://media.giphy.com/media/YTXujdmJn3iOVZhMlQ/giphy.gif",
"https://media.giphy.com/media/3oKIPd8EtLUiCYHbry/giphy.gif",
"https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif",
"https://media.giphy.com/media/gGeyr3WepujbGn7khx/giphy.gif",
"https://media.giphy.com/media/U7969wTwwtn6KBvEdA/giphy.gif",
"https://media.giphy.com/media/54Y38YdCPe58XA0FpJ/giphy.gif",
"https://media.giphy.com/media/gGeyr3WepujbGn7khx/giphy.gif",
"https://media.giphy.com/media/eeUJaTwsHh3tswkaYm/giphy.gif",
"https://media.giphy.com/media/WZP3qaxYj10gU/giphy.gif",
"https://media.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif",
"https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif",
"https://media.giphy.com/media/TJxrHj7AurjqljHSv2/giphy.gif",
"https://media.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.gif",
"https://media.giphy.com/media/wjK3YnjoQf0go/giphy.gif",
"https://media.giphy.com/media/xThtadSLoInlcD1UmA/giphy.gif"

    
    
    
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de dog!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "dog"
}