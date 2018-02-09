const getAvailableConditions = () => availableConditions;

const applyFilter = (arr, condition, toCompare) => {
    let func = availableConditions[condition];
    result = func && arr.filter(func(toCompare));
    return result;
};

const multiple = (toCompare) => (x) => x % toCompare === 0;
const lesserThan = (toCompare) => (x) => x < toCompare;
const lesserOrEqualThan = (toCompare) => (x) => x <= toCompare;
const greaterThan = (toCompare) => (x) => x > toCompare;
const greaterOrEqualThan = (toCompare) => (x) => x >= toCompare;

const custom = (toCompare) => {
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