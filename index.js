//----------------Discord.js----------------
const {Collection, Client} = require("discord.js"),
        client = new Client();
        const Discord = require('discord.js');

const fs = require('fs');
const {TOKEN, PREFIX } = require("./config");
const moment = require("moment");
const ms = require("ms");
const axios = require('axios');


client.commands = new Collection();

client.login(TOKEN);

//----------------Handler.js----------------

// Recherche de toutes les commandes
fs.readdir("./Commandes/", (err, content) => {
    if(err) console.log(err);
    if(content.length < 1) return console.log('Veuillez créer des dossiers dans le dossier commandes !');
    var groups = [];
    content.forEach(element => {
        if(!element.includes('.')) groups.push(element); // Si c'est un dossier
    });
    groups.forEach(folder => {
        fs.readdir("./Commandes/"+folder, (e, files) => {
            let js_files = files.filter(f => f.split(".").pop() === "js");
            if(js_files.length < 1) return console.log('Veuillez créer des fichiers dans le dossier "'+folder+'" !');
            if(e) console.log(e);
            js_files.forEach(element => {
                let props = require('./Commandes/'+folder+'/'+element);              client.commands.set(element.split('.')[0], props);
            });
        });
    });
  });

// EVENTS
fs.readdir('./Events/', (error, f) => {
  if (error) {
      return console.error(error);
  }
  console.log(`[INFO] ${f.length} fichiers dans le dossier events chargé avec succès ! `);

  f.forEach((f) => {
      let events = require(`./Events/${f}`);
      let event = f.split('.')[0];

      client.on(event, events.bind(null, client));

  });
});


//---------------Connection------------
client.on("ready", async () =>{ 
    console.log("Le bot est Allumé!")
    client.user.setStatus("dnd");
    setInterval(() => {
        client.user.setActivity(`y! Mon prefix`, {type: "PLAYING"});
        setTimeout(function() {
          client.user.setActivity("Version : 3.0.0", {type: "PLAYING"});
        }, 10000)
        setTimeout(function() {
          client.user.setActivity(`y!invite`, {type: "PLAYING"});
        }, 10000)
        setTimeout(function() {
          client.user.setActivity(`Sur ${client.guilds.cache.size.toString()} serveur`, {type: "PLAYING"});
        }, 10000)
        setTimeout(function() {
          client.user.setActivity(`🎅 Bientôt noël 🎄 !!`, {type: "PLAYING"});
        }, 10000)
    }, 30000)
  
  });

client.on('message', async message => {
  let config = require("./config.js")
if (message.channel.type === "dm") return;
if (message.author.bot) return;
})


