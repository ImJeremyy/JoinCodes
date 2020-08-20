const fs = require("jsonfile");

function write(path, obj) {
	fs.writeFile(path + ".json", obj, { spaces: 2 }, (err) => {
		if (err != null) console.log(`${err}`);
	});
}

function read(path) {
	return fs.readFileSync(path);
}

const dataPath = "C:\\Users\\Jeremy_Mark\\Documents\\GitHub\\JoinCodes\\main\\data";
module.exports.usersPath = dataPath + "\\users";
module.exports.write = write;
module.exports.read = read;
