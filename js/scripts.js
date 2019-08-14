// back-end
// front-end
$(document).ready(function(){
  $("#form1").submit(function(event){
    var nameInput = $("input#name").val();
    var cityInput = $("input#city").val();

    $(".name").text(nameInput);
    $(".city").text(cityInput);

    $("#profile").show();

    event.preventDefault();
  });
});
