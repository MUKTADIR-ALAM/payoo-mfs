document.getElementById('add-money-btn').addEventListener('click', (event) => {
event.preventDefault();
const addAmmount = document.getElementById('add-ammount').value;
const pin = document.getElementById('pin').value;
const balance = document.getElementById('balance')
if (pin == '1234'){
    balance.innerText = parseFloat(balance.innerText)+parseFloat(addAmmount)
}else{
    alert('pin in incorrect please try again');
}
})