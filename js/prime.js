$(document).ready(function() {

  var inputNumber = parseInt(prompt("enter a number"));
  var numbers = [];

  for (var index = 2; index <= inputNumber; index += 1) {
    numbers.push(index);
  }

  for (var index = 2; index <= inputNumber; index +=1) {
    numbers.forEach(function(number) {
      if (number % index === 0 && number / index != 1) {
        numbers.splice(numbers.indexOf(number), 1);
      }
    });
  }
alert(numbers);

});
