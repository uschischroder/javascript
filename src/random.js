const getRandom = () => Math.random()*2001 - 1000;

const generate = function(n) {
    if (n == undefined || n == null) n = 1000;

    let arr = new Array(n);
    return arr.map(getRandom);
};

module.exports = {
    generate
};