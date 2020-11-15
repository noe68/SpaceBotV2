const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();

    let Huglist = [
"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
"https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
"https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
"https://media.giphy.com/media/W3QKEujo8vztC/giphy.gif",
"https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif",
"https://media.giphy.com/media/E0cyxhawhe9dm/giphy.gif",
"https://media.giphy.com/media/33OrjzUFwkwEg/giphy.gif",
"https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
"https://media.giphy.com/media/JoDT2WaykzFnN9vJqL/giphy.gif",
"https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif",
"https://media.giphy.com/media/E0cyxhawhe9dm/giphy.gif",
"https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif",
"https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif",
"https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif",
"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
"https://media.giphy.com/media/G3773sSDJHHy0/giphy.gif",
"https://media.giphy.com/media/wUgWRubJHS7Ac/giphy.gif",
"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
"https://media.giphy.com/media/PqdfIrXEza6fC/giphy.gif",
"https://media.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.gif",
"https://media.giphy.com/media/TEkr9oBZ57KFmMWScZ/giphy.gif",
"https://media.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.gif",
"https://media.giphy.com/media/3nbxypT20Ulmo/giphy.gif",
"https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif",
"https://media.giphy.com/media/dsuDmM5HbJa3oL1Phf/giphy.gif",
"https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif",
"https://media.giphy.com/media/Q94xQWspTUkShljj8P/giphy.gif",
"https://media.giphy.com/media/1PgFpz0u4diQRuHyvE/giphy.gif",
"https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif",
"https://media.giphy.com/media/VOPK1BqsMEJRS/giphy.gif"    
    ]

    const embed = new Discord.MessageEmbed()
    .setTitle(message.author.username )
    .setDescription(" Voici des gifs de cat!")
    .setThumbnail("https://i.imgur.com/uA9QO6y.png")
    .setImage(Huglist[Math.floor(Math.random() * Huglist.length)])
    .setColor("#2f3136")
    .setThumbnail()
    message.channel.send(embed);
    
}


module.exports.help = {
    name : "cat"
}