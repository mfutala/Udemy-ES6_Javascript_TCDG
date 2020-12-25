let test = 'mississippi'
let letCounts = {};

test.split('');


for(let letter of test) {
  letCounts[letter] === undefined ? letCounts[letter] = 1 : letCounts[letter] += 1;
  
}
//Math.max(...Object.values(letCounts));
Object.keys(letCounts).filter(key => letCounts[key] === Math.max(...Object.values(letCounts))); 

//letCounts;

let letCounts = test.split('').reduce(function(hash,val) {
  hash[val] === undefined ? hash[val] = 1 : hash[val] += 1; 
  return hash;
},{});

//test.split('').forEach((val) => {
//  return letCounts[val] === undefined ? letCounts[val] = 1 : letCounts[val] += 1; 
//})

//
letCounts;
Object.keys(letCounts).filter(key => letCounts[key] === Math.max(...Object.values(letCounts)));