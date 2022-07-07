var fastlist, data, ident, count, seite, letzte, anzahl = 0;

function fastlink_start(){

  fastlist = document.getElementById("fastlink_list");
  document.getElementById("head").style.display = "block";
  document.getElementById("nav").style.display = "block";
  document.getElementById("fastback").style.display = "none";
  sessionStorage.clear();
  anzahl = 0;

  var requestURL = "fastlink.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    data = request.response;
    console.warn(data);
    fastlist.innerHTML = "";
    for(i=0; i < data.fastlink.length; i++){
      if(data.fastlink[i].unterseiten){
        fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ i +";' onclick='fast(this)'>"+ data.fastlink[i].name +"➕</li>";
      }else{
        fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ data.fastlink[i].link +"' onclick='link(this)'>"+ data.fastlink[i].name +"</li>";
      }
    }
  }
}

function link(li){
  window.location = li.id;
}

function fast(li){
  document.getElementById("fastback").style.display = "block";
  document.getElementById("head").style.display = "none";
  document.getElementById("nav").style.display = "none";
  for(i=0; i<count;i++){
    sessionStorage.removeItem(i);
    console.log("REMOVE");
  }
  count = 0;
  seite = "";
  ident = li.id;
  console.log(ident);
  ident = String(ident);
  var re = /;/g;
  while (match = re.exec(ident)) {
    console.log(match);
    count++;
    console.log("count:"+ count);
    sessionStorage.setItem("nummer:"+ count, match.index);
  }

  //count = count - 1;

  for(i=0; i < count; i++){
    console.warn("Wert von i: "+ i);
    if(i == 0){
      //sessionStorage.setItem(1, ident.substr(i, sessionStorage.getItem(i+1)));
      letzte = sessionStorage.getItem("nummer:"+ (i + 1));
      console.log("letzte: "+ letzte);
      seite = data.fastlink[ident.substr(0, sessionStorage.getItem("nummer:1"))].seiten;
      sessionStorage.setItem(anzahl, ident.substr(0, sessionStorage.getItem("nummer:1")));
      anzahl++;
      console.log(anzahl);
      sessionStorage.setItem("anzahl", anzahl);
      console.warn("count = 0: ");
      console.warn(seite);
    }else{
      console.log(seite);
      sessionStorage.setItem("anzahl", anzahl);
      sessionStorage.setItem(anzahl, ident.substr(parseInt(letzte) + 1, 1));
      seite = seite[ident.substr(parseInt(letzte) + 1, 1)].seiten;
      letzte = sessionStorage.getItem("nummer:"+ (i + 1));
      console.log("letzte: "+ letzte);
      console.warn("count > 0: ");
      console.warn(seite);
      //letzte = sessionStorage.getItem("nummer:"+ );
    }
  }

  //seite = data.fastlink[sessionStorage.getItem("1")].seiten;
  //console.log(seite);
  fastlist.innerHTML = "";
  for(i=0; i < seite.length; i++){
    if(seite[i].unterseiten){
      fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ ident +""+ i +";' onclick='fast(this)'>"+ seite[i].name +"➕</li>";
    }else{
      fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ seite[i].link +"' onclick='link(this)'>"+ seite[i].name +"</li>";
    }
  }
}

function back(back){
  console.log("back");
  if(sessionStorage.getItem("anzahl") - 1 == 0){
    console.log("Erste seite");
    document.getElementById("fastback").style.display = "none";
    fastlink_start();
    /*seite = data.fastlink;*/
  }else{
  for(i=0; i < sessionStorage.getItem("anzahl") - 1;i++){
    if(i == 0){
      console.log(sessionStorage.getItem(i + 1));
      seite = data.fastlink[sessionStorage.getItem(i + 1)].seiten;
      ident = sessionStorage.getItem(i + 1) +";";
      sessionStorage.setItem("anzahl", sessionStorage.getItem("anzahl") - 1);
      anzahl = anzahl -1;
    }else{
      console.log(sessionStorage.getItem(i + 1));
      seite = seite[sessionStorage.getItem(i + 1)].seiten;
      ident = ident + sessionStorage.getItem(i + 1) +";";
      sessionStorage.setItem("anzahl", sessionStorage.getItem("anzahl") - 1);
      anzahl = anzahl -1;
    }
  }
  

    fastlist.innerHTML = "";
  for(i=0; i < seite.length; i++){
    if(seite[i].unterseiten){
      fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ ident +""+ i +";' onclick='fast(this)'>"+ seite[i].name +"➕</li>";
    }else{
      fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ seite[i].link +"' onclick='link(this)'>"+ seite[i].name +"</li>";
    }
  }}
}