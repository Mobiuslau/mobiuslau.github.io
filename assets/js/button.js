function buttonFunc(divId, buttonOff, buttonOn) {
  var x = document.getElementById(divId);
  var y = document.getElementById(buttonOff);
  var z = document.getElementById(buttonOn);
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none"
    z.style.display = "block"
  } else {
    x.style.display = "none";
    y.style.display = "block"
    z.style.display = "none"
  }
}