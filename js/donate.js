
src = "https://cdn.tailwindcss.com"
//donating noakhali
document.getElementById('noakhali-donate-btn').addEventListener('click', function (event) {
    event.preventDefault;

    const inputDonationNoakhali = getInput('input-noakhali');
    if (isNaN(inputDonationNoakhali)) {
         alert('Invalid Donation Amount');

        
    }
    if(!inputDonationNoakhali){
        return;
    }

    const bdtNoakhali = getBDT('noakhali-bdt');
    const bdt = calculateDonation(inputDonationNoakhali, bdtNoakhali);
    if (typeof (bdt) === 'number') {
        document.getElementById('noakhali-bdt').innerText = bdt;
        const inputDonationNoakhali = getInput('input-noakhali');
        const div = document.createElement('div');
        div.classList.add('border', 'rounded-xl', 'px-5', 'py-5','mx-16')

        const date = Date();

        div.innerHTML = `
<h4 class="text-lg lg:text-xl  font-bold">${inputDonationNoakhali} Taka is Donated for Famine-2024 at Noakhlai, Bangladesh</h4>
<p class="text-black opacity-70 text-sm">${date}</p>`;
        document.getElementById('history').appendChild(div);


    }

})

//donating feni
document.getElementById('feni-donate-btn').addEventListener('click', function (event) {
    event.preventDefault;
    const inputDonationFeni = getInput('input-feni');
    if (isNaN(inputDonationFeni)) {
        alert('Invalid Donation Amount');
        
       
   }
   if(!inputDonationFeni){
       return;
   }
    const bdtFeni = getBDT('feni-bdt');
    const bdt = calculateDonation(inputDonationFeni, bdtFeni);
    if (typeof (bdt) === 'number') {
        document.getElementById('feni-bdt').innerText = bdt;
        const inputDonationFeni = getInput('input-feni');
        const div = document.createElement('div');
        div.classList.add('border', 'rounded-xl', 'px-5', 'py-5', 'mx-16')

        const date = Date();

        div.innerHTML = `
<h4 class="text-lg lg:text-xl font-bold">${inputDonationFeni} Taka is Donated for Famine-2024 at Feni, Bangladesh</h4>
<p class="text-black opacity-70 text-sm">${date}</p>`;
        document.getElementById('history').appendChild(div);

    }

})

//donating quota movement
document.getElementById('quota-donate-btn').addEventListener('click', function (event) {
    event.preventDefault;
    const inputDonationQuota = getInput('input-quota');
    if (isNaN(inputDonationQuota)) {
        alert('Invalid Donation Amount');
        
       
   }
   if(!inputDonationQuota){
       return;
   }
    const bdtQuota = getBDT('quota-bdt');
    const bdt = calculateDonation(inputDonationQuota, bdtQuota);
    if (typeof (bdt) === 'number') {
        document.getElementById('quota-bdt').innerText = bdt;
        const inputDonationQuota = getInput('input-quota');
        const div = document.createElement('div');
        div.classList.add('border', 'rounded-xl', 'px-5', 'py-5','mx-16')

        const date = Date();

        div.innerHTML = `
<h4 class="text-lg lg:text-xl font-bold">${inputDonationQuota} Taka is Donated for Aid for Quota Movement Injured, Bangladesh</h4>
<p class="text-black opacity-70 text-sm">${date}</p>`;
        document.getElementById('history').appendChild(div);
    }
})

//getting input value by id
function getInput(id) {


    const inputAmount = document.getElementById(id);
    const inputValue = inputAmount.value;

    return inputValue;

}

//getting bdt
function getBDT(id) {
    const bdt = document.getElementById(id).innerText;

    return bdt;

}
//calculating donation
function calculateDonation(inputAmount, bdtAmount) {
    const amount = document.getElementById('main-amount').innerText;

    if (isNaN(inputAmount) || inputAmount < 0) {
        alert('Invalid Donation Amount');

    }
    else {
        const amountNumber = parseFloat(amount);
        const inputNumber = parseFloat(inputAmount);
        const bdtAmountNumber = parseFloat(bdtAmount);
        const balance = amountNumber - inputNumber;
        if (balance < 0) {
            alert('Invalid Donation Amount');
        }
        else {
            const bdtBalance = inputNumber + bdtAmountNumber;
            document.getElementById('main-amount').innerText = balance;

            return bdtBalance;

        }


    }

}
