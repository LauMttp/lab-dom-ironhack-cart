// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  const productsArr = document.getElementsByClassName('product');
  const totalValue = document.querySelector('#total-value span');
  let totalPrice = 0;
  for (let product of productsArr) {
    totalPrice += updateSubtotal(product);
  }
  totalValue.innerHTML = totalPrice;
  return totalPrice;
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
  let removeBtn = document.querySelectorAll('.btn btn-remove');
  console.log(removeBtn);
  const createBtn = document.getElementById('create');
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeBtn.forEach((buton) => buton.addEventListener('click', removeProduct));
  createBtn.addEventListener('click', createProduct);
});
