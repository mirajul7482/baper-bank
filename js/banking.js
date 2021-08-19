document.getElementById('deposit-button').addEventListener('click',function(){
    const newDepositAmount = getInputValue('deposit-input');
    updateTOtalField('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true);




    //get deposit input
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    

    //update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDeposit = parseFloat(previousDepositText);
    // const newDepositTotal = previousDeposit + newDepositAmount;
    // depositTotal.innerText = newDepositTotal;
        
    //update total balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousbalancetext = balanceTotal.innerText;
    // const previousbalance = parseFloat(previousbalancetext);
    // const newbalanceTotal = previousbalance + newDepositAmount
    // balanceTotal.innerText = newbalanceTotal;
    
    
   
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const newwithdrawAmount = getInputValue('withdraw-input');
    updateTOtalField('withdraw-total', newwithdrawAmount);
    updateBalance(newwithdrawAmount, false)




    //get withdraw input
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newwithdrawAmountText = withdrawInput.value;
    // const newwithdrawAmount = parseFloat(newwithdrawAmountText);
    

    //update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previouswithdrawText = withdrawTotal.innerText;
    // const previouswithdraw = parseFloat(previouswithdrawText);
    // const newwithdrawTotal = previouswithdraw + newwithdrawAmount;
    // withdrawTotal.innerText = newwithdrawTotal;
    

    //update total balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousbalancetext = balanceTotal.innerText;
    // const previousbalance = parseFloat(previousbalancetext);
    // const newbalanceTotal = previousbalance - newwithdrawAmount
    // balanceTotal.innerText = newbalanceTotal;

    // //clear input 
    // withdrawInput.value = '';
    
})

// input function
function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //clear input 
    depositInput.value = '';
    return newDepositAmount;
}

// total field funtion
function updateTOtalField(totalField, newDepositAmount){
    const depositTotal = document.getElementById(totalField);
    const previousDepositText = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositText);
    const newDepositTotal = previousDeposit + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    return newDepositTotal;
}

//total balance function
function updateBalance(newwithdrawAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousbalancetext = balanceTotal.innerText;
    const previousbalance = parseFloat(previousbalancetext);
    
    if(isAdd==true){
        const newbalanceTotal = previousbalance + newwithdrawAmount;
        balanceTotal.innerText = newbalanceTotal;
    }
    else{
        const newbalanceTotal = previousbalance - newwithdrawAmount;
        balanceTotal.innerText = newbalanceTotal;
    }
}

