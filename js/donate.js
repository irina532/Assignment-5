//donating noakhali
document.getElementById('noakhali-donate-btn').addEventListener('click', function (event){
event.preventDefault;
const inputDonationNoakhali= getInput('input-noakhali');

const bdtNoakhali =getBDT('noakhali-bdt');
const bdt= calculateDonation(inputDonationNoakhali,bdtNoakhali);
if(typeof(bdt)==='number'){ 
document.getElementById('noakhali-bdt').innerText=bdt;

}
    
})

//donating feni
document.getElementById('feni-donate-btn').addEventListener('click', function (event){
    event.preventDefault;
    const inputDonationFeni =getInput('input-feni');
    const bdtFeni = getBDT('feni-bdt');
    const bdt = calculateDonation(inputDonationFeni,bdtFeni);
    if(typeof(bdt)==='number'){ 
    document.getElementById('feni-bdt').innerText=bdt;
    }
    
    })

//donating quota movement
document.getElementById('quota-donate-btn').addEventListener('click', function (event){
    event.preventDefault;
    const inputDonationQuota =getInput('input-quota');
    const bdtQuota =getBDT('quota-bdt');
    const bdt= calculateDonation(inputDonationQuota,bdtQuota);
    if(typeof(bdt)==='number'){ 
    document.getElementById('quota-bdt').innerText=bdt;
    }
    })

//getting input value by id
function getInput(id){
    
     
  const inputAmount = document.getElementById(id);
  const inputValue =inputAmount.value;

  return inputValue; 
    
}

//getting bdt
function getBDT(id){
    const bdt =document.getElementById(id).innerText;

    return bdt;

}
//calculating donation
function calculateDonation(inputAmount, bdtAmount){
    const amount =document.getElementById('main-amount').innerText;

    if(isNaN(inputAmount)){
        alert('Invalid Donation Amount');
        
    }
    else{
        const amountNumber =parseFloat(amount);
        const inputNumber =parseFloat(inputAmount);
        const bdtAmountNumber =parseFloat(bdtAmount);
        const balance= amountNumber-inputNumber;
        if(balance<0){
            alert('Invalid Donation Amount');
        }
        else{
            const bdtBalance =inputNumber + bdtAmountNumber;
            document.getElementById('main-amount').innerText=balance;
        
            return bdtBalance;

        }
        
        
    }

}
