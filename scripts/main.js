// varibales
let form = document.querySelector('#form');
// functions
class User {
  constructor(name, email, address, amount) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.amount = amount;
  }
}
function submit() {
  let newUser = new User(
    form.name.value,
    form.email.value,
    form.address.value,
    +form.amount.value
  );
  console.log(newUser);
  localStorage.setItem('user', JSON.stringify(newUser));
  clearInput();
}

let clearInput = () => {
  form.name.value = null;
  form.email.value = null;
  form.address.value = null;
  form.amount.value = null;
};
