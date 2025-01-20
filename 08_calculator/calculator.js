const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const sumOfAllNums = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sumOfAllNums;
};

const multiply = function(arr) {
  const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
  });
  return productOfAllNums;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	let factorialSum = 1;
  for (let i = 1; i <= num; i++) {
    factorialSum *= i;
  }
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
