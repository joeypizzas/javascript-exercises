const removeFromArray = function(inputArray, ...itemsRemoved) {
    for (const item of itemsRemoved) {
        while (inputArray.indexOf(item) !== -1){
            inputArray.splice(inputArray.indexOf(item), 1);
        } 
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
