require('dotenv').config();
//const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
var mysql = require('mysql');
var sql_conn_req_cnt = 0;
var time_curr;
const token = '------------------Put the token here-----------------';

bot.login(token);

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


    if (msg.content === '!help') {
        msg.channel.send('`ping`: Reply pong and network ping\n`!kick`: Kicks the player from the current Discord chat server\n`!info`: Shows the information of the bot\n`!end_bot`: Turn off the bot program\n`!restart`: Reboots the bot\n`list`: Shows the list from mySQL');

    } else if (msg.content === 'ping') {
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
        msg.channel.send('This bot is made for testing discord.js!\nCreated by `Hongjun Yun`');
    } else if (msg.content === '!end_bot') {
        msg.channel.send('bot shutting down...');
        console.info('Bot shutdown');
        bot.destroy();
    } else if (msg.content === '!restart') {
        msg.channel.send('restarting...');
        bot.destroy();
        bot.login(token);
        msg.channel.send('restarted!\nIt might take few more seconds for the bot to be back online');
        console.info('Bot has been restarted!');
    } else if (msg.content === 'list') {

        time_curr = new Date();

        /*con.connect(function (err) {
            if (err)
                throw err;*/
        // if connection is successful
        sql_conn_req_cnt++;
        console.log("SQL Database accessed at GST " + time_curr.getHours() + ":" + time_curr.getMinutes(0) + ":" + time_curr.getSeconds() + " for " + sql_conn_req_cnt + "th time");
        con.query("SELECT * FROM index1", function (err, result, fields) {
            // if any error while executing above query, throw error
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                // if there is no error, you have the result
                //console.log(result[i].id + ". " + result[i].name + " " + result[i].birthday + " " + result[i].age);
                msg.channel.send(result[i].id + ". " + result[i].name + " " + result[i].birthday + " " + result[i].age);

            }
        });
        //});

    }
});
