/*


let numbers = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'yellow'}
];

console.log(numbers.reduce(function(line, word){
   line.push(word.color);
   return line;
},[]));


let primaryColors = [
  {color: 'Red'},
  {color: 'Yellow'},
  {color: 'Blue'}
];

console.log(primaryColors.reduce(function(accum, colors) {
  accum.push(colors.color);
  return accum;
},[]));


let parens = '()';

function balancedParens(string) {
return !string.split("").reduce(function(accum, char) {
  if(accum < 0) return accum;
  if(char === '(') return ++accum;
  if(char === ')') return --accum;
  return accum;
},[]);

};

console.log(balancedParens(')()'));

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];


var deskTypes = desks.reduce(function(accum, desk) {
   if(desk.type === 'sitting') ++accum.sitting;
   if(desk.type === 'standing') ++accum.standing;
   return accum;  

}, { sitting: 0, standing: 0 });

console.log(deskTypes);
*/

let numbers = [1,1,2,3,32,4,4,3,6,32];

function unique(arr) {
  	arr.sort(function(a,b){return a-b});
  	return arr.reduce(function (accum, number) {
     found = accum.find(element => element === number);
     found === undefined ? accum.push(number) : '';
     return accum;
    },[]);
}

console.log(unique(numbers));



