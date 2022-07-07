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

op = "";

 t1 = "";
 t2 = "";
 t3 = "";
 Erg = "";
var test = document.getElementById('Seite')

 test.addEventListener("keydown", rechner);

function rechner(evt){
 // document.getElementById("test").innerHTML = evt.key;
  eing = evt.key;

  if(eing == "+"){
    op  = "+";
    //document.getElementById("test2").innerHTML = t1 +""+ op;
    document.getElementById("zwi").innerHTML = t1 +""+ op;
    t2 = t1;
    t1 = "";

  }else if(eing == "-"){
    op  = "-";
    //document.getElementById("test2").innerHTML = t1 +""+ op;
    document.getElementById("zwi").innerHTML = t1 +""+ op;
    t2 = t1;
    t1 = "";

  }else if(eing == "*"){
    op  = "*";
    //document.getElementById("test2").innerHTML = t1 +""+ op;
    document.getElementById("zwi").innerHTML = t1 +""+ op;
    t2 = t1;
    t1 = "";

  }else if(eing == "/"){
    op  = "/";
    //document.getElementById("test2").innerHTML = t1 +""+ op;
    document.getElementById("zwi").innerHTML = t1 +""+ op;
    t2 = t1;
    t1 = "";

  }else if(eing == "w"){
    op  = " wurzel aus ";
    //document.getElementById("test2").innerHTML = t1 +""+ op;
    document.getElementById("zwi").innerHTML = t1 +""+ op;
    t2 = t1;
    t1 = "";

  }else if(eing == "h"){
    op  = " hoch ";
    //document.getElementById("test2").innerHTML = t1 +""+ op;
    document.getElementById("zwi").innerHTML = t1 +""+ op;
    t2 = t1;
    t1 = "";

  }else if(eing == "Delete"){
    //document.getElementById("test2").innerHTML = "";
    document.getElementById("zwi").innerHTML = "";
    document.getElementById("erg").innerHTML = "Ergebnis";
    t2 = "";
    t1 = "";
    eing = "";
    op = "";

  }else if(eing == "Insert"){
    t1 = t1 + "" + speicher;
    //document.getElementById("test2").innerHTML = t2 +""+ op + t1;
    document.getElementById("zwi").innerHTML = t2 +""+ op + t1;

  }else if(eing == "Enter"){
    if(op == "+"){
      t1 = parseInt(t1);
      t2 = parseInt(t2);  
      Erg = t1 + t2;
      //document.getElementById("test2").innerHTML = Erg;
      document.getElementById("erg").innerHTML = Erg;
      speicher = Erg;
      t1 = Erg;     
      t2 = ""; 
      op = "";
    }else if(op == "-"){
      t1 = parseInt(t1);
      t2 = parseInt(t2); 
      Erg = t2 - t1;
      //Erg = -Erg;
      //document.getElementById("test2").innerHTML = Erg;
      document.getElementById("erg").innerHTML = Erg;
      speicher = Erg;
      t1 = Erg;     
      t2 = "";
      op = "";
    }else if(op == "*"){
      t1 = parseInt(t1);
      t2 = parseInt(t2); 
      Erg = t1 * t2;
      //document.getElementById("test2").innerHTML = Erg;
      document.getElementById("erg").innerHTML = Erg;
      speicher = Erg;
      t1 = Erg;     
      t2 = "";
      op = "";
    }else if(op == "/"){
      t1 = parseInt(t1);
      t2 = parseInt(t2); 
      Erg = t2 / t1;
      //document.getElementById("test2").innerHTML = Erg;
      document.getElementById("erg").innerHTML = Erg;
      speicher = Erg;
      t1 = Erg;     
      t2 = "";
      op = "";
    }else if(op == " wurzel aus "){
      t1 = parseInt(t1);
      t2 = parseInt(t2); 
      Erg = Math.pow(t1,1/t2);
      //document.getElementById("test2").innerHTML = t2;
      document.getElementById("erg").innerHTML = Erg;
      speicher = Erg;
      t1 = Erg;     
      t2 = "";
      op = "";
    }else if(op == " hoch "){
      t1 = parseInt(t1);
      t2 = parseInt(t2); 
      Erg = Math.pow(t2,t1);
      //document.getElementById("test2").innerHTML = t2;
      document.getElementById("erg").innerHTML = Erg;
      speicher = Erg;
      t1 = Erg;     
      t2 = "";
      op = "";
    }

  }else if(eing > -1){
    t1 = t1 + "" + eing;
    //document.getElementById("test2").innerHTML = t2 +""+ op + t1;
    document.getElementById("zwi").innerHTML = t2 +""+ op + t1;
  }else{}

} 
/* var test = document.getElementById('Seite')

 test.addEventListener("keydown", rechner);

function rechner(evt){
  document.getElementById("test").innerHTML = evt.key;
  eing = evt.key;
    

    if(eing == "+"){
    
    t3 = speicher;

    document.getElementById("test1").innerHTML = t3;

    op = "+";
  	
     document.getElementById("test2").innerHTML = t3 +""+ op;

	  speicher = t2;
     
    }else if(eing == "-"){
      
    t3 = speicher;

    document.getElementById("test1").innerHTML = t3;

     op = "-";
  	
     document.getElementById("test2").innerHTML = t3 +""+ op;

	  speicher = t3;
     }else if(eing == "Enter"){
     
     speicher = parseInt(speicher);
     t3 = parseInt(t3);
     if(op == "+"){

     Erg = speicher + t3;

     document.getElementById("test1").innerHTML = Erg;

     }else if(op == "-"){
       
       Erg = speicher - t3;

     document.getElementById("test1").innerHTML = Erg;
     }
         
      
    }else{
     t1 = speicher +""+ eing; 
    document.getElementById("test2").innerHTML = t1 +""+ op;

	  speicher = t1;

    
    }
}
*/

