const sumAll = function(param1, param2) {
    let sum = 0;
    let smaller = 0;
    let larger = 0;
    if (typeof param1 !== "number" || typeof param2 !== "number" || param1 < 0 || param2 < 0) {
        return "ERROR";
    }
    if (param1 < param2) {
        smaller = param1;
        larger = param2;
    }
    else {
        smaller = param2;
        larger = param1;
    }
    for (i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
