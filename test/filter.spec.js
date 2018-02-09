const  { assert } = require('chai');
const Filter = require('../src/filter');

describe('Filter', function() {

    describe('getAvailableConditions()', function() {

        it('should return all available conditions object', function() {
           let conditions = Filter.getAvailableConditions();
           assert.isNotNull(conditions);
           assert.isObject(conditions);
        });
    });
});
