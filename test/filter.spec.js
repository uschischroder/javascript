const  { assert } = require('chai');
const Filter = require('../src/filter');

describe('Filter', function() {

    describe('getAvailableConditions()', function() {

        it('should return all available conditions object', function() {
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

    describe('applyFilter()', function() {

        it ('should return correct values for multiple filter type', function() {
            let result = Filter.applyFilter([1,2,3,4,5,6,7,8,9,10], 'multiple', 2)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [2,4,6,8,10]);

            result = Filter.applyFilter([1,2,3,4,5,6,7,8,9,10000], 'multiple', 22)
            assert.isArray(result);
            assert.lengthOf(result, 0);

            result = Filter.applyFilter([125,2,30,4,5,60,77,8,9,1000, 250000], 'multiple', 5)
            assert.isNotNull(result);
            assert.isArray(result);
            assert.deepEqual(result, [125, 30, 5, 60, 1000, 250000]);
        })
    });
});
