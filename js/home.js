
document.getElementById('Donate-now-btn1').addEventListener('click', function(){
  const donateValue1 = document.getElementById('donate-value1').value;
  const donateValueNumber1 = parseFloat(donateValue1);
  
  if(isNaN(donateValueNumber1)) {
    alert("Please Donate Valid Amount");
    return;
  }

  if(donateValueNumber1 < 0){
    alert('Please Donate Positive Amount');
  }

  const balance = document.getElementById('balance').innerText;
  const balanceNumber = parseFloat(balance);
  console.log(balanceNumber)

  
  const currentBalance = balanceNumber - donateValueNumber1;
  console.log(currentBalance);
  balance.innerText = currentBalance;
});