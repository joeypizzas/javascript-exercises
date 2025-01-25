const findTheOldest = function(arr) {
    let today = new Date();
    
    const arrWithAges = arr.map(obj => {
        if (obj.yearOfBirth && obj.yearOfDeath) {
            obj.age = obj.yearOfDeath - obj.yearOfBirth;
        } else {
            obj.age = today.getFullYear() - obj.yearOfBirth;
        }
        return obj;
    });
    
    const arrAgesOnly = arr.map(obj => {
        if (obj.yearOfBirth && obj.yearOfDeath) {
            return obj.yearOfDeath - obj.yearOfBirth;
        } else {
            return today.getFullYear() - obj.yearOfBirth;
        }
    });

    const oldest = arrAgesOnly.reduce((acc, item) => {
        if (item > acc) {
            return item;
        } else {
            return acc;
        }
    }, 0);

    return arrWithAges[arrWithAges.findIndex(obj => obj.age == oldest)];
};

// Do not edit below this line
module.exports = findTheOldest;
