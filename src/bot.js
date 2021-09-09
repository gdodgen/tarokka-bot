require('dotenv').config();

const {Client, Intents} = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS)
const client = new Client({ intents: myIntents });

client.on('ready', () => {
    console.log(`${client.user.tag} is running!`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!test') {
        message.channel.send('hello');
    }
});

client.login(process.env.BOT_TOKEN);