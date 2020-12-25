/*



let expense = {
type: 'Business',
amount: '$45 USD'

};

let {type, amount} = expense;

console.log(type);
console.log(amount);

type = "Personal";
console.log(expense, type);


let savedFile = {
extension: '.jpg',
name: 'repost',
size: 14040
};

function fileSummary(file){
  return `The file ${file.name}.${file.extension} is of the size ${file.size}`;
};

let savedFile = {
extension: '.jpg',
name: 'repost',
size: 14040
};

function fileSummary({extension, name, size}){
  return `The file ${name}${extension} is of the size ${size}`;
};

console.log(fileSummary(savedFile));


const companies = [
  'google',
  'facebook',
  'uber'
];

const [...name] = companies;

function signUp({username, password,email, birthDate, city}) {
  // create new user
  return user;
}
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@exprealty.com',
  birthDate: '1/19/1990',
  city: 'New York'
}
signUp(user);
*/

const points = [
  [4,5],
  [10,1],
  [0,40]
  ];

/*
[
  {x: 4, y: 5},
  {x:10, y:1},
  {x:0, y:40
];


let a = points.map(([x,y]) => {
  return { x, y };
});

console.log(a);

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes;

classesAsObject.map(([subject,time,teacher]) => {
    return {subject,time,teacher};                               
});

const numbers = [1, 2, ...[3, ...[8,9,10]]];

function double ([x, ...more ]) {
 return x !== undefined ? [x * 2, ...double(more)] : []  
}

console.log(double(numbers));
console.log(numbers);
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(place, destination) {
const [city, ...rest] = destination;
  if (city === undefined) return false;
  
  if(city === place) {
   return true; 
  } else {
    return contains(place, rest);
  }
  
}

console.log(contains('Barcelona', destinations));
contains('Nashville', destinations);
contains('Paris', destinations);
contains('Mars', destinations)

/*
let vocabulary = ['hello',
  ...['happy', 'cheerful', 'merry', 'glad'],
  ...['tired', 'sleepy', 'fatigued', 'drained'],
  ...['excited', 'eager', 'enthused', 'animated']
];



console.log(vocabulary.forEach(word => console.log(word) ));

*/