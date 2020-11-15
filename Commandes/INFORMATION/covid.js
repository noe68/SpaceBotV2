const Discord = require ("discord.js");
const fetch = require('node-fetch');
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
    let countries = args.join(" ");

    const noArgs = new Discord.MessageEmbed()
    .setTitle(':x:Merci de mettre un pays!')
    .setColor("#0380F6")
    .setDescription('Il vous manque quelques argument ```(ex: covid all / covid France)```')
    .setTimestamp()

    if(!args[0]) return message.channel.send(noArgs);

    if(args[0] === "all"){
        fetch(`https://covid19.mathdro.id/api`)
        .then(response => response.json())
        .then(data => {
            let confirmed = data.confirmed.value.toLocaleString()
            let recovered = data.recovered.value.toLocaleString()
            let deaths = data.deaths.value.toLocaleString()

            const embed = new Discord.MessageEmbed()
            .setTitle(`Statistiques COVID-19 dans le monde 🌎`)
            .addField('Cas confirmés', confirmed)
            .addField('Soigniez', recovered)
            .addField('Décès', deaths)

            message.channel.send(embed)
        })
    } else {
        fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then(response => response.json())
        .then(data => {
            let confirmed = data.confirmed.value.toLocaleString()
            let recovered = data.recovered.value.toLocaleString()
            let deaths = data.deaths.value.toLocaleString()

            const embed = new Discord.MessageEmbed()
            .setThumbnail('https://images.discordapp.net/avatars/683462722368700526/70c1743a2d87a44116f857a88bb107e0.png?size=512')
            .setTitle(`COVID-19 Stats pour **${countries}**`)
            .addField('Cas confirmés', confirmed)
            .addField('soigniez', recovered)
            .addField('Décès', deaths)

            message.channel.send(embed)
        }).catch(e => {
            return message.channel.send('Pays non valide fourni')
        })
    }
}

module.exports.help = {
    name: "covid"
}