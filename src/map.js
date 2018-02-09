const getAvailableOperations = function() {
  return availableOperations;
};

const applyOperation = function (arr, operation, factor) {
  let func = availableOperations[operation];
  return func && arr.map(func(factor));
};

const add = (factor) => (x) => x + factor;
const product = (factor) => (x) => x*factor;

const availableOperations = {
  add: add,
  product: product
};

module.exports = {
  applyOperation,
  getAvailableOperations
};
