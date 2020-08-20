const { Client } = require("discord.js");
const JoinCodeCommand = require("./commands/joincode_command");
const RegisterCodeCommand = require("./commands/registercode_command");

const bot = new Client();

const commands = [new JoinCodeCommand(), new RegisterCodeCommand()];

bot.on("ready", () => {
	console.log("Bot activated");
});

bot.on("message", (message) => {
	if (message.author.bot) return;

	var tmp = message.content.split(" ");
	const enteredCmd = tmp.shift().toLowerCase();
	const args = tmp;

	if (enteredCmd.startsWith(".")) {
		for (var i in commands) {
			const command = commands[i];
			const prefixlessEnteredCmdSplit = enteredCmd.split("");
			const prefixlessEnteredCmd = prefixlessEnteredCmdSplit.slice(1, prefixlessEnteredCmdSplit.length).join("");
			if (command.names.includes(prefixlessEnteredCmd)) {
				command.run(message, args);
			}
		}
	}
});

console.log("Loading..");
bot.login(process.env.token);
