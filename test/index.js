import test from 'tape';
import { add, addTwo, addThree } from '../src/';


test('Testing some functions, but not all functions', (assert) => {

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
