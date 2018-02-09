const {assert} = require('chai');
const Map = require('../src/map');

describe('Map', function () {

    describe('getAvailableOperations()', function () {
        let availableOps;

        beforeEach(function () {
            availableOps = Map.getAvailableOperations();
        });


        it('should return an array with the available operations', function () {
            assert.isObject(availableOps);
            assert.property(availableOps, 'add');
            assert.property(availableOps, 'product');
        });
    });

    describe('applyOperation() - Integers', function () {

        it('shoud return modified array for add operation', function () {
            let result = Map.applyOperation([1, 2, 3, 4], 'add', 10);
            assert.isArray(result);
            assert.lengthOf(result, 4);
            assert.deepEqual(result, [11, 12, 13, 14]);
        });

        it('shoud return modified array for product operation', function () {
            let result = Map.applyOperation([1, 2, 3, 4], 'product', 0);
            assert.isArray(result);
            assert.lengthOf(result, 4);
            assert.deepEqual(result, [0, 0, 0, 0]);
        });
    });
});
