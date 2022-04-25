const add = function(a , b) {
	let c = a + b
  return c
};

const subtract = function(a , b) {
  let c = a - b
  return c
};

const sum = function(array) {
  sumValue = 0;
  for (const x of array) {
    sumValue = sumValue + x;

  };
  return sumValue
	
};

const multiply = function(array) {
  multValue = 1;
  for (const x of array) {
    multValue = multValue*x;

  };
  return multValue

};

const power = function(a , b) {
  c = a ** b
	return c;
};

const factorial = function(a) {
  total = 1
  for (n = 1; n <= a; n++) {
    total = n * total
    console.log(total)
  }
  return total
	
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
