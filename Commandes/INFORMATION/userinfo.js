const Discord = require("discord.js");
const PREFIX = require('../../config');


module.exports.run = (client, message, args) => {
    var mentionned = message.mentions.users.first() || message.author


    function derror(message, error) {
              const reply = new Discord.MessageEmbed()
                        .setColor('#2f3136')
                        .setTitle(`:x: Vous devez mentionner une personne!`)
              message.reply(reply)
    }



    var user = message.mentions.members.first()
    if (!user) return derror(message, "Vous devez mentionner un membre !")
    if (user.nickname) { var nickname = user.nickname } else { var nickname = user.user.username }
    var bannable_bool = user.bannable
    if (bannable_bool) { var bannable = " Oui " } else { var bannable = " Non " }
    var kickable_bool = user.kickable
    if (kickable_bool) { var kickable = " Oui " } else { var kickable = " Non " }
    if (user.user.lastMessage) { var lastMessage = user.lastMessage.content; var lastMessageID = user.lastMessageID } else { var lastMessage = " Aucun Message "; var lastMessageID = " Aucun Message " }

    var j_t = user.joinedAt
    j_monthN = j_t.getMonth()
    if (j_monthN == 0) j_month = "Janvier"
    if (j_monthN == 1) j_month = "Février"
    if (j_monthN == 2) j_month = "Mars"
    if (j_monthN == 3) j_month = "Avril"
    if (j_monthN == 4) j_month = "Mai"
    if (j_monthN == 5) j_month = "Juin"
    if (j_monthN == 6) j_month = "Juillet"
    if (j_monthN == 7) j_month = "Août"
    if (j_monthN == 8) j_month = "Septembre"
    if (j_monthN == 9) j_month = "Octobre"
    if (j_monthN == 10) j_month = "Novembre"
    if (j_monthN == 11) j_month = "Décembre"
    j_day = j_t.getUTCDate()
    j_year = j_t.getFullYear()

    var joinedAt = j_day + ' ' + j_month + ' ' + j_year

    var c_t = user.user.createdAt
    c_monthN = c_t.getMonth()
    if (c_monthN == 0) c_month = "Jancvier"
    if (c_monthN == 1) c_month = "Février"
    if (c_monthN == 2) c_month = "Mars"
    if (c_monthN == 3) c_month = "Avril"
    if (c_monthN == 4) c_month = "Mai"
    if (c_monthN == 5) c_month = "Juin"
    if (c_monthN == 6) c_month = "Juillet"
    if (c_monthN == 7) c_month = "Août"
    if (c_monthN == 8) c_month = "Septembre"
    if (c_monthN == 9) c_month = "Octobre"
    if (c_monthN == 10) c_month = "Novembre"
    if (c_monthN == 11) c_month = "Décembre"
    c_day = c_t.getUTCDate()
    c_year = c_t.getFullYear()

    var createdAt = c_day + ' ' + c_month + ' ' + c_year

    i = 0
    a = true
    user.roles.cache.some(r => {
              if (i == 0) Roles = "> " + r.name + "\n"
              if (Roles.length > 500) {
                        a = false
                        b = "> **Encore trop de rôles à afficher !!**"
              } else {
                        b = ""
              }
              if (a) {
                        if (!i == 0) Roles = Roles + "> " + r.name + "\n"
              }
              i++
    })


    i = 0
    a = true
    user.permissions.toArray().forEach(r => {
              if (i == 0) permissions = r + ", "
              if (permissions.length > 500) {
                        a = false
                        b = "> **Encore trop de rôles à afficher !!**"
              } else {
                        b = ""
              }
              if (a) {
                        if (!i == 0) permissions = permissions + r + ", "
              }
              i++
      })


    var userinfo = new Discord.MessageEmbed()
              .setColor('#9910F0')
              .setThumbnail(user.user.avatarURL())
              .setTitle(`__Informations sur ${nickname}__`)
              .addField(`__Informations basique__`, `
              > **Pseudo** : \`${user.user.username}\`
              > **Avatar** : [Lien de son avatar](${mentionned.avatarURL()})
              > **Id** : \`${user.user.id}\`
              > **Status** : \`${user.presence.status}\`
              > **Activité** : \` ${user.presence.activities} \`
              > **A rejoint le serveur le** : \` ${joinedAt} \`
              > **Compte créé le** : \` ${createdAt} \`
              `)
              .addField(`__Informations avancées__`, `
              > → **Id** : \`${lastMessageID}\`
              > **Bannable** : \`${bannable}\`
              > **Kickable** : \`${kickable}\`
              `)

              .addField(`__Roles__`, `
              ${Roles}
              `)
              .setFooter(`Informations sur ${nickname}`)


    message.channel.send(userinfo)
    

}

module.exports.help = {
    name: 'userinfo',
  };