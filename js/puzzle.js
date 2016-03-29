$(document).ready(function() {

  $("#userInput form").submit(function(event) {
    var inputSentence = $("#sentence").val();
    var array = [];
    var puzzleArray = [];
    array = inputSentence.split("");

    for (var index = 0; index < array.length; index += 1) {
      if (array[index].toUpperCase() === "A" || array[index].toUpperCase() === "E" || array[index].toUpperCase() === "I" || array[index].toUpperCase() === "O" || array[index].toUpperCase() === "U") {
        puzzleArray.push("-");
      }
      else {
        puzzleArray.push(array[index]);
      }
    }
    document.getElementById('formId').reset();
    var outputSentence = puzzleArray.join('');
    $("#output2").text(outputSentence);
    // document.write(outputSentence);
    event.preventDefault();
  });
});
