var data, list, typ_farbe = "pink";

function load_info(){
  list = document.getElementById("updatelist");
  var requestURL = "update.json";
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
    console.log(data.info[i]);
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
  console.log(element.id);
  var info = element.id;

  document.getElementById("info_header").innerHTML = data.info[info].header;
  document.getElementById("info_text").innerHTML = data.info[info].content +"Wenn Sie einen Fehler/Bug gefunden haben, schreiben Sie uns gerne unter <a href='mailto:thebuissnescreeper@gmail.com'>thebuissnescreeper@gmail.com</a>."; //Signatur
  document.getElementById("info_").style.display = "block";
}

function info_close(){
  document.getElementById("info_").style.display = "none";
}