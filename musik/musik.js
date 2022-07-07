window.addEventListener("scroll", function(){
  if(pageYOffset > 210){
    console.warn("GOOOOOOOOOOOOOO");
    document.getElementById("moving_bar").classList.remove("moving_bar_close");
    document.getElementById("moving_bar").classList.add("moving_bar_open");
    document.getElementById("moving_bar").style.display = "unset";
  }else if(pageYOffset < 210){
    document.getElementById("moving_bar").classList.replace("moving_bar_open", "moving_bar_close");
  }
});

function exp() {
  var maus = "maus";
  document.getElementById("frame").src = "https://www.wdr" + maus + ".de/";
}

function search() {
  var search = document.getElementById("search").value;
  document.getElementById("t").innerHTML = search;
  document.getElementById("frame").src = "https://www." + search;
}

