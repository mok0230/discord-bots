const { getTokenValue } = require('../utils/string');
const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({
  intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]
});

client.on("ready", () => {
  console.log(`${client.user.tag} deployed!`);
})

client.on("message", msg => {
  if (msg.content === '!wazzup') {
    console.log('received !wazzup');
    const wazzupEmbed = new MessageEmbed().setImage("https://tenor.com/view/whats-up-scary-scary-movie-scream-gif-16966640");

    // msg.reply(wazzupEmbed);
    msg.channel.send("https://tenor.com/view/whats-up-scary-scary-movie-scream-gif-16966640");
  }
})

const tokenValue = getTokenValue(__filename);

if (tokenValue) {
  client.login(tokenValue);
} else {
  console.error("Error! Cannot start bot - no token value was found. Please see README to configure token value.");
}
