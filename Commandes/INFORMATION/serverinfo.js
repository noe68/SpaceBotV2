const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

module.exports.run = (client, message, args) => {
    const members = message.guild.members.cache;
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;

const g = message.guild
const t = message.guild.createdAt
const j_t = message.guild.createdAt


year = t.getFullYear()
monthN = t.getMonth()
if (monthN == 0) month = "Janvier"
if (monthN == 1) month = "Février"
if (monthN == 2) month = "Mars"
if (monthN == 3) month = "Avril"
if (monthN == 4) month = "Mai"
if (monthN == 5) month = "Juin"
if (monthN == 6) month = "Juillet"
if (monthN == 7) month = "Aôut"
if (monthN == 8) month = "Septembre"
if (monthN == 9) month = "Octobre"
if (monthN == 10) month = "Novembre"
if (monthN == 11) month = "Décembre"
day = t.getUTCDate()
creationDate = day + ', ' + month + ', ' + year
i = 0
x = true;
message.member.roles.cache.forEach(r => {
        if (i == 0) MemberRoles = "> " + r.name + "\n"
        if (MemberRoles.length > 500) {
                x = false
                b = "> **Still too many roles to display !**"
        } else {
                b = ""
        }
        if (x) {
                if (!i == 0) MemberRoles = MemberRoles + "> " + r.name + "\n"
        }
        i++


})
i = 0
a = true
message.guild.roles.cache.some(r => {
        if (i == 0) guildRoles = "> " + r.name + "\n"
        if (guildRoles.length > 500) {
                a = false
                b = "> **Still too many roles to display !**"
        } else {
                b = ""
        }
        if (a) {
                if (!i == 0) guildRoles = guildRoles + "> " + r.name + "\n"
        }
        i++
})

j_monthN = j_t.getMonth()
if (monthN == 0) month = "Janvier"
if (monthN == 1) month = "Février"
if (monthN == 2) month = "Mars"
if (monthN == 3) month = "Avril"
if (monthN == 4) month = "Mai"
if (monthN == 5) month = "Juin"
if (monthN == 6) month = "Juillet"
if (monthN == 7) month = "Aôut"
if (monthN == 8) month = "Septembre"
if (monthN == 9) month = "Octobre"
if (monthN == 10) month = "Novembre"
if (monthN == 11) month = "Décembre"
j_day = j_t.getUTCDate()
j_year = j_t.getFullYear()

var joinedAt = j_day + ' ' + j_monthN + ' ' + j_year




hour = t.getHours()
secondes = t.getSeconds()
creationTime = hour + ":" + secondes



botUser = message.guild.members.cache.filter(r => r.user.bot).size;








if (message.guild.verified) {
        veri = 'Oui'
} else {
        veri = 'Non'
}


if (g.available) {
        disp = "Oui"
} else {
        disp = "Non"
}

if (g.partnered) {
        part = "oui"
} else {
        part = "Non"
}

if (g.systemChannel) {
        sysChannel = g.systemChannel.name
} else {
        sysChannel = "( undefined )"
}

if (g.afkChannel) {
        afk = g.afkChannel.name
} else {
        afk = "( undefined )"
}

if (g.rulesChannel) {
        rules = g.rulesChannel.name
} else {
        rules = "( undefined )"
}

if (g.publicUpdatesChannel) {
        infoChannel = g.publicUpdatesChannel.name
} else {
        infoChannel = "( undefined )"
}

if (g.description) {
        desc = g.description
} else {
        desc = "( undefined )"
}

if (g.maximumPresences) {
        pres = g.maximumPresences
} else {
        pres = '( undefined )'
}


onlineMembers = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
offlineMembers = message.guild.members.cache.filter(({ presence }) => presence.status == 'offline').size;



const Embed = new Discord.MessageEmbed()


        .setColor('#9910F0')
        .setAuthor('SpaceBotV2', 'https://cdn.discordapp.com/avatars/739794179072196704/14289541d905dca6f8f2ad6961acd82a.webp')
        .setTitle(`Informations : ${message.guild.name}`)
        .addField(`**__Information de Basique :__**`, `
                                  > Nom : \`${message.guild.name}\`
                                  > Propriétaire : \`${g.owner.user.tag}\`
                                  > Date de création : **\`${creationDate}\`**
                                  > Nombre de Boodt: \`${message.guild.premiumSubscriptionCount || '0'}\`
                                  > Nombre d\'emojie : **\`${message.guild.emojis.cache.size}\`**
                                  > Roles : **\`${message.guild.roles.cache.size}\`**
                                  > Region : **\`${message.guild.region}\`**
                                  > Vérifié : **\`${veri}\`**
                                  > Partenaire : **\`${part}\`** 
                                  `)

        .addField(`__**Statistique : **__`, `
                                > Channels :  **\`${message.guild.channels.cache.size}\`**
                                > Membres :  **\`${message.guild.members.cache.size}\`**
                                > Humains: \`${members.filter(member => !member.user.bot).size}\`
                                > Bots : **\`${botUser}\`**
                                > Nombre de Text channel : \`${channels.filter(channel => channel.type === 'text').size}\`
                                > Nombre de Voice Channels : \`${channels.filter(channel => channel.type === 'voice').size}\`
                                
                                
                                `)
        .addField(`__**Status des membre : **__`, `
                                > Membres en ligne : **\`${onlineMembers}\`**
                                > Membres hors connexion : **\`${offlineMembers}\`**
                                > En ligne :  **\`${members.filter(member => member.presence.status === 'online').size}\`**
                                > Inactif :  **\`${members.filter(member => member.presence.status === 'idle').size}\`**
                                > Dnd : \`${members.filter(member => member.presence.status === 'dnd').size}\`
                                > Membres hors ligne : **\`${members.filter(member => member.presence.status === 'offline').size}\`**
                                
                                
                                `)
    .setTimestamp();



message.channel.send(Embed)
}

module.exports.help = {
    name: "serverinfo"
}