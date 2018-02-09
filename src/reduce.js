const getAvailableOperations = function() {
	return availableOperations;
};

const applyOperation = function(arr, operation) {
	let func = availableOperations[operation];
	return func && arr.reduce(func);
};

const add = (acc, curr) => acc + curr;
const product = (acc, curr) => acc*curr;

const availableOperations = {
	add: add,
	product: product
};

module.exports = {
	applyOperation,
	getAvailableOperations
};
