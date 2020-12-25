/*



//es 5
function Car(options) {
this.title = options.title;

};

Car.prototype.drive = function() {
  return 'Vroom';
};

function Toyota(options) {
  Car.call(this, options);
 this.color = options.color; 
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'Beep';
}


const toyota = new Toyota({title: 'Camary', color: 'red'});

toyota;
toyota.drive();
toyota.honk();
*/

//E6
class Car {
  constructor(options) {
    this.title = options.title;
  }
  drive() {
   return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({color: 'red', title: 'Camary'});
'---'
toyota.honk();
toyota.drive();
toyota;

class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = options.health;
  }
  
}

class Snake extends Monster{
  constructor(options) {
    super(options)
  }
  
bite(snake) {
  return snake.health -= 10;
}
  
}

const snake = new Snake({name: 'Igor', health: 100});
const snake2 = new Snake({name: 'Freedy', health: 100});

snake;
snake2;
snake.bite(snake2);
snake.bite(snake2);
snake2;
snake;
snake2.bite(snake);
snake;