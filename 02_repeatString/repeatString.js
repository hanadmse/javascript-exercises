const repeatString = function(string, number) {
    if (number < 0) {
        return 'ERROR';
    }
    repeatedString = "";
    for (i = 0; i < number; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
