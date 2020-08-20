class CommandBase {
	constructor(names) {
		this.names = names;
	}

	run(message, args) {
		throw new Error("This method is abstract");
	}
}

module.exports = CommandBase;
