document.getElementById('add-money-btn').addEventListener('click', (event) => {
event.preventDefault();
const addAmmount = document.getElementById('add-ammount').value;
const pin = document.getElementById('pin').value;
console.log(addAmmount, pin);
})