$(document).ready(function() {

  var forward = prompt("enter anything");

  var check = forward.split('').reverse().join('');
  if (check === forward) {
    alert(true);
  } else {
    alert(false);
  }
});
