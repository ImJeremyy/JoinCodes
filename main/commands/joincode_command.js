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
		if (args.length == 1) {
			const targetId = util.getIdFromAt(args[0]);
			const code = json.read(json.usersPath + "\\" + targetId + ".json").joinCode;
			if (code != undefined) {
				channel.send(user.toString() + " This user's join code is " + code);
			} else {
				channel.send(user.toString() + " This user has not registered their join code");
			}
		} else {
			channel.send(user.toString() + " Invalid command usage. .joincode <@user>");
		}
	}
}

module.exports = JoinCodeCommand;
