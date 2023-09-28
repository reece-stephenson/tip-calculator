const amountInput = document.getElementById("amount");
const percentageInput = document.getElementById("percentage");
const peopleInput = document.getElementById("people");
const tipOutput = document.getElementById("tip");
const totalOutput = document.getElementById("total");
const splitOutput = document.getElementById("split");
const errorMessage = document.getElementById("errorMessage");

amountInput.addEventListener("input", updateOutputs);
percentageInput.addEventListener("input", updateOutputs);
peopleInput.addEventListener("input", updateOutputs);

function updateOutputs() {
  const amount = parseFloat(amountInput.value);
  const percentage = parseFloat(percentageInput.value);
  const people = parseInt(peopleInput.value);

  if (!validateBillInput(amount)) {
    errorMessage.innerText = "Please insert a valid bill amount.";
    resetOutput();
  } else if (!validateTipInput(percentage)) {
    errorMessage.innerText = "Please insert a valid tip percentage.";
    resetOutput();
  } else if (!validatePeopleInput(people)) {
    console.log("PEOPLE INPUT: ", people);
    errorMessage.innerText = "Please insert a valid number of people.";
    resetOutput();
  } else {
    try {
      const tip = calculateTip(amount, percentage);
      const total = calculateTotal(amount, tip);
      const split = total / people;

      tipOutput.textContent = `R${tip}`;
      totalOutput.textContent = `R${total}`;
      splitOutput.textContent = `R${split.toFixed(2)}`;
      resetErrorMessage();
    } catch (e) {
      errorMessage.innerText = e;
      resetOutput();
    }
  }
}

function resetOutput() {
  tipOutput.textContent = "";
  totalOutput.textContent = "";
  splitOutput.textContent = "";
}

function resetErrorMessage() {
  errorMessage.textContent = "";
}
