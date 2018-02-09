const {assert} = require('chai');
const Random = require('../src/random');

describe('Random', function () {

    describe('generate()', function () {

        it('should return a non empty array', function () {
            let arr = Random.generate();
            assert.isArray(arr);
        });

        it('should return an array with correct default size', function () {
            let arr = Random.generate();
            assert.lengthOf(arr, 1000);
        });

        it('should return an array with correct user defined size', function () {
            let arr = Random.generate(10);
            assert.lengthOf(arr, 10);
        });

        it('should return default size if size param is null or undefined', function () {
            let arr;
            arr = Random.generate(null);
            assert.lengthOf(arr, 1000);

            arr = Random.generate(undefined);
            assert.lengthOf(arr, 1000);
        });

    });
});