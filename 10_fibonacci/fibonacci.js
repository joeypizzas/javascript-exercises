const fibonacci = function(numInput) {
    const num = parseInt(numInput);
    const arr = [1, 1];
    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    } else {
        for (let i = 2; i < num; i++) {
            const newFibNum = arr[i - 1] + arr[i - 2];
            arr.push(newFibNum);
        }
    }
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
