const { Client } = require("discord.js");
const json = require("./utility/json");

const bot = new Client();

bot.on("ready", () => {
	console.log("Bot activated");
});

console.log("Loading..");
bot.login(process.env.token);
