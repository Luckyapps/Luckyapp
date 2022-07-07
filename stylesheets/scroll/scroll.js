window.addEventListener("load", start);

var background, scroll_;

var box, box_top, sec5;

function start(){
    box = document.getElementById("box");
    background = document.getElementById("background");
    sec5 = document.getElementById("scroll_2");

    window.addEventListener("scroll", onscroll);
}

function onscroll(evt){
    scroll_ = Math.round(window.scrollY);
    //box_top = get_Style(box, "top", "int");
    /*start_evt(sec5, 100, 300, "opa", 1);
    start_evt(document.getElementById("scroll_1"), 0, 200, "movein_transl", 0);*/
    start_evt(title_container, 0, 200, "move_a", 0, 50);
    start_evt(title, 0, 200, "shrink", 2, title_font_init /*5*/);
    //start_evt(title_sec, 0, 200, "move_a2", 0, get_Style(title_sec, "padding", "int") /*title_sec_height_init*/);

    start_evt(sec1, get_Style(title_sec, "height", "int") + get_Style(title_sec, "padding", "int"), 700, "opa",  1);
    start_evt(document.getElementById("video"), get_Style(title_sec, "height", "int") + get_Style(title_sec, "padding", "int") + get_Style(sec1, "height", "int"), 900 + get_Style(sec1, "height", "int"), "opa",  1);
}

function start_evt(elem, start, end, type, goal_val, settings){
    var diff = end - start;
    var unit = diff/100;
    if((scroll_ >= start) && (scroll_ <= end)){
        var faktor = ((scroll_- start)/diff);
        //console.log(faktor);
        if(type == "opa"){
            elem.style.opacity = faktor * goal_val;
        }else if(type == "movein_transl"){
            elem.style.transform = "translate(-"+ ((1 - faktor) * (goal_val + 100)) +"%,0)"; 
        }else if(type == "move_a"){
            elem.style.left = ((1 - faktor) * settings) +"%";
            elem.style.transform = "translate(-"+((1 - faktor) * settings) +"%,0)";
            elem.style.position = "relative";
            elem.style.top = scroll_ +"px";
        }else if(type == "move_a2"){
            //elem.style.height = title_sec_height_init + scroll_ +"px";
            elem.style.height = get_Style(title, "height", "int") + scroll_ + settings +"px";
        }else if(type == "shrink"){
            var goal_size = settings - goal_val; 
            elem.style.fontSize = goal_val + ((1 - faktor) * goal_size) +"em";
        }
    }else if(scroll_ > end){
        if(type == "opa"){
            elem.style.opacity = goal_val;
        }else if(type == "movein_transl"){
            elem.style.transform = "translate("+ goal_val +"%,0)";
        }else if(type == "move_a"){
            elem.style.left = goal_val +"%";
            elem.style.transform = "translate("+ goal_val +"%,0)";
            elem.style.top = get_Style(title_sec, "padding", "int") +"px";
            elem.style.position = "fixed";
        }else if(type == "shrink"){
            elem.style.fontSize = goal_val +"em";
        }
    }
}

function get_Style(elem, property, type){
    var value = window.getComputedStyle(elem).getPropertyValue(property);
    if(type == "int"){
        value = parseInt(value);
    }else if(type == "float"){
        value = parseFloat(value);
    }
    return value;
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

function getScroll(elem){
    return elem.getBoundingClientRect().top;
}