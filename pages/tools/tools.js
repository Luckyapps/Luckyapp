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

function hangman_init(){
  hangman = {
    settings:{
      fails: 5
    },
    guessed: {
      correct: ["adfh"],
      wrong: [],
      all: []
    },
    start: function(){
      hangman.word.input = document.getElementById("hangman_input").value;
      hangman.load();
      console.log(hangman.word.input);
    },
    load: function(reload){
      if(!reload){
        hangman.word.data = [];
      }
      hangman.output.innerHTML = "<div class='hangman_header'>Rate das Wort:</div>";
      hangman.output.innerHTML += "<div class='hangman_fails'>Fehler: "+ hangman.guessed.wrong.length +" von "+ hangman.settings.fails +"</div>"
      var eingabe = hangman.word.input;
      var ausgabe = "";
      for(i=0;i<eingabe.length;i++){
        if(eingabe.substr(i, 1) == " "){
          if(eingabe.substr(i-1, 1) == ","){
          }else{
            ausgabe += "<div style='color: yellow'>|</div>";
          }
        }else if(eingabe.substr(i, 1) == ","){
          ausgabe += "<div style='color:green'>,</div>"
        }else if(eingabe.substr(i, 1).length === 1 && eingabe.substr(i, 1).match(/[a-z | ß | ü | ä | ö]/i)){
          /*if(hangman.guessed.correct.forEach(function(src){if(src == eingabe.substr(i,1)){return true}else{return false};})){
            console.error("part of it");
          }*/
          //console.error(hangman.guessed.correct.length);
          var show = false;
          for(j=0;j<hangman.guessed.correct.length;j++){
            if(hangman.guessed.correct[j] === eingabe.substr(i,1)){
              show = true;
            }
          }
          if(show){
            ausgabe += "<div>"+ eingabe.substr(i,1) +"</div>";
          }else{
            ausgabe += "<div>_</div>";
          }
          
          if(!reload){
            hangman.word.data.push(eingabe.substr(i, 1));
          }
        }else{
          console.log("NOLETTER");
        }
      }
      hangman.output.innerHTML += "<div class='hangman_output'>"+ ausgabe +"</div>";
      var characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      var selection = "";
      characters.forEach(function(src){
        var check = false;
        for(k=0;k<hangman.guessed.all.length;k++){
          if(hangman.guessed.all[k] === src){
            check = true;
          }
        }
        if(!check){
          selection += "<button onclick='hangman.test(this.value)' value='"+ src +"' id='hangman_but_"+ src +"'>"+ src +"</button>";
        }
      })
      hangman.output.innerHTML += "<div>"+ selection +"</div>";
    },
    test: function(letter){
      var end = false;
      hangman.guessed.all.push(letter);
      var check = false;
      hangman.word.data.forEach(function(src){
        var regex = new RegExp(letter, "ig");
        if(src.match(regex)){
          //console.log(src.match(regex));
          src.match(regex).forEach((elem)=>{hangman.guessed.correct.push(elem)});
          check = true;
        }
      });
      if(check){
      }else{
        hangman.guessed.wrong.push(letter);
        //console.log(letter);
      }
      if((hangman.guessed.correct.length - 1) == hangman.word.data.length){
        /*var word_selected = "";
        var word_guess = "";
        for(h=0;h<hangman.word.data.length;h++){
          word_selected += hangman.word.data[h];
        }
        for(g=1;g<hangman.guessed.correct.length;g++){
          word_guess += hangman.guessed.correct[g];
        }
        console.warn(word_guess);
        console.warn(word_selected);*/
        end = true;
        hangman.gewonnen();
        console.warn("WORT ERRATEN: "+ hangman.word.input);
      }else if(hangman.guessed.wrong.length == hangman.settings.fails){
        end = true;
        hangman.verloren();
      }
      if(!end){
        hangman.load(true);
      }
    },
    gewonnen: function(){
      console.error("GEWONNEN");
      hangman.output.innerHTML = "<div class='hm_ergebnis'>"
      +"<div>Du hast gewonnen, das Wort war: <span style='color:green'>"+ hangman.word.input +"</span></div>"
      +"<button onclick='hangman_init()'>Neu starten</button>"
      +"</div>";
    },
    verloren: function(){
      console.error("VERLOREN");
      hangman.output.innerHTML = "<div class='hm_ergebnis'>"
      +"<div>Du hast <span style='color:red'>verloren</span>, das Wort war: <span style='color:green'>"+ hangman.word.input +"</span></div>"
      +"<button onclick='hangman_init()'>Neu starten</button>"
      +"</div>";
    }
  };
  hangman.word = {};
  hangman.container = document.getElementById("hangman");
  hangman.output = hangman.container.getElementsByClassName("tcard")[0];
  hangman.output.innerHTML = 
  "<div class='hangman_header'>Gib ein Wort ein:</div>"
    +"<input type='text' id='hangman_input'></input>"
    +"<button id='hangman_input_submit' onclick='hangman.start()'>Senden</button>";
  //console.log(hangman);
}