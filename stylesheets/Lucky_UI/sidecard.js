var sidecard_but, sidecard_but_close, sidecard;

function load_sidecard_stylesheet(){
    sidecard_but = document.getElementsByClassName("sidecard_but")[0];
    sidecard_but_close = document.getElementsByClassName("sidecard_but_close")[0];
    sidecard = document.getElementsByClassName("sidecard")[0];

    sidecard_but.addEventListener("click", sidecard_toggle);
    sidecard_but_close.addEventListener("click", sidecard_toggle);
}

function sidecard_toggle(){
    if(sidecard.classList.contains("sidecard_close") || sidecard.classList.contains("sidecard_open")){
        if(sidecard_status == "closed"){
            sidecard.classList.replace("sidecard_close", "sidecard_open");
            sidecard_status = "opened"
        }else if(sidecard_status == "opened"){
            sidecard.classList.replace("sidecard_open", "sidecard_close");
            sidecard_status = "closed"
        }
    }else{
        sidecard.classList.add("sidecard_open");
        sidecard_status = "opened";
    }
}