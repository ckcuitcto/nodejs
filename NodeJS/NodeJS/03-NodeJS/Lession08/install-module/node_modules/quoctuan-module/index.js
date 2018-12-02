var tmp;

function set (arg) {
	tmp = arg;
}

function get () {
	return tmp;
}

exports.set = set;
exports.get = get;