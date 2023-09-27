// A tip calculation app

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

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