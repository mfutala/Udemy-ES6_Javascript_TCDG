/*


function addNumbers(...numbers) {
return numbers.reduce(function(sum, number) {
  return sum + number;
},0)

}

console.log(addNumbers(3,4));



const defaultColors = ['red', 'green'];
const userFaves = ['orange', 'yellow'];
const test = ['hello', ['another level'], 'world'];

defaultColors.concat(userFaves);

let a = ['blue',...defaultColors, ...userFaves, ...test];
a;


function validateShoppingList(...items) {
return !items.find('milk') ? ['milk', ...items] : '';

}

validateShoppingList('oranges', 'apples');

/*
const MathLibrary = {
  calculateProduct(a,b) {
    return a * b;
  },
  multiply(a,b) {
    return a * b;
  }
};
*/

//Refactored
const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(...rest) {
    return rest.reduce((acc, val) => acc * val);
  }
};

console.log(MathLibrary.calculateProduct(3,6,10));