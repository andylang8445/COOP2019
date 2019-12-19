require('dotenv').config();
//const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NjU1MDU2NDQ0NTYzMTI4MzIx.XfQhJg.LSyfQh2y_7teFa8v8T-EbMXe3iQ_del');

var con = mysql.createConnection({
    host: "localhost", // ip address of server running mysql
    user: "root", // user name to your mysql database
    password: "0000", // corresponding password
    database: "test" // use the specified database
});

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

    if (msg.content === 'ping') {
        //msg.reply('pong');
        msg.channel.send('pong `' + Math.floor(bot.ping) + ' ms`');
    } else if (msg.content.startsWith('!kick')) {
        if (msg.mentions.users.size) {
            const taggedUser = msg.mentions.users.first();
            msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
        } else {
            msg.reply('Please tag a valid user!');
        }
    } else if (msg.content === '!info') {
        msg.channel.send('This bot is made for testing discord.js!');
        msg.channel.send('Created byHongjun Yun');
    } else if (msg.content === '!end_bot') {
        msg.channel.send('bot shutting down...');
        console.info('Bot shutdown');
        bot.destroy();
    } else if (msg.content === '!restart') {
        msg.channel.send('restarting...');
        bot.destroy();
        bot.login('NjU1MDU2NDQ0NTYzMTI4MzIx.XfQhJg.LSyfQh2y_7teFa8v8T-EbMXe3iQ');
        msg.channel.send('restarted!\nIt might take few more seconds for the bot to be back online');
        console.info('Bot has been restarted!');
    } else if (msg.content === 'list') {
        con.connect(function (err) {
            if (err) throw err;
            // if connection is successful
            con.query("SELECT * FROM index1", function (err, result, fields) {
                // if any error while executing above query, throw error
                if (err) throw err;
                // if there is no error, you have the result
                console.log(result);
                bot.channel.send(result);
            });
        });
    }
});
