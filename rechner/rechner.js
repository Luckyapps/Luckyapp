var myFunction;

 speicherD1 = "";

 neun = 9;

 acht = 8;

 sieben = 7;

 speicherE2 = 0;

 sechs = 6;

 fünf = 5;

 vier = 4;

 drei = 3;

 zwei = 2;

 eins = 1;

 zero = 0;

 ergebnis = 0;

 zeichen = 0;
 
 ans = ergebnis;
 
 ansauto = 0;

 taste = 0;

 elem = 0;

eing = "";

speicher = ""; 

bv = "";

op = "";

kv = "";

bvi = "";

eing2 ="";

 t1 = "";
 t2 = "";
 t3 = "";
 t4 = "";
 t5 = "";
 Erg = "";

z = "";

 k = "";

 g = "";

 i = 0;

 it1 = 0;
 
//var test = document.getElementById('Seite')

 /*test.*/document.addEventListener("keydown", testen);

function testen(evt){
  eing2 = evt.key;
  kv = "1";
  evt.key = "";
  rechner();
}

function rechner(){
 
 //document.getElementById("rtest1").innerHTML = eing2;
 //document.getElementById("rtest2").innerHTML =  +"k";
 
  if(kv== "2"){
    kv = "";
    eing = bv;
    bv = "";
  }else if(kv == "1"){
    kv = "";
    eing = eing2;
    eing2 = "";
  }else{}
  
  if(eing == "Enter"){
    if(op == 1){
      i = localStorage.getItem("i");
      i++;
      it1 = localStorage.getItem("it1");
      it1 = "it1:" + i;
      localStorage.setItem(it1, t1);
      localStorage.setItem("it1", i);
      eing = "";
      Erg = Math.pow(t3, t4)
     document.getElementById("erg").innerHTML = Erg;
     t1 = Erg;
     t4 = "";
     speicher = Erg;
     Erg = "";
     op = "";
     localStorage.setItem(i, speicher);
     localStorage.setItem("i", i);
    }else if(op == 2){
      if(t5 == ""){
        t5 = 2; 
      }
      i = localStorage.getItem("i");
      i++;
      it1 = localStorage.getItem("it1");
      it1 = "it1:" + i;
      localStorage.setItem(it1, t1);
      localStorage.setItem("it1", i);
      eing = "";
      //document.getElementById("rtest2").innerHTML = t5 +"=t5";
      //document.getElementById("rtest3").innerHTML = t4 +"=t4";
     Erg = Math.pow(t4, 1/t5)
     document.getElementById("erg").innerHTML = Erg;
     t1 = Erg;
     t4 = "";
     t5 = "";
     speicher = Erg;
     Erg = "";
     op = "";
     localStorage.setItem(i, speicher);
     localStorage.setItem("i", i);
    }else{
     i = localStorage.getItem("i");
     i++;
     it1 = localStorage.getItem("it1");
      it1 = "it1:" + i;
      localStorage.setItem(it1, t1);
      localStorage.setItem("it1", i);
     eing = "";
     Erg = eval(t1)
     document.getElementById("erg").innerHTML = Erg;
     t1 = Erg;
     t2 = "";
     t4 = "";
     speicher = Erg;
     Erg = "";
     localStorage.setItem(i, speicher);
     localStorage.setItem("i", i);
     }
  }else if(eing == ","){
    t1 = t1 +""+ ".";
    t4 = t1;
    document.getElementById("zwi").innerHTML = t1;
  }else if(eing == "Delete"){
    t1 = "";
    t2 = "";
    t4 = "";
    t3 = "";
    t5 = "";
    Erg = "";
    document.getElementById("erg").innerHTML = "Ergebnis";
    document.getElementById("zwi").innerHTML = "";
  }else if(eing == "Insert"){
    t1 = t1 +""+ speicher;
    t4 = speicher;
    document.getElementById("zwi").innerHTML = t1;
  }else if(eing == "h"){
    op = "1";
    t3 = t1;    
    t1 = t3 +""+ " hoch ";
    t4 = "";
    document.getElementById("zwi").innerHTML = t1;
    eing = "";
    //document.getElementById("rtest3").innerHTML = t2;
  }else if(eing == "w"){
    op = "2";
    t5 = t1;    
    t1 = t5 +""+ " wurzel aus ";
    t4 = "";
    document.getElementById("zwi").innerHTML = t1;
    eing = "";
   // document.getElementById("rtest3").innerHTML = t2;
  }else if((eing > -10000000000000000000000000000)||(eing == "+")||(eing == "-")||(eing == "*")||(eing == "/")){
    t1 = t1 +""+ eing;
    t4 = t4 + ""+ eing;
    eing = "";
    document.getElementById("zwi").innerHTML = t1;
    document.getElementById("_rechner").scrollIntoView({block: "start", behavior: "smooth"});//------------------SCROLL----------------------
    //document.getElementById("erg").innerHTML = "";
  }else{}
} 

function click_(butval){
  bv = butval.value; 
  //document.getElementById("rtest1").innerHTML = bv+ "h";
  kv = "2";
  rechner();
}

function list(){
  var valtest = localStorage.getItem("1");
  if(valtest >= 1){
      document.getElementById("geterg").innerHTML = "Liste neu laden";
      document.getElementById("delerg").style.display = "inline-block";
    // it1 löschen?
    //var h = localStorage.getItem("it1");
    //h = parseInt(h);
    //h = h + 1;
    g = localStorage.getItem("i");
    g = parseInt(g);
    g = g + 1;
    for (i = 1; i < g; i++) {
      var h1 = "it1:" + i;
      var t = z +'<li><button onclick="insert_val(this)" value="'+ localStorage.getItem(i) +'">'+ localStorage.getItem(h1) +" = "+ localStorage.getItem(i) +'</button></li>';
      z = t;
      document.getElementById("listing").innerHTML = "<h3>Vorherige Ergebnisse:</h3><ul>"+ z +"</ul>";
} z = ""; g = ""; h = ""; h1 = "";
    } 
}

function insert_val(b){
  eing2 = b.value;
  kv = "1";
  rechner();
}

function list_del(){
  document.getElementById("geterg").innerHTML = "letzte Ergebnisse";
  document.getElementById("delerg").style.display = "none";
  var newupdate = localStorage.getItem("newupdate");
  localStorage.clear();
  localStorage.setItem("newupdate", newupdate);
  document.getElementById("listing").innerHTML = "Daten gelöscht";
  window.setTimeout(function del(){
    document.getElementById("listing").innerHTML = "";
  }, 5000)  
}