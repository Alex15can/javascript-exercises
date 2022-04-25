const fibonacci = function(nTerm) {
    if (nTerm < 0) return "OOPS";
    let a = 0;
    let b = 1;
    for (let i = 1; i < nTerm; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
