const palindromes = function (string) {
    let modifiedStr = string.replace(/[^\w]/g, "");
    for (i = 0; i < (Math.floor(modifiedStr.length / 2)); i++) {
        if (modifiedStr.at(i).toLowerCase() !== modifiedStr.at((modifiedStr.length - 1) - i).toLowerCase()) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
