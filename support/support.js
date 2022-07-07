function eingabe(){
  var name = document.getElementById("name").value;
  var passwort = document.getElementById("passwort").value;
  var ausgabe = document.getElementById("response");
  if(name == "ttt"){
    if(passwort == "ttt"){
      ausgabe.innerHTML ="<font color='Green'>Zugang gewährt</font>";
      window.location = "test/test.html";
    }else{
      ausgabe.innerHTML ="<font color='red'>Passwort falsch</font>"
    }
  }else{
    ausgabe.innerHTML = "<font color='red'>Benutzername Falsch</font>"
  }
}