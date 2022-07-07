var darkmode_button;

function load_darkmode_stylesheet(){
    darkmode_button = document.getElementById("darkmode_button");

    darkmode_button.addEventListener("click", darkmode);

    //Darkmode starten
    if(localStorage.getItem("darkmode")){
        if(localStorage.getItem("darkmode") == "true"){
            /*darkmode_button.src = "media/Theme_Symbol.png";
            style_toggle("dark");*/
            localStorage.setItem("darkmode", false);
        }else if(localStorage.getItem("darkmode") == "false"){
            /*darkmode_button.src = "media/Theme_Symbol2.png";
            style_toggle("light");*/
            localStorage.setItem("darkmode", true);
        }
        darkmode();
    }else{
        localStorage.setItem("darkmode", false);
    }
}

function style_toggle(mode){ // Darkmode toggle (mode:[light,dark])
    for(i=0;i<cards.length;i++){
        cards[i].classList.remove("card_dark", "card_light");
        cards[i].classList.add("card_"+ mode);
    }
}

function darkmode(){ // Darkmode über Button wechseln
    if(localStorage.getItem("darkmode") == "false"){
        localStorage.setItem("darkmode", true);
        if(document.getElementsByTagName('html')[0].getAttribute('lang') == "de-de"){ //???
            darkmode_button.src = "media/Theme_Symbol.png";
        }else{
            darkmode_button.src = "../media/Theme_Symbol.png";
        }  
        blende.style.display = "block";
        /*for(i=0;i<document.getElementsByClassName("Ers_advice")[0].getElementsByTagName("a").length;i++){
            document.getElementsByClassName("Ers_advice")[0].getElementsByTagName("a")[i].style.color = "white";
        }*/
        style_toggle("dark");
    }else if(localStorage.getItem("darkmode") == "true"){
        localStorage.setItem("darkmode", false);
        if(document.getElementsByTagName('html')[0].getAttribute('lang') == "de-de"){ //???
            darkmode_button.src = "media/Theme_Symbol2.png";
        }else{
            darkmode_button.src = "../media/Theme_Symbol2.png";
        }  
        //darkmode_button.src = "media/Theme_Symbol2.png";
        blende.style.display = "none";
        /*for(i=0;i<document.getElementsByClassName("Ers_advice")[0].getElementsByTagName("a").length;i++){
            document.getElementsByClassName("Ers_advice")[0].getElementsByTagName("a")[i].style.color = "black";
        }*/
        style_toggle("light");
    }
}