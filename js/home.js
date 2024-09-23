function accessId(id){
  return document.getElementById(id);
}


// History page to Donate Page
document.getElementById('history-page').addEventListener('click', function(){
  const donateSection = document.getElementById('history-content');
  donateSection.classList.remove('hidden');

  const contentContainer = document.getElementById('content-container');
  contentContainer.classList.add('hidden');
  

  const historyButtonBg = document.getElementById('history-page');
  historyButtonBg.classList.add('bg-primary')

  const donateButtonBg = document.getElementById('donate-page');
  donateButtonBg.classList.remove('bg-primary')
  
});


// Donate Page to History Page
document.getElementById('donate-page').addEventListener('click', function(){
  const donateSection = document.getElementById('history-content');
  donateSection.classList.add('hidden');
  const contentContainer = document.getElementById('content-container');
  contentContainer.classList.remove('hidden');
  contentContainer.classList.remove('bg-primary');
  

  const historyButtonBg = document.getElementById('history-page');
  historyButtonBg.classList.remove('bg-primary')

  const donateButtonBg = document.getElementById('donate-page');
  donateButtonBg.classList.add('bg-primary')
});


// card 1
document.getElementById('donate-now-btn1').addEventListener('click', function(){
  const donateValue1 = document.getElementById('donate-value1').value;
  const donateValueNumber1 = parseFloat(donateValue1);
  
  if(isNaN(donateValueNumber1)) {
    alert("Please Donate Valid Amount");
    return;
  }

  if(donateValueNumber1 < 0){
    alert('Please Donate Positive Amount');
  }

  const balance = document.getElementById('balance');
  const balanceValue = balance.innerText;
  const balanceNumber = parseFloat(balanceValue);

  const currentBalance = balanceNumber - donateValueNumber1;
  accessId('balance').innerText = currentBalance;


  const donatedMoney1 = accessId('donated-money1');
  const donatedMoneyValue1 = donatedMoney1.innerText;
  const donatedMoneyNumber1 =  parseFloat(donatedMoneyValue1);
  const donatedCurrentMoney1 = donateValueNumber1 + donatedMoneyNumber1;
  
  accessId('donated-money1').innerText = donatedCurrentMoney1;
  



  const modalBtn1 = document.getElementById('my-modal-1');
  modalBtn1.showModal();

  document.getElementById('donate-value1').value = "";
});



// card 2
document.getElementById('donate-now-btn2').addEventListener('click', function(){
  const donateValue2 = document.getElementById('donate-value2').value;
  const donateValueNumber2 = parseFloat(donateValue2);
  
  if(isNaN(donateValueNumber2)) {
    alert("Please Donate Valid Amount");
    return;
  }

  if(donateValueNumber2 < 0){
    alert('Please Donate Positive Amount');
  }

  const balance = document.getElementById('balance');
  const balanceValue = balance.innerText;
  const balanceNumber = parseFloat(balanceValue);

  const currentBalance = balanceNumber - donateValueNumber2;
  accessId('balance').innerText = currentBalance;


  const donatedMoney2 = accessId('donated-money2');
  const donatedMoneyValue2 = donatedMoney2.innerText;
  const donatedMoneyNumber2 =  parseFloat(donatedMoneyValue2);
  const donatedCurrentMoney2 = donateValueNumber2 + donatedMoneyNumber2;
  
  accessId('donated-money2').innerText = donatedCurrentMoney2;
  

  const modalBtn2 = document.getElementById('my-modal-2');
  modalBtn2.showModal();

  document.getElementById('donate-value2').value = "";
});



// card 3
document.getElementById('donate-now-btn3').addEventListener('click', function(){
  const donateValue3 = document.getElementById('donate-value3').value;
  const donateValueNumber3 = parseFloat(donateValue3);
  
  if(isNaN(donateValueNumber3)) {
    alert("Please Donate Valid Amount");
    return;
  }

  if(donateValueNumber3 < 0){
    alert('Please Donate Positive Amount');
  }

  const balance = document.getElementById('balance');
  const balanceValue = balance.innerText;
  const balanceNumber = parseFloat(balanceValue);

  const currentBalance = balanceNumber - donateValueNumber3;
  accessId('balance').innerText = currentBalance;


  const donatedMoney3 = accessId('donated-money3');
  const donatedMoneyValue3 = donatedMoney3.innerText;
  const donatedMoneyNumber3 =  parseFloat(donatedMoneyValue3);
  const donatedCurrentMoney3 = donateValueNumber3 + donatedMoneyNumber3;
  
  accessId('donated-money3').innerText = donatedCurrentMoney3;

  const modalBtn3 = document.getElementById('my-modal-3');
  modalBtn3.showModal();

  document.getElementById('donate-value3').value = "";
});
