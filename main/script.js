/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
    // Registrierung erfolgreich
    console.log('Registrierung erfolgreich. Scope ist ' + reg.scope);
  }).catch(function(error) {
    // Registrierung fehlgeschlagen
    console.log('Registrierung fehlgeschlagen mit ' + error);
  });
};*/


if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').then(function(registration){registration.update()})};

function update(){
  caches.delete('v1');
      info();
      caches.open('v1').then(function(cache) {
      return cache.addAll([
        //FILES: 
        `/`,
        `/index.html`,
        `/manifest.json`,
        `/sw.js`,

        //MAIN:
        `/main/style.css`,
        `/main/script.js`,
        `/images/icons/icon-144x144.png`
      ]);
    });
}

function lastsite(){
  window.location = document.referrer;
}

function info(){
  document.getElementById("update").innerHTML = "Download startet, Bitte minedestens 1 Minute lang nicht die Seite verlassen!!";
  setTimeout(function(){ 
    document.getElementById("update").innerHTML = "Update Fertig(bei schnellem Internet)"; 
    }, 60000);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function load_Luckyapp_script(){
  load_info();
}

/*function info_open(element){      --------------------OLD UPDATE LIST---------------------------------
  console.log(element.id);
  var info = element.id;
  var requestURL = "main/update.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  data = request.response;
  document.getElementById("info_header").innerHTML = data[info][0].header;
  document.getElementById("info_text").innerHTML = data[info][0].content;
  document.getElementById("info_").style.display = "block";
  }
}

function info_close(){
  document.getElementById("info_").style.display = "none";
}*/

//                             ---------------------------NEW UPDATE LIST----------------------------------------
/*var data, list, typ_farbe = "";

function load_info(){
  list = document.getElementById("updatelist");
  var requestURL = "main/update.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  data = request.response;
  load_list();
  }  
}

function load_list(){
  for(i=0; i < data.info.length; i++){
    if(data.info[i].typ == "UPDATE"){
      typ_farbe = "green";
    }else if(data.info[i].typ == "INFO"){
      typ_farbe = "yellow";
    }else if(data.info[i].typ == "WARNUNG"){
      typ_farbe = "red";
    }else{
      typ_farbe = "gray";
    }
    list.innerHTML = list.innerHTML +"<li onclick='info_open(this)' id='"+ i +"'><h3><font color='"+ typ_farbe +"'>"+ data.info[i].typ +" </font>("+ data.info[i].datum +") <u> "+ data.info[i].titel +"</u></h3></li>";
  }
}

function info_open(element){
  var info = element.id;

  document.getElementById("info_header").innerHTML = data.info[info].header;
  document.getElementById("info_text").innerHTML = data.info[info].content +"Wenn Sie einen Fehler/Bug gefunden haben, schreiben Sie uns gerne unter <a href='mailto:thebuissnescreeper@gmail.com'>thebuissnescreeper@gmail.com</a>."; //Signatur
  document.getElementById("info_").style.display = "block";
}

function info_close(){
  document.getElementById("info_").style.display = "none";
}*/