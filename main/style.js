var buttons, b, event;

window.onload = function() {
  buttons = document.getElementsByTagName("button");
  for(i=0;i<buttons.length;i++){
    b = i;
    buttons[i].addEventListener("mousedown", mousedown);
    buttons[i].addEventListener("mouseup", mouseup);
  }
}

function mousedown(evt){
  evt.srcElement.style.backgroundColor = "lightgray";
}

function mouseup(evt){
  event = evt;
  if(evt.srcElement.id == "pin"){
    document.getElementById("pw").style.backgroundColor = "gray";
  }else if(evt.srcElement.id == "pw"){
    document.getElementById("pin").style.backgroundColor = "gray";
  }else if(evt.srcElement.classList[0] == "but7" || evt.srcElement.classList[0] == "but0" || evt.srcElement.classList[0] == "butp"){
    for(i=0; i<11;i++){
      if(document.getElementsByClassName("butp")[i]){
        document.getElementsByClassName("butp")[i].style.backgroundColor = "#999999";
      }
      if(document.getElementsByClassName("but7")[i]){
        document.getElementsByClassName("but7")[i].style.backgroundColor = "#999999";
      }
      document.getElementsByClassName("but0")[0].style.backgroundColor = "#999999";
    }
  }else{
    evt.srcElement.style.backgroundColor = "gray";
  }
}