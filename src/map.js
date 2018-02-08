
var getAvailableOperations = function() {
  return availableOperations;
}	

var applyOperation = function (arr, operation, factor) {
  let func = availableOperations[operation];
  return func && arr.map(func(factor));
}

const getRandom = () => Math.random()*2001 - 1000;

function generate(n) {
  if (n == undefined || n == null) n = 1000;

  var arr = new Array(n);
  return arr.map(getRandom);	
}

const add = (factor) => (x) => x + factor;
const product = (factor) => (x) => x*factor;


var availableOperations = {
  add: add,
  product: product
};

module.exports = {
  generate,
  applyOperation,
  getAvailableOperations
};
