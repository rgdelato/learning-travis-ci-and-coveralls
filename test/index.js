var test   = require('tape');
var add    = require('../src/index').add;
var addTwo = require('../src/index').addTwo;


test('Testing some functions, but not all functions', function (assert) {

	assert.equal(
		add(2, 3),
		5,
		'add(2, 3) should equal 5'
	);

	assert.equal(
		addTwo(3),
		5,
		'addTwo(3) should equal 5'
	);

	assert.end();

});
