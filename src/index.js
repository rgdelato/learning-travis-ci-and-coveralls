
const id = (x) => {
	return x;
};

const add = (a, b) => {
	return a + b;
};

const multiply = (a, b) => {
	return a * b;
};

const idf = (x) => {
	return (() => {
		return x;
	});
};

const addf = (a) => {
	return ((b) => {
		return a + b;
	});
};

const multiplyf = (a) => {
	return ((b) => {
		return a * b;
	});
};

const applyf = (func) => {
	return ((a) => {
		return ((b) => {
			return func(a, b);
		});
	});
};


export {
	id,
	add,
	multiply,
	idf,
	addf,
	multiplyf,
	applyf
};
