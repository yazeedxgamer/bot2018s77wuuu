const Discord = require('discord.js');
const Yazeedd = new Discord.Client();
const prefix = '!'

Yazeedd.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
Yazeedd.user.setGame(` SERVER EIVEL.| Bot By Yazeed.#9999 `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



Yazeedd.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});









console.log("Yazeeeddd Nasshhr");
 
Yazeedd.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ رابط السيرفر ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})




Yazeedd.login(process.env.BOT_TOKEN);
