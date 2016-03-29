$(document).ready(function() {

var number = parseInt(prompt("Enter a number."));
var factorialNumber = number;

for (var index = number; index > 2; index -= 1) {
  factorialNumber = factorialNumber * (index - 1);
}
document.write(factorialNumber);

});
