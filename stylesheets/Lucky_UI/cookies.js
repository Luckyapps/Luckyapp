var cookie_container, cookie_content;

function load_cookie_stylesheet(){
    cookie_container = document.getElementById("cookie_container");
    cookie_content = document.getElementById("cookie_content");

    cookie_selection_start();

    window.addEventListener('click', function(e){   
        if(cookie_content.contains(e.target)){
          // Clicked in box
        } else{
          // Clicked outside the box
          //console.warn("Keine Präferenz ausgewählt.");
        }
      });
}

function cookie_content_close(){
    localStorage.setItem("cookies", "true");
    cookie_container.classList.add("cookie_container_close");
    var timeout_duration = parseFloat(window.getComputedStyle(cookie_container).animationDuration) * 1000;
        setTimeout(function() {   
            cookie_container.classList = "cookie_container_hide";
            }, timeout_duration); 
}

function cookie_selection_start(){
    if(localStorage.getItem("cookies")){
        if(localStorage.getItem("cookies") == "false"){
            cookie_container.classList = "cookie_container_open";
        }
    }else{
        cookie_container.classList = "cookie_container_open";
        localStorage.setItem("cookies", "false");
    }
}