function click_9() {
	
	neun = speicherD1 +""+ neun;
	
	speicherD1 = neun;
	
	
	
	  document.getElementById("erg").innerHTML = neun;
	  
	  neun = 9;
	   
	}
	
function click_8() {
	
	acht = speicherD1 +""+ acht;
	
	speicherD1 = acht;
	
	
	
	  document.getElementById("erg").innerHTML = acht;
	  
	 
	  
	  acht = 8;
	}
	
function click_7() {
	
	sieben = speicherD1 + ""+ sieben;
	
	speicherD1 = sieben;
	
	  document.getElementById("erg").innerHTML = sieben;
	
	sieben = 7;
	}
	
function click_6() {
	
    sechs = speicherD1 +""+ sechs;
    
    speicherD1 = sechs;
	
	  document.getElementById("erg").innerHTML = sechs;
	  
	  sechs = 6;
	}
	
function click_5() {
	
      fünf = speicherD1 +""+ fünf;
      
      speicherD1 = fünf;
	
	  document.getElementById("erg").innerHTML = fünf;
	  
	  fünf = 5;
	}	

function click_4() {
	
	  vier = speicherD1 +""+ vier;
	  
	  speicherD1 = vier;
	
	  document.getElementById("erg").innerHTML = vier;
	  
	  vier = 4;
	}
	
function click_3() {
	
	  drei = speicherD1 +""+ drei;
	  
	  speicherD1 = drei;
	
	  document.getElementById("erg").innerHTML = drei;
	  
	  drei = 3;
	}

function click_2() {
	
	  zwei = speicherD1 +""+ zwei;
	  
	  speicherD1 = zwei;
	
	  document.getElementById("erg").innerHTML = zwei;
	  
	  zwei = 2;
	}
	
function click_1() {
	
	  eins = speicherD1 +""+ eins;
	  
	  speicherD1 = eins;
	
	  document.getElementById("erg").innerHTML = eins;
	  
	  eins = 1;
	}	
	
function click_0() {
	
	  zero = speicherD1 +""+ zero;
	  
	  speicherD1 = zero;
	
	  document.getElementById("erg").innerHTML = zero;
	  
	  zero = 0;
	}
	
function answ() {
	
	  ans = speicherD1 +""+ ans;
	  
	  speicherD1 = ans;
	
	  document.getElementById("erg").innerHTML = ans;
	  
	  zero = 0;
	}



function mal() {
	
    document.getElementById('zwi').innerHTML = "" ; 
	
	document.getElementById('zwi1').innerHTML = "" ;
	
	speicherE2 = speicherD1;
	
	speicherD1 = "";
	
	zeichen = 4;
	
	document.getElementById("zwi").innerHTML = speicherE2+""+"*" ;
}	


function plus() {
	
    document.getElementById('zwi').innerHTML = "" ; 
	
	document.getElementById('zwi1').innerHTML = "" ; 
		
	speicherE2 = speicherD1;
	
	speicherD1 = "";
	
	zeichen = 1;
	
	  document.getElementById("zwi").innerHTML = speicherE2+""+"+" ;
	}	
	
function minus() {
	
    document.getElementById('zwi').innerHTML = "" ; 
	
	document.getElementById('zwi1').innerHTML = "" ;
	
	speicherE2 = speicherD1; 
	
	
	speicherD1 = "";
	
	zeichen = 2;
	
	document.getElementById("zwi").innerHTML = speicherE2+""+"-" ;
	
}
	
function division() {
	
    document.getElementById('zwi').innerHTML = "" ; 
	
	document.getElementById('zwi1').innerHTML = "" ;
	
	speicherE2 = speicherD1;
	
	speicherD1 = "";
	
	zeichen = 3;
	
	document.getElementById("zwi").innerHTML = speicherE2+""+"/" ;
}

function hoch() {
	
    document.getElementById('zwi').innerHTML = "" ; 
	
	document.getElementById('zwi1').innerHTML = "" ;
	
	speicherE2 = speicherD1;
	
	speicherD1 = "";
	
	zeichen = 5;
	
	document.getElementById("zwi").innerHTML = speicherE2+""+" hoch" ;
}

