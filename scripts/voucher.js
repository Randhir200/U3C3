//variables
let myProductList = JSON.parse(localStorage.getItem('purchase')) || [];
let voucherList = document.querySelector('#voucher_list');
let user = JSON.parse(localStorage.getItem('user')) || {};
let  updatedAmount = user.amount;
let balance = document.querySelector('#wallet_balance');
balance.innerText = updatedAmount;
let getStore = async () => {
  try {
    const url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data[0].vouchers);
    append(data[0].vouchers);
  } catch (err) {
    console.log(err);
  }
};
getStore();

let append = (data) => {
  data.forEach((el) => {
    let card = document.createElement('div');
    card.classList = 'voucher';
    let name = document.createElement('h3');
    name.innerText = el.name;
    let img = document.createElement('img');
    img.src = el.image;
    let imgBox = document.createElement('div');
    imgBox.append(img);
    let price = document.createElement('p');
    price.innerText = el.price;
    let addBtn = document.createElement('button');
    addBtn.innerText = 'Buy';
    addBtn.classList = 'buy_voucher';
    addBtn.addEventListener('click', () => {
      buyNow(el);
    });

    card.append(imgBox, name, price, addBtn);
    voucherList.append(card);
  });
};

let buyNow = (el) => {
  myProductList.push(el);
  console.log(myProductList);
  localStorage.setItem('purchase', JSON.stringify(myProductList));
  calTotalPrice(myProductList);
};

function calTotalPrice(data) {
  let totalPrice = 0;
  data.forEach((el) => {
    totalPrice += el.price;
  });
  walletBalance(totalPrice);
  console.log(totalPrice);
}

var walletBalance = (data) => {
  if (data > user.amount) {
    alert('Sorry! insufficient balance');
  } else {
    alert('Hurray! purchase successful');
     updatedAmount = updatedAmount - data;
    balance.innerText = updatedAmount;
    user["amount"] = updatedAmount;
    localStorage.setItem('user', JSON.stringify(user));
  }
};
