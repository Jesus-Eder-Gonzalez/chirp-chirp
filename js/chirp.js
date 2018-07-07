function chirp(n) {
  if (n === 0) {
    return '';
  } else {
    return 'chirp ' + chirp(n - 1);
  }

}

$(document).ready(function () {
  $("#result").html(chirp(3));
});