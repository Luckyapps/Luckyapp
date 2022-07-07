var art = "";

/*window.onmessage = function(hoehe){
  hoehe = hoehe.data;
  document.getElementById("HangmanIframe").style.height = hoehe;
};*/

window.addEventListener("message", hangmanheight);

function hangmanheight(hoehe){
  console.log("Höhe von Hangman angepasst");
  hoehe = hoehe.data;
  document.getElementById("HangmanIframe").style.height = hoehe + 40 +"px";
}

function generate(){
  if(art == ""){
    art = "pw";
  }
  if(art == "pw"){
  var data = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','"','§','$','%','&','/','(',')','=','?','`','´','#','*','.',',',':'];
  var passwort = "";
  var passwortLaenge = parseInt(document.getElementById("number").value);
  for(i = 0; i < passwortLaenge; i++){
  min = Math.ceil(0);
  max = Math.floor(data.length);
  var random = Math.floor(Math.random() * (max - min)) + min;
  passwort = passwort + data[random];
  //document.getElementById("passwort").value = passwort;
  document.getElementById("passwort").innerHTML = passwort;
  document.getElementById("passwort").style.display = "inline-block";
  //document.getElementById("passwort").style.width = document.getElementById("passwort").value.length +"em";
  document.getElementById("generate").innerHTML = "neues Passwort generieren"
  document.getElementById("fertig").firstChild.innerHTML = "Dein Passwort lautet:"
  document.getElementById("fertig").style.display = "block";
  }
  }else if(art == "pin"){
    var pindata = ['1','2','3','4','5','6','7','8','9','0'];
    var pin = "";
    var pinlaenge = parseInt(document.getElementById("number").value);
    for(i = 0; i < pinlaenge; i++){
      min = Math.ceil(0);
       max = Math.floor(pindata.length);
       var random = Math.floor(Math.random() * (max - min)) + min;
       pin = pin + pindata[random];
       document.getElementById("passwort").innerHTML = pin;
       document.getElementById("passwort").style.display = "inline-block";
       document.getElementById("generate").innerHTML = "neuen Pin generieren";
       document.getElementById("fertig").firstChild.innerHTML = "Dein Pin lautet:"
       document.getElementById("fertig").style.display = "block";
    }
  }
}


function copyPasskey(){
  document.getElementById("passwort").select();
  document.execCommand('copy');
}

function arten(button){
  document.getElementById("pw").classList.remove("art");
  document.getElementById("pin").classList.remove("art");
  button.classList.add("art");
  art = button.value;
  if(art == "pin"){
    document.getElementById("generate").innerHTML = "Pin generieren";
    document.getElementById("number").value = "4";
  }else if(art == "pw"){
    document.getElementById("generate").innerHTML = "Passwort generieren";
    document.getElementById("number").value = "8";
  }
}

function download(fileUrl, fileName) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", fileName);
  a.click();
}

//download("https://luckyapp2.thebuissnescree.repl.co/tools/Luckyextension", "Luckyextension");