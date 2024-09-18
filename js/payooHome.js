document.getElementById('add-money-btn').addEventListener('click', (event) => {
event.preventDefault();
const addAmmount = document.getElementById('add-ammount').value;
const pin = document.getElementById('pin').value;
const balance = document.getElementById('balance');
if (pin === '1234'){
    balance.innerText = parseFloat(balance.innerText) + parseFloat(addAmmount);
}else{
    alert('pin in incorrect please try again');
}
})



document.getElementById('cash-out-btn').addEventListener('click', (event) => {
event.preventDefault();
// console.log('cash out btn clicked')
const cashOutAmmount = document.getElementById('add-cash-out-ammount').value;
const cashOutPin = document.getElementById('cash-out-pin').value;
const balance = document.getElementById('balance');
if (cashOutPin === '1234'){
    balance.innerText = parseFloat(balance.innerText) - parseFloat(cashOutAmmount);
}else{
    alert('pin in incorrect please try again');
}
})


document.getElementById('add-money').addEventListener('click', (event)=>{
event.preventDefault();
document.getElementById('add-money-section').classList.remove('hidden');
document.getElementById('cash-out-section').classList.add('hidden');

})
document.getElementById('cash-out').addEventListener('click', (event)=>{
event.preventDefault();
document.getElementById('cash-out-section').classList.remove('hidden');
document.getElementById('add-money-section').classList.add('hidden');

})