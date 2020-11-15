const Discord = require("discord.js");
const PREFIX = require('../../config');
const { version } = require('../../package.json');
const os = require('os');
const ms = require('ms');
const { utc } = require('moment');

module.exports.run = (client, message, args) => {
    const core = os.cpus()[0];
    const embed = new Discord.MessageEmbed()
    .setTitle("Voici toute les information du bot!")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor('#9910F0')
        .addField('General :', [
            `> **Nom du bot:** ${client.user.tag}`,
            `> **Commandes:** ${client.commands.size}`,
            `> **Serveurs:** ${client.guilds.cache.size.toLocaleString()} `,
            `> **Utilisateurs:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
            `> **Channels:** ${client.channels.cache.size.toLocaleString()}`,
            `> **Date de création:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
            `> **Node.js:** ${process.version}`,
            `> **Version:** v:${version}`,
            `> **Discord.js:** v:12.4.1`,
            '\u200b'
        ])
        .addField('Systeme :', [
            `> **Platforme :** ${process.platform}`,
            `> **Uptime :** ${ms(client.uptime, { long: true })}`,
            `> **CPU :**`,
            `> \u3000 Cores : ${os.cpus().length}`,
            `> \u3000 Model : ${core.model}`,
            `> \u3000 Speed : ${core.speed}MHz`,
            `> ** Memory :**`,
            `> \u3000 Total : ${((process.memoryUsage().heapTotal)/ 1024 / 1024).toFixed(2)}`,
            `> \u3000 Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`
        ])
        .setTimestamp();

    message.channel.send(embed);
    

}

module.exports.help = {
    name: 'botinfo',
  };
