const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
	let factorial = 1
  for (i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
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
