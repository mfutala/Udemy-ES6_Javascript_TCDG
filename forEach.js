// Create an Array of Numbers
let numbers = [1,2,3,4];

// Create a variable to hold sum

let sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

console.log(sum);
