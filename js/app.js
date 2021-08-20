//------ generate random pin  -----
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    // console.log("got 3 digit");
    return getPin();
  }
}
// ---- set pin to input box------
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

// ---------- calculator----------
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  const previousNumber = calcInput.value;
  //check input is it number or not isNaN == not number
  if (isNaN(number)) {
    if (number == "C") calcInput.value = "";
  } else {
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

//------ verify pin ----
function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("typed-numbers").value;
  const succes = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typedPin) {
    succes.style.display = "block";
    failError.style.display = "none";
  } else {
    failError.style.display = "block";
    succes.style.display = "none";
  }
}
