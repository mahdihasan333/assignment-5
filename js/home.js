function id(id) {
  return document.getElementById(id);
};

document.getElementById('Donate-now-btn1').addEventListener('click', function(){
  const donateValue1 = id('donate-value1').value;
  const donateNumber1 = parseFloat(donateValue1);

  if(isNaN(donateNumber1)) {
    alert('Please Donate Valid Amount');
    return;
  }
  if(donateNumber1 <= 0){
    alert('Please Donate Positive Amount');
    return;
  }

  const currentBalance = id('current-balance').innerText;
  const updateCurrentBalance = currentBalance - donateValue1;

  if(updateCurrentBalance < 0) {
    alert("Not enough Balance You Can't Donate");
    return;
  }
  
  const donatedMoney1 = id('donated-money').innerText;
  const donatedMoneyNumber1 = parseFloat(donatedMoney1);
  const donationFinal = donateValue1 + donatedMoneyNumber1;
});