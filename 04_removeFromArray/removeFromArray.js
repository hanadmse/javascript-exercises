const removeFromArray = function(array, param1, param2, param3, param4) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === param1 || array[i] === param2 || array[i] === param3 || array[i] === param4) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
