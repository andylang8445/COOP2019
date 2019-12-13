require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NjU1MDU2NDQ0NTYzMTI4MzIx.XfOnug.9phiXMFXpz-P6qDZu1wYJ9BeFuI';

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');

    } else if (msg.content.startsWith('!kick')) {
        if (msg.mentions.users.size) {
            const taggedUser = msg.mentions.users.first();
            msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
        } else {
            msg.reply('Please tag a valid user!');
        }
    }
    if (msg.content === 'ls') {
        msg.reply('<strong>ls</strong>');
    }
    if (msg.content === '?end_bot') {
        msg.channel.send('Bot dead');
        client.destroy();
    }
});
