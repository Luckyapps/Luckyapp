var eingabe, ausgabe, anzahl = 0, ausgabe_liste, id = "", temp_data;

document.addEventListener("keydown", function(evt){if(evt.key == "Enter"){start_suche();}});

function start_suche(){
  eingabe = document.getElementById("eingabe");
  ausgabe = document.getElementById("ausgabe");
  ausgabe_liste = document.getElementById("ausgabe_liste");
  anzahl = 0;

  var requestURL = "../../fastlink/fastlink.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    data_temp = request.response;
    console.log(data_temp);
    ausgabe_liste.innerHTML = "";
    //ausgabe.innerHTML = eingabe.value +" wird gesucht";

    /*for(i=0; i < data.fastlink.length; i++){
      if(data.fastlink[i].name == eingabe.value){
        ausgabe.innerHTML = "RIESEN ERFOLG!!!";
        return;
      }else{
        //if unterseite fehlt
        for(j=0; j < data.fastlink[i].seiten.length; j++){
          if(data.fastlink[i].seiten[j] == eingabe.value){
            ausgabe.innerHTML = "RIESEN ERFOLG!!!";
            return;
          }
        }
      }
    }*/
/*-----------------------------------------------------------------------
    for(i=0; i < data.fastlink.length; i++){
      if(data.fastlink[i].name == eingabe.value){
        ausgabe.innerHTML = "RIESEN ERFOLG!!!";
        return;
      }else if(data.fastlink[i].unterseite == "true"){
        for(j=0; j < data.fastlink[i].seiten[j] == eingabe.value; j++){
          ausgabe.innHTML = "ERFOLG!!!";
          return;
        }
      }
    }
  }
}

function suche(i, j, data){
  if()
}*/

    for(i=0; i<data_temp.fastlink.length; i++){
      if(data_temp.fastlink[i].name == eingabe.value){
        anzahl++;
        console.log(data_temp.fastlink[i]);
        ausgabe.innerHTML = eingabe.value +" wurde "+ anzahl +" mal gefunden.";
        ausgabe_liste.innerHTML = ausgabe_liste.innerHTML +"<li>"+ data_temp.fastlink[i].name +" "+ data_temp.fastlink[i].link +"</li>";
      }else if(data_temp.fastlink[i].unterseiten == true){
        console.log("i: "+i);
        suche(data_temp.fastlink[i], i);
      }else{}
    }
  }
}

function suche(data, i){
  id = id + i+";";
  for(j=0; j<data.seiten.length; j++){
    console.log("j: "+j);
    console.log(data.seiten[j].name == eingabe.value);
    if(data.seiten[j].name == eingabe.value){
      console.log("ERGEBNIS TRUE");
      id = id + j+";";
      anzahl++;
      console.log(data.seiten[j]);
      ausgabe.innerHTML = eingabe.value +" wurde "+ anzahl +" mal gefunden.";
      if(data.seiten[j].link){
        ausgabe_liste.innerHTML = ausgabe_liste.innerHTML +"<li>"+ data.seiten[j].name +" <a href='"+ data.seiten[j].link +"'>"+ data.seiten[j].link +"</a> "+ id +" </li>";
      }else{
        ausgabe_liste.innerHTML = ausgabe_liste.innerHTML +"<li>"+ data.seiten[j].name +" "+ id +"</li>";
      }
    }else if(data.seiten[j].unterseiten == true){
      suche(data.seiten[j], j);
    }else{id = "";}
  }
}