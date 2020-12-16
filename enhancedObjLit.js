/*
//Es5 Version
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);  
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

//ES6 Version
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);  
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    },
  }
}
const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Eloquent Javacript', price: 15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

*/

function saveFile() {
$.ajax({method: 'POST', url: url, data: data })
};

const url = 'http://fileupload.com';
const data = {color: 'red'};

saveFile(url, data);