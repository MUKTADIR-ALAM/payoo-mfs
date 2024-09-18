

document.getElementById('logIn').addEventListener('click', (event)=>{
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
    if(phoneNumber === '5' && pin === '1234'){
        window.location.href = './home.html';
    }else{
        alert('wrong phone number or pin');
    }
})