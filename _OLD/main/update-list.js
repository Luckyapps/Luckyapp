var data, list, typ_farbe = "", banner, banner_header, banner_text, update_nummer, banner_close;

function load_info(){
  list = document.getElementById("updatelist");
  var requestURL = "main/update.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  data = request.response;
  update_nummer = data.info.length;
  load_list();
  if(document.getElementById("update_banner")){load_banner();}
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
  document.getElementById("info_text").innerHTML = data.info[info].content +"<hr style='border:1px solid black; width:15%'>Wenn Sie einen Fehler/Bug gefunden haben, schreiben Sie uns gerne unter <a href='mailto:thebuissnescreeper@gmail.com'>thebuissnescreeper@gmail.com</a>."; //Signatur
  document.getElementById("info_").style.display = "block";
}

function info_close(){
  document.getElementById("info_").style.display = "none";
}

function update_banner_open_info(){
  if(banner_close != true){
    info_open(document.getElementById("0"));
    document.getElementById("update_banner").style.display = "none";
  }
}

function load_banner(){
  document.getElementById("update_banner_close").addEventListener("click", function() {
  document.getElementById("update_banner").style.display = "none";
  banner_close = true;
});
  banner = document.getElementById("update_banner");
  banner_header = document.getElementById("update_banner_header");
  banner_text = document.getElementById("update_banner_text");
  if(localStorage.getItem("newupdate")){
    if(localStorage.getItem("newupdate") <= update_nummer){
      banner.style.display = "block";
      if(data.info[0].typ == "UPDATE"){
        banner_header.innerHTML = "Ein neues Update wurde installiert:";
        banner_text.innerHTML = "Das "+ data.info[0].titel +" vom "+ data.info[0].datum +" wurde erfolgreich Installiert.";
      }else if(data.info[0].typ == "INFO"){
        banner_header.innerHTML = "Neue Information:";
        banner_text.innerHTML = data.info[0].titel;
      }else{
        banner_header.innerHTML = data.info[0].typ;
        banner_text.innerHTML = data.info[0].titel;
      }
      localStorage.setItem("newupdate", update_nummer + 1);
    }else{
      banner.style.display = "none";
    }
  }else{
    localStorage.setItem("newupdate", update_nummer);
    load_banner();
  }
}