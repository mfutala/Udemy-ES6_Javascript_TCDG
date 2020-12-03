let products = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'orange', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  ];


/*
for(let product of products) {
  if(product.type === 'fruit') {
    filteredProducts.push(product);
  }
}
*/

console.log(products.filter(product => {
 return product.type === 'fruit'; 
}));
