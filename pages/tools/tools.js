/*function generate(){
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
}*/

var pw_generator = {};

function pw_generator_init(){
    console.log("GO");
    var pw_result = document.getElementById("pw_result");
    pw_generator = {
      type: "password",
      length: 8,
      start: function(){
          if(pw_generator.type == "password"){
            var data = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','"','§','$','%','&','/','(',')','=','?','`','´','#','*','.',',',':'];
          }else{
            var data = ['1','2','3','4','5','6','7','8','9','0'];
          }
          var password = "";
          var passwortLaenge = parseInt(document.getElementById("pw_length_input").value); //später auf Allgemein umbauen
          for(i = 0; i < passwortLaenge; i++){
            min = Math.ceil(0);
            max = Math.floor(data.length);
            var random = Math.floor(Math.random() * (max - min)) + min;
            password = password + data[random];
          }
          document.getElementsByClassName("pw_result_container")[0].style.display = "flex";
          pw_result.innerHTML = password;
        },
      change_ui: function(type){
          if(type == "password"){
            document.getElementById("pw_length_input").value = "8";
            for(i=0;i<document.getElementsByClassName("pw_type").length;i++){
              document.getElementsByClassName("pw_type")[i].innerHTML = "Passwort"
            }
          }else if(type == "pin"){
            document.getElementById("pw_length_input").value = "4";
            for(i=0;i<document.getElementsByClassName("pw_type").length;i++){
              document.getElementsByClassName("pw_type")[i].innerHTML = "Pin"
            }
          }
        }
    };

    document.getElementById("pw_generate_button").addEventListener("click", pw_generator.start);

    for(i=0;i<document.getElementsByClassName("pw_type_container")[0].getElementsByTagName("button").length;i++){
      document.getElementsByClassName("pw_type_container")[0].getElementsByTagName("button")[i].addEventListener("click",(evt)=>{
        pw_generator.type = evt.target.value;
        for(j=0;j<document.getElementsByClassName("pw_type_container")[0].getElementsByTagName("button").length;j++){
          document.getElementsByClassName("pw_type_container")[0].getElementsByTagName("button")[j].classList = "";
        }
        evt.target.classList = "pw_type_button_selected";
        pw_result.innerHTML = "";
        pw_generator.change_ui(pw_generator.type);
      })
    }
}