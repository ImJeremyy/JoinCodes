const CommandBase = require("./command_base");
const util = require("../utility/util");
const json = require("../utility/json");
const client = require("redis").createClient(process.env.REDIS_URL);

class JoinCodeCommand extends CommandBase {
	constructor() {
		super(["joincode"]);
	}

	run(message, args) {
		const user = message.author;
		const channel = message.channel;
		var id;
		//fetchs id
		if (args.length == 0) {
			id = user.id;
		} else if (args.length == 1) {
			id = util.getIdFromAt(args[0]);
		} else {
			channel.send(user.toString() + " Invalid command usage. .joincode <@user>");
			return;
		}
		client.get(id, (err, reply) => {
			if (reply != null) {
				const code = reply.toString();
				channel.send(user.toString() + "\n```/join " + code + "```");
				console.log("Successful fetch of id:" + id + " code: " + code);
			} else {
				channel.send(user.toString() + " :( Code not registered. **.registercode <code>**");
			}
		});
	}
}

module.exports = JoinCodeCommand;
