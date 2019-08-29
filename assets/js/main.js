function searchItem() {
  inputText = $("#message").val();
  alert(inputText);
  $("#anotherMessage").val(inputText);
}

function showColor() {
  var selectedColor = $("#color option:selected").text();
  alert($("#color option:selected").text());
}

// function to change the selected color
function changeColor() {
  var selColor = document.getElementById("selColor");
  var color = selColor.value;
  rect.style.backgroundColor = color;
}
