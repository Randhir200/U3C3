// var
let myProductList = JSON.parse(localStorage.getItem('purchase')) || [];
let user = JSON.parse(localStorage.getItem('user')) || {};
let voucherList = document.querySelector('#purchased_vouchers');
display(myProductList);
let bal = document.querySelector('#wallet_balance');
bal.innerText = user.amount;
console.log('hello');

function display(data) {
  data.forEach((el) => {
    let card = document.createElement('div');
    let name = document.createElement('h3');
    name.innerText = el.name;
    let img = document.createElement('img');
    img.src = el.image;
    let imgBox = document.createElement('div');
    imgBox.append(img);
    let price = document.createElement('p');
    price.innerText = el.price;
    card.append(imgBox, name, price);
    voucherList.append(card);
  });
}
