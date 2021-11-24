require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [ Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS ]
});

client.on("ready", () => {
  console.log('hello world', client.user.tag);
})

client.on("message", msg => {
  if (msg.content === 'hello') {
    msg.reply('world')
  }
})

client.login(process.env.BOT_TOKEN);