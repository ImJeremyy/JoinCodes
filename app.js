const { Client } = require("discord.js");
const json = require("./utility/json");

const bot = new Client();

bot.on("ready", () => {
	console.log("Lemons");
});

console.log("Loading..");
bot.login(json.token);
