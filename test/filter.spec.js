const {assert} = require('chai');
const Filter = require('../src/filter');

describe('Filter', function () {

    describe('getAvailableConditions()', function () {

        it('should return all available conditions object', function () {
            let conditions = Filter.getAvailableConditions();
            assert.isNotNull(conditions);
            assert.isObject(conditions);
            assert.property(conditions, 'multiple');
            assert.isFunction(conditions.multiple);
            assert.property(conditions, 'lesserThan');
            assert.isFunction(conditions.lesserThan);
            assert.property(conditions, 'lesserOrEqualThan');
            assert.isFunction(conditions.lesserOrEqualThan);
            assert.property(conditions, 'greaterThan');
            assert.isFunction(conditions.greaterThan);
            assert.property(conditions, 'greaterOrEqualThan');
            assert.isFunction(conditions.greaterOrEqualThan);
            assert.property(conditions, 'custom');
            assert.isFunction(conditions.custom);
        });
    });

    describe('applyFilter() - Integers', function () {

        it('should return correct values for multiple filter type', function () {
            let result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'multiple', 2)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [2, 4, 6, 8, 10]);

            result = Filter.applyFilter([1, 2, 3, 4, 5, -44, 6, 7, 8, 9, 10000], 'multiple', 22)
            assert.isArray(result);
            assert.deepEqual(result, [-44]);

            result = Filter.applyFilter([1, 2, -3, 4, 5, 6, 7, 8, 9, 10000], 'multiple', 22)
            assert.isArray(result);
            assert.lengthOf(result, 0);

            result = Filter.applyFilter([125, 2, 30, 4, 5, 60, 77, 8, 9, 1000, 250000], 'multiple', 5)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [125, 30, 5, 60, 1000, 250000]);
        });

        it('should return correct values for lesser than filter type', function () {
            let result = Filter.applyFilter([1, 2, 3, 4, 5, -6, 7, 8, 9, 10], 'lesserThan', 3)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [1, 2, -6]);

            result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10000], 'lesserThan', -4)
            assert.isArray(result);
            assert.lengthOf(result, 0);

            result = Filter.applyFilter([125, 2, 30, 4, 5, 60, 77, 8, 9, 1000, 250000, -99], 'lesserThan', 130)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [125, 2, 30, 4, 5, 60, 77, 8, 9, -99]);
        });

        it('should return correct values for lesser or equal than filter type', function () {
            let result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesserOrEqualThan', 3)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [1, 2, 3]);

            result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10000], 'lesserOrEqualThan', 0)
            assert.isArray(result);
            assert.lengthOf(result, 0);

            result = Filter.applyFilter([-12, -8, -9, -10000], 'lesserOrEqualThan', -9)
            assert.isArray(result);
            assert.deepEqual(result, [-12, -9, -10000]);

            result = Filter.applyFilter([125, 2, 30, 4, 5, 60, 77, 8, 9, 1000, 250000], 'lesserOrEqualThan', 1000)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [125, 2, 30, 4, 5, 60, 77, 8, 9, 1000]);
        });

        it('should return correct values for greater than filter type', function () {
            let result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'greaterThan', 7)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [8, 9, 10]);

            result = Filter.applyFilter([1, 2, 3, 4, -5, 6, 7, -800, 9, 10000], 'greaterThan', 200000)
            assert.isArray(result);
            assert.lengthOf(result, 0);

            result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10000], 'greaterThan', 200000)
            assert.isArray(result);
            assert.lengthOf(result, 0);

            result = Filter.applyFilter([125, -2, 30, 4, 5, 60, -702147, 8, 9, 1000, 250000], 'greaterThan', 200)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [1000, 250000]);
        });

        it('should return correct values for greater or equal than filter type', function () {
            let result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'greaterOrEqualThan', 7)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [7, 8, 9, 10]);

            result = Filter.applyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10000], 'greaterOrEqualThan', 10001)
            assert.isArray(result);
            assert.lengthOf(result, 0);

            result = Filter.applyFilter([123, -211142, 3874, -97544, 512, 6, 7, 8, 9], 'greaterOrEqualThan', -5680)
            assert.isArray(result);
            assert.deepEqual(result, [123, 3874, 512, 6, 7, 8, 9]);

            result = Filter.applyFilter([125, 2, 30, 4, 5, 60, 77, 8, 900, 1000, 250000], 'greaterOrEqualThan', 300)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [900, 1000, 250000]);
        });
    });
});
