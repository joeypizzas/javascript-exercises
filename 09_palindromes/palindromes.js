const palindromes = function (str) {
    const arr = str.split("");
    const lettersOnly = arr.filter(item => /[a-zA-Z0-9]/.test(item));
    const reversedArr = lettersOnly.slice().reverse();
    for (let i = 0; i < lettersOnly.length; i++) {
        if (lettersOnly[i].toLowerCase() !== reversedArr[i].toLowerCase()) {
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
