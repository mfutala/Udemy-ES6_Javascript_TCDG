/*
let numbers = [1,2,3];
let doubleNumbers = [];

let doubled = numbers.map(function (number) {
 return number * 2
})

console.log(doubled);


let cars = [
{model: 'Buick', price: 'Cheap'},
{model: 'Camaro', price: 'Expensive'}
];

let prices = cars.map(function (car) {
  return car.price;
})

console.log(prices);
*/

var paints = [
{color: 'red'},
{color: 'blue'},
{color: 'yellow'}
]
function pluck(array, property) {
  return array.map(function (element) {
   return element[property];
  });
  }


console.log(pluck(paints, 'color'));

//console.log(paints)

