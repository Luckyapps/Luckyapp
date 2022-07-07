function exp() {
  var maus = "maus";
  document.getElementById("frame").src = "https://www.wdr"+maus+".de/" ;
}

function search() {
  var search = document.getElementById("search").value;
  document.getElementById("t").innerHTML = search;
  document.getElementById("frame").src = "https://www."+search;
}
