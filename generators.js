/*


const colors = ['red', 'green', 'blue'];

for(let color of colors) {

  console.log(color);
}

function*  shopping() {
  //stuff on the sidewalk
  
  //Walking down the sidewalk
  
  //go into the store with cash 
  const stuffFromStore = yield 'cash';
  
  //Walk into Laundry
  const cleanClothes = yield 'Laundry';
  
  //walking back home 
  return {store:stuffFromStore, laundry:cleanClothes};
}

//stuff in the store
const gen = shopping();

gen.next(); //leaving our house

//walked into the store
//walking up and down isles
//purchase our stuff

gen.next('groceries'); //leaving the store with groceries
gen.next('clean clothes');


function* colors() {
 	yield 'red';
  yield 'blue';
  yield 'green';
  return "Finished with the Yields";
}

const gen = colors();

gen.next();
gen.next();
gen.next();



const myColors = [];

for (let color of colors()) {
  myColors.push(color);
}

myColors;

const engineeringTeam = {
 	size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];

for(let name of TeamIterator(engineeringTeam)) {
 names.push(name); 
}

names;


const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
 	size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
  	yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];

for(let name of engineeringTeam) {
 names.push(name); 
}

console.log(names);
*/

class Comment {
 constructor(content, children) {
   this.content = content;
   this.children = children;
 }
  *[Symbol.iterator] () {
    yield this.content;
    for(let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good Comment', []),
  new Comment('bad Comment', []),
	new Comment('meh', [])
  ];

const tree = new Comment('Great post!', children);
const values = [];

for(let value of tree) {
  values.push(value);
}

values;