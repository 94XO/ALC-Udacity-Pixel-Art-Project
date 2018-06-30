// Select color input
// Select size input
//Providing variables for gridHeight, gridWidth & color picker
    var gridHeight, gridWidth, color;
// When size is submitted by the user, call makeGrid()
    $("#sizePicker").submit(function(event){
        event.preventDefault();
        gridHeight = $("#inputHeight").val();
        gridWidth =  $("#inputWeight").val();
        makeGrid(gridHeight, gridWidth);

    })


    function makeGrid(n, m) {

// Your code goes here!
    for (var i = 1; i <= n; i++) {
      $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
      for (var j = 1; j <= m; j++) {
        $("#table" + i).append("<td></td>");
      }
    }

    // add color to pixel Art
    $("td").click(function addColorPicker(){
      color = $("#colorPicker").val();

      if ($(this).attr("style")) {
        $(this).removeAttr("style")
      } else {
        $(this).attr("style", "background-color:" + color);
      }
    })
    }
