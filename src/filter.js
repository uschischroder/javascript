const getAvailableConditions = function() {
    return availableConditions;
};

const applyFilter = function(arr, condition, toCompare){
    let func = avaialableConditions[condition];
    result = func && arr.filter(func(toCompare));
    return result;
};

const multiple = function(toCompare) {
    return function(x) {
        return x % toCompare === 0;
    }
};

const lesserThan = function (toCompare) {
    throw 'Not implemented yet.';
};

const lesserOrEqualThan = function (toCompare) {
    throw 'Not implemented yet.';
};

const greaterThan = function(toCompare) {
    throw 'Not implemented yet.';
};

const greaterOrEqualThan = function (toCompare) {
    throw 'Not implemented yet.';
};

const custom = function(toCompare) {
    throw 'Not implemented yet.';
};

const availableConditions = {
    multiple : multiple,
    lesserThan : lesserThan,
    lesserOrEqualThan: lesserOrEqualThan,
    greaterThan: greaterThan,
    greaterOrEqualThan: greaterOrEqualThan,
    custom: custom
};

module.exports =  {
    getAvailableConditions,
    applyFilter
};