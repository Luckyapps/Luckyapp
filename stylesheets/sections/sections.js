window.addEventListener("load", load_sections_stylesheet);

var sec1;

function load_sections_stylesheet(){
    sec1 = document.getElementById("sec1");

    title_sec.style.paddingBottom = window.innerHeight - get_Style(title_sec, "height", "int") - get_Style(title_sec, "padding", "int") +"px";
}