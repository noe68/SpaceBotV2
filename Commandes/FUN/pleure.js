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

number = GetRandomInt(1, 2)
if (number == 1) image = `https://media.tenor.com/images/eb24076e1f4c3e2998876a60745a4cb7/tenor.gif`
if (number == 2) image = `https://thumbs.gfycat.com/CaringAdmiredHerculesbeetle-size_restricted.gif`




if (user) {


        var reply = new Discord.MessageEmbed()
                  .setColor('#2F3136')
                  .setTitle(`${user.user.username}, ${message.author.username} pleure console lui 😥 `)
                  .setImage(image)
        message.channel.send(reply)


} else {
        var reply = new Discord.MessageEmbed()
                  .setColor('#2F3136')
                  .setTitle(`${message.author.username} pleure 😥`)
                  .setImage(image)
        message.channel.send(reply)
}


}


module.exports.help = {
    name: 'pleure',
};