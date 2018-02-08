const getRandom = () => Math.random()*2001 - 1000;

function generate(n) {
    if (n == undefined || n == null) n = 1000;

    var arr = new Array(n);
    return arr.map(getRandom);
};

module.exports = {
    generate
};