const sumAll = function(p1, p2) {
    if (!(typeof p1 == "number" && typeof p2 == "number")){
        return "ERROR"
    }
    if (p1 < 0 || p2 < 0) {
        return "ERROR"
    };
    if (p2 < p1) {
        p3 = p1;
        p1 = p2;
        p2 = p3;
    };
    let sum = 0
    for (i = p1; i <= p2; i++) {
        sum = sum + i;
    };
return sum;
};

// Do not edit below this line
module.exports = sumAll;
