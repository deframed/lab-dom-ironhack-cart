// ITERATION 1

// console.log('Hello, I\'m working')

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!')

  const price = product.querySelector(".price span").innerHTML
  let quantity = product.querySelector(".quantity value")
  
  

  console.log(price)
  console.log(quantity)
  


  let subtotal = product.querySelector(".subtotal span").innerHTML

  console.log(subtotal)

  // why doesnt it do the math & print????
  
  subtotal = quantity * price
  return subtotal

  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  
 let product = document.querySelector(".product")
  updateSubtotal(product)

  
});
