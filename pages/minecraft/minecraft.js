var data, online, hostname, motd, version, icon, mods, modinfo, serverdata, beschreibung;

function laden(){
  online = document.getElementById("online"); //Variablen festlegen
  hostname = document.getElementById("ip");
  motd = document.getElementById("motd");
  version = document.getElementById("version");
  icon = document.getElementById("icon");
  mods = document.getElementById("mods");
  modinfo = document.getElementById("modinfo");
  beschreibung = document.getElementById("beschreibung");

  var requestURL = "https://api.mcsrvstat.us/2/luckyapps.serveminecraft.net"; //Url
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    data = request.response;
    console.log(data);
    if(data.online == true){ //Server online
      icon.style.display = "block";
      hostname.style.display = "block";
      version.style.display = "block";
      modinfo.style.display = "block";
      motd.style.display = "block";
      beschreibung.style.display = "block";
      online.innerHTML = "Status: <font color='green'>Online</font>";
      icon.src = data.icon;
      hostname.innerHTML = "Hostname: <font color='purple'>"+ data.hostname +"</font>";
      motd.innerHTML = data.motd.html[0];
      version.innerHTML = "Version: <font color='yellow'>"+ data.version +"</font>";
      lade_beschreibung();
      if(data.mods != undefined){ //Modabfrage
        modinfo.innerHTML = "Der Server hat "+ data.mods.names.length +" mods:";
        for(i=0; i<data.mods.names.length; i++){
          mods.innerHTML = mods.innerHTML +"<li>"+ data.mods.names[i] +"</li>";
        }
      }else{ //keine Mods
        modinfo.innerHTML = "Vanilla Server";
      }
      
    }else{ //Server offline
      online.innerHTML = "Status: <font color='red'>Offline</font>";;
      icon.style.display = "none";
      hostname.style.display = "none";
      version.style.display = "none";
      modinfo.style.display = "none";
      motd.style.display = "none";
      mods.style.display = "none";
      beschreibung.style.display = "none";
    }
  }
}

function lade_beschreibung(){
    beschreibung.innerHTML = "";
    return;
  var requestURL = "server.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    serverdata = request.response;
    for(i=0; i<serverdata.server.length; i++){
      if(data.motd.html[0] == serverdata.server[i].motd){
        beschreibung.innerHTML = "Beschreibung: <font color='blue'>"+ serverdata.server[i].beschreibung +"</font>";
      }else{}
    }
  }
}