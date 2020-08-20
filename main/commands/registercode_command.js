const CommandBase = require("./command_base");
const client = require("redis").createClient(process.env.REDIS_URL);

class RegisterCodeCommand extends CommandBase {
	constructor() {
		super(["registercode"]);
	}

	run(message, args) {
		const user = message.author;
		const channel = message.channel;
		if (args.length == 1) {
			const joinCode = args[0];
			client.set(user.id, joinCode);
			channel.send(user.toString() + " Registered your join code: " + joinCode + ". Now do **.joincode** to view your join code.");
			console.log("Registered code of id:" + user.id + " tag: " + user.tag + " with joinCode: " + joinCode);
		} else {
			channel.send(user.toString() + " Invalid command usage. .registercode <your_join_code>");
		}
	}
}

module.exports = RegisterCodeCommand;
