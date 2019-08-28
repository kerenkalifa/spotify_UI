function searchItem() {
  inputText = $("#message").val();
  alert(inputText);
  $("#anotherMessage").val(inputText);
}

function showColor() {
  var selectedColor=$("#color option:selected").text();
  alert($("#color option:selected").text());
}
