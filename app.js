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
    return billAmount + tipAmount;
}

module.exports = {
    validateBillInput,
    validateTipInput,
    validatePeopleInput,
    calculateTotal
};