/*
You can change this file name. Only if you know how to put the directory from package.json! 💦
Please put a star to the repo... ❤️
*/

// Ok, let's dig in! ❤️
// So as we can see there's nothing. Let's start by some simple code lines!
// Make sure to write these in a book so that you'll learn!

// Required packages
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
/*
Just to let you know in the discord.js v13 or above we don't use discord alone.
Example:
const Discord = require('discord.js');

Now let's make a .env file to protect our bot from hackers!
*/
require('dotenv').config();

// Now the part where the bot says 'I'm ready'

client.on('ready', () => {
    console.log("I'm online");
});

// Yep, we did it boi's!

// Now the login part for the bot to go online
// As we are gonna use dotenv. We'll just type in process.env.TOKEN

client.login(process.env.TOKEN);

/**
 * @INFO
 * Coded by: Franklin#6282
 * @INFO
 * Please put a star to the repo...
 */