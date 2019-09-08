function searchItem() {
  // inputText = $("#message").val();
  // // alert(inputText);
  // $("#anotherMessage").val(inputText);
  $.ajax({
    type: "GET",
    url: "https://reststop.randomhouse.com/resources/works/19312",
    dataType: "xml",
    success: function(xml) {
      $(xml).find("result").each(function () {
        $("table tbody").append("<tr>");
        $("table tbody").append("<td>" + $(this).find("Authorweb").text() + "</td>");
        $("table tbody").append("<td>" + $(this).find("Onsaledate").text() + "</td>");
        $("table tbody").append("<td>" + $(this).find("Workid").text() + "</td>");
        $("table tbody").append("<td>" + $(this).find("Titleshort").text() + "</td>");
        $("table tbody").append("</tr>"); 
      });
    }
  });
  
}

// function showColor() {
//   var selectedColor = $("#color option:selected").text();
//   alert($("#color option:selected").text());
// }

// function to change the selected color
// function changeColor() {
//   var selColor = document.getElementById("selColor");
//   var color = selColor.value;
//   rect.style.backgroundColor = color;
// }

// $.ajax({
//   type: "GET",
//   url: "https://reststop.randomhouse.com/resources/works/19312",
//   dataType: "xml",
//   success: function(xml) {
//     $(xml).find("result").each(function () {
//       $("table tbody").append("<tr>");
//       $("table tbody").append("<td>" + $(this).find("Authorweb").text() + "</td>");
//       $("table tbody").append("<td>" + $(this).find("Onsaledate").text() + "</td>");
//       $("table tbody").append("<td>" + $(this).find("Workid").text() + "</td>");
//       $("table tbody").append("<td>" + $(this).find("Titleshort").text() + "</td>");
//       $("table tbody").append("</tr>"); 
//       console.log('result');
//     });
//   }
// });
