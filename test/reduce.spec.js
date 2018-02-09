const {assert} = require('chai');
const Reduce = require('../src/reduce');

describe('Reduce', function () {

    describe('applyOperation() - Integers', function () {

        it('should return correct value for add operation with positive integers', function () {
            let result = Reduce.applyOperation([1, 1, 1, 1], 'add');
            assert.equal(result, 4);

            result = Reduce.applyOperation([2, 1, 10, 1, 5, 111, 98, 6700, 13400], 'add');
            assert.equal(result, 20328);

        });

        it('should return correct value for add operation with negative integers', function () {
            let result = Reduce.applyOperation([-1, -1, -1, -1], 'add');
            assert.equal(result, -4);

            result = Reduce.applyOperation([1000, -100, 0, -50], 'add');
            assert.equal(result, 850);
        });

        it('should return correct value for add operation with positive and negative integers', function () {
            let result = Reduce.applyOperation([-1, 1, -1, 1], 'add');
            assert.equal(result, 0);

            result = Reduce.applyOperation([1000, -100, 0, -50, 2, 5430], 'add');
            assert.equal(result, 6282);
        });

        it('should return correct value for product operation', function () {
            let result = Reduce.applyOperation([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'product');
            assert.equal(result, 1);

            result = Reduce.applyOperation([1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'product');
            assert.equal(result, 0);

            result = Reduce.applyOperation([100000, 3, 21], 'product');
            assert.equal(result, 6300000);
        });
    });
});