function wurzel() {
	
    document.getElementById('zwi').innerHTML = "" ; 
	
	document.getElementById('zwi1').innerHTML = "" ;
	
	speicherE2 = speicherD1;	
	
	zeichen = 6;
	
	document.getElementById("zwi").innerHTML = " Wurzel aus " ;
}


function ce(){
	
	document.getElementById('zwi').innerHTML = "" ; 
	
	document.getElementById('zwi1').innerHTML = "" ; 
	
	document.getElementById('erg').innerHTML = "Ergebnis" ; 
	
	speicherE2 = 0;
    ergebnis = 0;
    speicherD1 = "";
    ansauto = 0;
	
	
}	 

function gleich() {
    
	if (zeichen == 1){
	    speicherE2 = parseInt(speicherE2);
        speicherD1 = parseInt(speicherD1);
    
        ergebnis = speicherD1 + speicherE2;
     
        document.getElementById("erg").innerHTML = "="+" "+ergebnis;
        
        document.getElementById("zwi1").innerHTML = speicherD1;
    
        ansauto = ergebnis;
        ans = ergebnis;
        
        speicherE2 = 0;
        ergebnis = 0;
        speicherD1 = "";
        
        ansauto = speicherD1 +""+ ansauto;
  	  
  	  speicherD1 = ansauto;
  	
        
        
	}
    
	if (zeichen == 2){
		speicherE2 = parseInt(speicherE2);
	    speicherD1 = parseInt(speicherD1);
	    
	    ergebnis = speicherE2 - speicherD1;
	     
        document.getElementById("erg").innerHTML = "="+" "+ergebnis;
        
        document.getElementById("zwi1").innerHTML = speicherD1 ;
        
        ansauto = ergebnis;
        ans = ergebnis;
	    
	    speicherE2 = 0;
	    ergebnis = 0;
	    speicherD1 = "";
	    
        ansauto = speicherD1 +""+ ansauto;
    	  
    	  speicherD1 = ansauto;
	    
	    
		}
	
	if (zeichen == 3){
		speicherE2 = parseInt(speicherE2);
	    speicherD1 = parseInt(speicherD1);
	    
	    ergebnis = speicherE2 / speicherD1;
	     
        document.getElementById("erg").innerHTML = "="+" "+ergebnis;
        
        document.getElementById("zwi1").innerHTML = speicherD1 ;
        
        ansauto = ergebnis;
        ans = ergebnis;
	    
	    speicherE2 = 0;
	    ergebnis = 0;
	    speicherD1 = "";
	    
        ansauto = speicherD1 +""+ ansauto;
    	  
    	  speicherD1 = ansauto;
	    
	    
		}
	
	if (zeichen == 4){
		
		speicherE2 = parseInt(speicherE2);
	    speicherD1 = parseInt(speicherD1);
	    
	    ergebnis = speicherE2 * speicherD1;
	     
        document.getElementById("erg").innerHTML = "="+" "+ergebnis;
        
        document.getElementById("zwi1").innerHTML = speicherD1;
        
        ansauto = ergebnis;
        ans = ergebnis;
	    
	    speicherE2 = 0;
	    ergebnis = 0;
	    speicherD1 = "";
	    
        ansauto = speicherD1 +""+ ansauto;
    	  
    	  speicherD1 = ansauto;
	    
	    
		}
	
     if (zeichen == 5){
		
		speicherE2 = parseInt(speicherE2);
	    speicherD1 = parseInt(speicherD1);
	    
	    ergebnis = Math.pow(speicherE2, speicherD1);
	     
        document.getElementById("erg").innerHTML = "="+" "+ergebnis;
        
        document.getElementById("zwi1").innerHTML = speicherD1;
        
        ansauto = ergebnis;
        ans = ergebnis;
	    
	    speicherE2 = 0;
	    ergebnis = 0;
	    speicherD1 = "";
	    
        ansauto = speicherD1 +""+ ansauto;
    	  
    	  speicherD1 = ansauto;
	    
	    
		}
     
     if (zeichen == 6){
 		
 		speicherE2 = parseInt(speicherE2);
 	    speicherD1 = parseInt(speicherD1);
 	    
 	   ansauto = ergebnis;
 	    ergebnis = Math.sqrt(speicherD1);
 	     
         document.getElementById("erg").innerHTML = "="+" "+ergebnis;
         
         document.getElementById("zwi1").innerHTML = speicherD1;
         
         ansauto = ergebnis;
         ans = ergebnis;
 	    
 	    speicherE2 = 0;
 	    ergebnis = 0;
 	    speicherD1 = "";
 	    
        ansauto = speicherD1 +""+ ansauto;
    	  
    	  speicherD1 = ansauto;
 	    
 	    
 		}
    	
    	
    	}	    
	
	
	