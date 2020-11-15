const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    function GetRandomInt(min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        return RandomInt;
}

user = message.mentions.members.first()

number = GetRandomInt(1, 4)
if (number == 1) image = `https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif`
if (number == 2) image = `https://media.tenor.com/images/b2f46d7880582fd101e3f62232338659/tenor.gif`
if (number == 3) image = `https://media.tenor.com/images/987423ad956c3185b075df36a51633df/tenor.gif`
if (number == 4) image = `https://media.tenor.com/images/fa3ad4339ce0d88a5ee2f8ba06fa36c3/tenor.gif`
if (number == 5) image = `https://risibank.fr/cache/stickers/d7/704-full.gif`



if (user) {


        var reply = new Discord.MessageEmbed()
                  .setColor('#2F3136')
                  .setTitle(`${user.user.username}, ${message.author.username} Mdr! 🤣`)
                  .setImage(image)
        message.channel.send(reply)


} else {
        var reply = new Discord.MessageEmbed()
                  .setColor('#2F3136')
                  .setTitle(`${message.author.username} Mdr ! 🤣`)
                  .setImage(image)
        message.channel.send(reply)
}

}


module.exports.help = {
    name: 'mdr',
};