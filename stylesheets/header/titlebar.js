var stickstate_before = false, stickstate_now = false, titlebar_state = "close";

function load_titlebar_stylesheet(){
    var titlebar = document.getElementById("titlebar");
    var titlebar_title = document.getElementById("titlebar_title");

    document.addEventListener("scroll", titlebar_onscroll);
    titlebar_title.addEventListener("click", titlebar_open_mobile);
}

function titlebar_onscroll(){
    stickstate_now = (titlebar.offsetTop <= (window.scrollY + 1));//RUNDEN statt +1 ????
    //console.log(stickstate_now);
    if(stickstate_now == stickstate_before){
        //console.log("no change");
    }else{
        if(stickstate_now == true){
            titlebar_onsticky();
        }else if(stickstate_now == false){
            titlebar_onnotsticky();
        }
    }
    stickstate_before = stickstate_now;
}

function titlebar_onsticky(){
    console.log("STICK");
    if(body.clientWidth <= 400){
        titlebar_title.classList = "";
        titlebar_title.style.display = "unset";
    }else{
        titlebar_title.style.display = "unset";
        titlebar_title.classList = "";
        titlebar_title.classList.toggle("titlebar_title_visible");
    }
}

function titlebar_onnotsticky(){
    console.log("NOSTICK");
    if(body.clientWidth <= 400){
        titlebar_title.classList = "";
        titlebar_title.style.display = "none"
    }else{
        titlebar_title.style.display = "unset";
        titlebar_title.classList = "";
        titlebar_title.classList.toggle("titlebar_title_invisible");
        var timeout_duration = parseFloat(window.getComputedStyle(titlebar_title).animationDuration) * 1000;
        setTimeout(function() {
            if(titlebar_title.classList == "titlebar_title_invisible"){
                titlebar_title.style.display = "none";
            }
        }, timeout_duration-110);
    }
}

function titlebar_open_mobile(){
    if(body.clientWidth <= 400){
        if(titlebar_state == "close"){

        }
    }
}
