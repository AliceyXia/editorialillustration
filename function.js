document.getElementById("color-block").onclick = function () {
    changeColor();
  };
  function changeColor() {
    if (
      (document.getElementById("color-block").style.backgroundColor == "rgb(255, 255, 255)")
    ) {
      document.getElementById("color-block").style.backgroundColor = "black";
    } else {
      document.getElementById("color-block").style.backgroundColor = "rgb(255, 255, 255)";
    }
  }
  