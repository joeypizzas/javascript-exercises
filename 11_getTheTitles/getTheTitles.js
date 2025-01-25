const getTheTitles = function(arrInput) {
    const arrTitles = [];
    arrInput.forEach(obj => arrTitles.push(obj.title));
    return arrTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
