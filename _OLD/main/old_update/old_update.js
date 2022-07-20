/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
    // Registrierung erfolgreich
    console.log('Registrierung erfolgreich. Scope ist ' + reg.scope);
  }).catch(function(error) {
    // Registrierung fehlgeschlagen
    console.log('Registrierung fehlgeschlagen mit ' + error);
  });
};*/

function lastsite(){
  window.location = document.referrer;
}

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

function info(){
  document.getElementById("update").innerHTML = "Download startet, Bitte minedestens 1 Minute lang nicht die Seite verlassen!!";
  setTimeout(function(){ 
    document.getElementById("update").innerHTML = "Update Fertig(bei schnellem Internet)"; 
    }, 60000);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function /*info_open*/old_info_open(element){
  console.log(element.id);
  var info = element.id;
  var requestURL = "old_update.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  data_old = request.response;
  document.getElementById("info_header").innerHTML = data_old[info][0].header;
  document.getElementById("info_text").innerHTML = data_old[info][0].content;
  document.getElementById("info_").style.display = "block";
  }
}

function info_close(){
  document.getElementById("info_").style.display = "none";
}