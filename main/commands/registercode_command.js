const CommandBase = require("./command_base");
const json = require("../utility/json");

class RegisterCodeCommand extends CommandBase {
	constructor() {
		super(["registercode"]);
	}

	run(message, args) {
		const user = message.author;
		const channel = message.channel;
		if (args.length == 1) {
			const joinCode = args[0];
			json.write(json.usersPath + "\\" + user.id, { joinCode: joinCode });
			channel.send(user.toString() + " Registered your join code: " + joinCode + ". Now do .joincode " + user.toString());
			console.log("Registered code of id:" + user.id + " tag: " + user.tag + " with joinCode: " + joinCode);
		} else {
			channel.send(user.toString() + " Invalid command usage. .registercode <your_join_code>");
		}
	}
}

module.exports = RegisterCodeCommand;
