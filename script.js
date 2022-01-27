var btn = document.getElementById('button'); //start button
var result = document.getElementById('result'); //result text
var percentage;
var amount;
var tipAmount;

btn.addEventListener("click", function() {
percentage = prompt("How much % of the total amount would you like to tip? ");
amount = prompt("What is your total amount? ");
calculateTip();
});

function calculateTip() {
tipAmount = amount * percentage / 100;
result.innerHTML = "Your tip amount is: " + tipAmount;
}