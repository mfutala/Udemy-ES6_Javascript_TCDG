/*


let computers = [
{name: 'Apple', ram: 24},
{name: 'compaq', ream: 4},
{name: 'Acer', ram: 32}
];

console.log(computers.some(function(computer) {
  return computer.ram > 10;
}));



for(computer of computers) {
  computer.ram > 10 ? console.log(computer) : '';
}



var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;

hasSubmitted = users.every(function(user){
return user.hasSubmitted;

});

console.log(hasSubmitted);
*/

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;

inProgress = requests.some(function(request){
return request.status === 'pending';
});

console.log(inProgress);