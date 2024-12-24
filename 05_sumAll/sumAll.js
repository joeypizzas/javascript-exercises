const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (num1 >= 0 && Number.isInteger(num1) && num2 >= 0 && Number.isInteger(num2)) {
        if (num2 > num1) {
            for (let i = num1; i <= num2; i++) {
                finalSum = finalSum + i;
            }
        } else {
            for (let i = num2; i <=num1; i++) {
                finalSum = finalSum + i;
            }
        }
        return finalSum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
