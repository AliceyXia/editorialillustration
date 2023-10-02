document.getElementById("color-block").onclick = function () {
    changeColor();
  };

  function changeColor() {
    if (
      (document.getElementById("color-block").style.backgroundColor == "black")
    ) {
      document.getElementById("color-block").style.backgroundColor = "rgb(0, 255, 0)";
    } else {
      document.getElementById("color-block").style.backgroundColor = "black";
    }
  }
  