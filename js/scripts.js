$(document).ready(function(){



var countToNumber = parseInt(prompt("Enter a number to count to."));
var countByNumber = parseInt(prompt("Enter a smaller number to count by."));
var array = [];

  if (isNaN(countToNumber) || isNaN(countByNumber) || countByNumber < 0 || countToNumber < 0 || countByNumber > countToNumber) {
    alert("invalid entry");
  }

  else {
    for (var index = 0; index < countToNumber; index += countByNumber) {
      array.push(index);
    }
  }

  $("h2").text(array);
});
