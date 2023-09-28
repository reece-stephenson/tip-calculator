// A tip calculation app

//Temporarilty Putting BE Functions Here
function calculateTotal(billAmount, tipAmount) {
  if (billAmount <= 0 || tipAmount < 0) {
    throw new Error("Invalid Input - Tip must be 0 or greater and bill must be greater than 0");
  }

  const total = Number(billAmount) + Number(tipAmount);
  return total;
}

//Calculate Tip and Validate input
function calculateTip(totalBill, tipPercentage) {
  if (totalBill <= 0 || tipPercentage < 0) {
    throw new Error("Invalid input. Bill must be greater than 0, and tip percentage must be greater than 0.");
  }

  const tipAmount = (totalBill * tipPercentage) / 100;
  return tipAmount.toFixed(2);
}

//Calculate split amount and validate input
function calculateSplitAmount(totalBill, numberOfPeople) {
  if (
    totalBill <= 0 ||
    numberOfPeople <= 0 ||
    !Number.isInteger(numberOfPeople)
  ) {
    throw new Error("Invalid input. Bill must be greater than 0, and number of people must be greater than zero and should be a whole number.");
  }

  const splitAmount = totalBill / numberOfPeople;
  return splitAmount.toFixed(2);
}

var module = module || {};
module.exports = {
  calculateTotal,
  calculateTip,
  calculateSplitAmount,
};
