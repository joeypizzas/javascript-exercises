const reverseString = function(stringInput) {
    const stringArray = stringInput.split('');
    let reverseStringOutput = '';
    for (let i = stringArray.length - 1; i >= 0; i--) {
        reverseStringOutput = reverseStringOutput + stringArray[i];
    }
    return reverseStringOutput;
};

// Do not edit below this line
module.exports = reverseString;
