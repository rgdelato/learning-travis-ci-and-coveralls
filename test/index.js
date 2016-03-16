import test from 'tape';
import { id, add, multiply, idf, addf, multiplyf, applyf } from '../src/';


test('Testing some functions, but not all functions', (assert) => {

	assert.equal(
		add(2, 3),
		5,
		'add(2, 3) should equal 5'
	);

	assert.equal(
		multiply(4, 5),
		20,
		'multiply(4, 5) should equal 20'
	);

	assert.equal(
		addf(2)(3),
		5,
		'addf(2)(3) should equal 5'
	);

	assert.equal(
		multiplyf(4)(5),
		20,
		'addf(4)(5) should equal 20'
	);

	assert.equal(
		applyf(add)(2)(3),
		5,
		'applyf(add)(2)(3) should equal 5'
	);

	assert.equal(
		applyf(multiply)(4)(5),
		20,
		'applyf(multiply)(4)(5) should equal 20'
	);

	assert.end();
});
