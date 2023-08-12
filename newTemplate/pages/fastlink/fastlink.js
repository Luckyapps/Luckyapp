var fastlist, fasttitle, data, ident, count, seite, letzte, anzahl = 0, letzte2, ident2, titel = "", scroll = "no", firstscroll = "yes", scrollcount = 0;

//window.addEventListener("load", start_);

function start_(){
  var requestURL = "https://luckyapps.github.io/Luckyapp/pages/fastlink/fastlink.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    data = request.response;
    fastlink_start();
  }
}

function fastlink_start(){
  fastlist = document.getElementById("fastlink_list");
  fasttitle = document.getElementById("fasttitle");
  if(luckyapp_core.page_config.modules.header.active){
    document.getElementsByClassName("header_title")[0].classList.remove("invisible");
  }
  if(luckyapp_core.page_config.modules.navbar.active){
    document.getElementsByClassName("header_navbar")[0].classList.remove("invisible");
  }
  if(luckyapp_core.page_config.modules.footer.active){
    document.getElementsByClassName("footer")[0].classList.remove("invisible");
  }
  //document.getElementById("head").style.display = "block";
  //document.getElementById("nav").style.display = "block";
  document.getElementById("fastback").style.display = "none";
  //fasttitle.innerHTML = "Fastlink";
  document.getElementById("fasttitle").innerHTML = "Fastlink";
  fastlist.innerHTML = "";
  sessionStorage.clear();
  anzahl = 0;

    fastlist.innerHTML = "";
    for(i=0; i < data.fastlink.length; i++){
      if(data.fastlink[i].unterseiten){
        fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ i +";' onclick='fast(this)'>"+ data.fastlink[i].name +"➕</li>";
      }else{
        fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ data.fastlink[i].link +"' onclick='link(this)'>"+ data.fastlink[i].name +"</li>";
      }
    }
    if(scroll == "yes"){
      fasttitle.scrollIntoView({block:"start", behavior:"smooth"});
      scrollcount++;
      if(scrollcount > 1){
        firstscroll = "no";
        fasttitle.scrollIntoView({block:"start"});
      }
    }else{} 
}

function link(li){
  window.location = li.id;
}

function fast(li){
  document.getElementById("fastback").style.display = "block";
  if(luckyapp_core.page_config.modules.header.active){
    document.getElementsByClassName("header_title")[0].classList.add("invisible");
  }
  if(luckyapp_core.page_config.modules.navbar.active){
    document.getElementsByClassName("header_navbar")[0].classList.add("invisible");
  }
  if(luckyapp_core.page_config.modules.footer.active){
    document.getElementsByClassName("footer")[0].classList.add("invisible");
  }
  scroll = "yes";
  for(i=0; i<count;i++){
    sessionStorage.removeItem(i);
  }
  count = 0;
  seite = "";
  ident = li.id;

  ident = String(ident);
  var re = /;/g;
  while (match = re.exec(ident)) {
    count++;
    sessionStorage.setItem("nummer:"+ count, match.index);
  }

  for(i=0; i < count; i++){
    if(i == 0){
      letzte = sessionStorage.getItem("nummer:"+ (i + 1));
      seite = data.fastlink[ident.substr(0, sessionStorage.getItem("nummer:1"))].seiten;
      titel = data.fastlink[ident.substr(0, sessionStorage.getItem("nummer:1"))].name;
      document.getElementById("fasttitle").innerHTML = titel;
      sessionStorage.setItem(1, ident.substr(0, sessionStorage.getItem("nummer:1")));
      anzahl++;
      sessionStorage.setItem("anzahl", anzahl);
    }else{
      sessionStorage.setItem(i + 1, ident.substr(parseInt(letzte) + 1, 1));
      titel = titel +" > "+ seite[ident.substr(parseInt(letzte) + 1, 1)].name;
      document.getElementById("fasttitle").innerHTML = titel;
      seite = seite[ident.substr(parseInt(letzte) + 1, 1)].seiten;
      letzte = sessionStorage.getItem("nummer:"+ (i + 1));
    }
  }

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
  ident2 = ident;
  if(sessionStorage.getItem("anzahl") - 1 == 0){
    document.getElementById("fastback").style.display = "none";
    fastlink_start();
  }else{
  for(i=0; i <= sessionStorage.getItem("anzahl")-1;i++){
    if(i == 0){
      letzte2 = sessionStorage.getItem("nummer:"+ (i + 1));
      seite = data.fastlink[ident2.substr(0, sessionStorage.getItem("nummer:1"))].seiten;
      titel = data.fastlink[ident2.substr(0, sessionStorage.getItem("nummer:1"))].name;
      document.getElementById("fasttitle").innerHTML = titel;
      ident = sessionStorage.getItem("1") +";";
      sessionStorage.setItem("anzahl", sessionStorage.getItem("anzahl") - 1);
      anzahl = anzahl - 1;
    }else{
      titel = titel +" > "+ seite[ident2.substr(parseInt(letzte2) + 1, 1)].name;
      document.getElementById("fasttitle").innerHTML = titel;
      seite = seite[ident2.substr(parseInt(letzte2) + 1, 1)].seiten;
      letzte2 = sessionStorage.getItem("nummer:"+ (i + 1));
      ident = ident + sessionStorage.getItem(i + 1) +";";
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