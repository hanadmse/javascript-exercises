const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    if (!Number.isInteger(number)) {
        number = parseInt(number);
    }
    let prev = 0;
    let curr = 1;
    for (i = 0; i < number; i++) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
