// A tip calculation app
// Empty functions for test driven development
function validateBillInput(billAmount) {
    return null;
}

function validateTipInput(tipPercentage) {
    return null;
}

function validatePeopleInput(numberOfPeople) {
    return null;
}

//Temporarilty Putting BE Functions Here
function calculateTotal(billAmount, tipAmount){

    if(billAmount < 0 || tipAmount < 0){
        throw new Error('Invalid Input - Bill must be 0 or greater and Tip must be greater than 0')
    }
    
    const total = Number(billAmount) + Number(tipAmount);
    return total;
}

//Calculate Tip and Validate input
function calculateTip(totalBill, tipPercentage) {

    if (totalBill <= 0 || tipPercentage < 0 || tipPercentage > 100) {
      throw new Error('Invalid input. Bill must be greater than 0, and tip percentage must be between 0 and 100.');
    }
  
    const tipAmount = (totalBill * tipPercentage) / 100;
    return tipAmount.toFixed(2);
  }
  

module.exports = {
    validateBillInput,
    validateTipInput,
    validatePeopleInput,
    calculateTotal,
    calculateTip
};