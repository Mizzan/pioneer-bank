// login area hide
const loginButton = document.getElementById("login");

loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// deposit and withdraw button
const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", function (event) {
  const depositNumber = getInputNumber("depositAmount");

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  //   const currentDeposit = document.getElementById("currentDeposit").innerText;
  //   const currentDepositNumber = parseFloat(currentDeposit);
  //   const totalDeposit = depositNumber + currentDepositNumber;
  //   document.getElementById("currentDeposit").innerText = totalDeposit;

  document.getElementById("depositAmount").value = "";
});

// withdraw button
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  console.log(withdrawNumber);
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
