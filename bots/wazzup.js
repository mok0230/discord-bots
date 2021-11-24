const { getTokenValue } = require('../utils/string');
const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [ Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS ]
});

client.on("ready", () => {
  console.log(`${client.user.tag} deployed!`);
})

client.on("message", msg => {
  if (msg.content === 'hello') {
    msg.reply('world')
  }
})

const tokenValue = getTokenValue(__filename);

if (tokenValue) {
  client.login(tokenValue);
} else {
  console.error("Error! Cannot start bot - no token value was found. Please see README to configure token value.");
}

