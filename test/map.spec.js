const { assert } = require('chai');
var  Map = require('../src/map');

describe('Map', function() {
	describe('getValues()', function(){
		
		it('should return a non empty array', function() {
			let arr = Map.generate();
			assert.isArray(arr);
		});

		it('should return an array with correct default size', function() {
			let arr = Map.generate();
			assert.lengthOf(arr, 1000);	
		});

		it('should return an array with correct user defined size', function() {
			let arr = Map.generate(10);
			assert.lengthOf(arr, 10);
		});

		it('should return default size if size param is null or undefined', function() {
			let arr;
            arr = Map.generate(null);
			assert.lengthOf(arr, 1000);
		
			arr = Map.generate(undefined);
			assert.lengthOf(arr, 1000);
		});

	});

	describe('getAvailableOperations()', function(){
		var availableOps;

		beforeEach(function() {
			availableOps = Map.getAvailableOperations();			
		});


		it('should return an array with the available operations', function() {
			assert.isObject(availableOps);
			assert.property(availableOps, 'add');
            assert.property(availableOps, 'product');
		});
	});

	describe('applyOperation()', function() {

		it('shoud return modified array for add operation', function() {
			let result = Map.applyOperation([1,2,3,4], 'add', 10);
			assert.isArray(result);
			assert.lengthOf(result, 4);
			assert.deepEqual(result, [11,12,13,14]);
		});
		
		it('shoud return modified array for product operation', function() {
			let result = Map.applyOperation([1,2,3,4], 'product', 0);
			assert.isArray(result);
			assert.lengthOf(result, 4);
			assert.deepEqual(result, [0,0,0,0]);
		});
	});
});
