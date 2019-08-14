$(document).ready(function() {
  $("#shoutMachine").submit(function(event) {
    var shoutWordInput = $("input#shoutWord").val().toUpperCase();

    $(".shoutWord").text(shoutWordInput);

    $("#shoutResult").show();

    event.preventDefault();
  })
})
