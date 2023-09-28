// Checks if bill input is valid and returns boolean
function validateBillInput(billAmount) {
    return typeof billAmount === 'number' && billAmount > 0;
}

function validateTipInput(tipPercentage) {
    return typeof tipPercentage === 'number' && tipPercentage > 0 && tipPercentage <= 100
}

function validatePeopleInput(numberOfPeople) {
    return typeof numberOfPeople === 'number' && numberOfPeople > 0 && Number.isInteger(numberOfPeople);
}
var module = module || {};
module.exports = {
    validateBillInput,
    validateTipInput,
    validatePeopleInput
};