/*



let users = [
  {name: 'Jill'},
  {name: 'Alex'},
  {name: 'Bill'}
];

let user;

user = users.find(function(auser) {
  return auser.name === 'Alex';
})

console.log(user);


function Car(model) {
  this.model = model;
}

let cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

console.log(cars.find(function(car){
return car.model === 'Focus'
}));


let users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

let admin;

admin = users.find(function(user){
  return user.admin;
});

console.log(admin);


var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

account = accounts.find(function(element){
return element.balance === 12;
});
console.log(account);
*/
let ladders = [
  {id: 1, height: '20 feet'},
  {id: 2, height: '10 feet'},
  {id: 3, height: '10 feet'}
  ];
let x = [];



function findWhere(arr, criteria) {
  return arr.find(function(ladder){
        ladder.height === criteria.height ? x.push(ladder) : '';
  })
}
 

console.log(findWhere(ladders, {height: '10 feet'}));
console.log(x);