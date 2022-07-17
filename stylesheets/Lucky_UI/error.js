var error_container;

function load_error_stylesheet(){
    error_container = document.getElementById("error_container");
}

function error_show(error_info, error_type){   
    if(error_type == "closed"){ //vorgefertigter Typ
        error_container.innerHTML = "Keine Verbindung zum Server möglich. <br>Bitte später noch einmal versuchen oder Seite neu Laden.";
    }else{
        error_container.innerHTML = error_info;
    }
    error_container.classList = "fade_in_out";
    var timeout_duration = parseFloat(window.getComputedStyle(error_container).animationDuration) * 1000;
        setTimeout(function() {   
            error_container.classList = "error_hidden";
            }, timeout_duration); 
}