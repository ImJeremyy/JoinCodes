const CommandBase = require("./command_base");
const util = require("../utility/util");
const json = require("../utility/json");

class JoinCodeCommand extends CommandBase {
	constructor() {
		super(["joincode"]);
	}

	run(message, args) {
		const user = message.author;
		const channel = message.channel;
		var id;
		if (args.length == 0) {
			id = user.id;
		} else if (args.length == 1) {
			id = util.getIdFromAt(args[0]);
		} else {
			channel.send(user.toString() + " Invalid command usage. .joincode <@user>");
			return;
		}
		const read = json.read(json.usersPath + "\\" + id + ".json");
		if (read != null) {
			const code = read.joinCode;
			channel.send(user.toString() + "\n```/join " + code + "```");
		} else {
			channel.send(user.toString() + " This user has not registered their join code");
		}
	}
}

module.exports = JoinCodeCommand;
