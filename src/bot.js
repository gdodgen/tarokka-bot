require('dotenv').config();

const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.login(process.env.BOT_TOKEN);
