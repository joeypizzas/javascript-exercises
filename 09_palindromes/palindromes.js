const palindromes = function (str) {
    const arr = str.split("");
    const reversedArr = arr.slice().reverse();
    for (let i = 0; i < Array.length; i++) {
        if (arr[i] !== reversedArr[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
