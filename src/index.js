
var add = function (a, b) {
	return a + b;
};

var addTwo = function (a) {
	return add(2, a);
};

var addThree = function (a) {
	return add(3, a);
};

exports.add      = add;
exports.addTwo   = addTwo;
exports.addThree = addThree;
