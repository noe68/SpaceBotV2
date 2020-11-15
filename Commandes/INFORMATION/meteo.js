const Discord = require ("discord.js");
const weather = require('weather-js');
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {

if(!args.length) {
    return message.channel.send("S’il vous plaît donner l’emplacement de la météo")
  }
  
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {

const embed = new Discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("Les unités de température peuvent être différentes un certain temps")
.addField("Temperature", `${result[0].current.temperature} Degrès`, true)
.addField("Temp du ciel", result[0].current.skytext, true)
.addField("Humidité", result[0].current.humidity, true)
.addField("Vitesse du vent", result[0].current.windspeed, true)//What about image
.addField("Temps d’observation", result[0].current.observationtime, true)
.addField("Affichage du vent", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
 message.channel.send(embed)
} catch(err) {
return message.channel.send("Impossible d’obtenir les données de l’emplacement donné")
}
})
}

module.exports.help = {
    name: "meteo"
}