window.addEventListener("load", load_header_stylesheet);

window.scrollTo(0, 0);

var title_container, title, title_sec, title_sec_height_init, title_font_init;

function load_header_stylesheet(){
    title_container = document.getElementsByClassName("title_container")[0];
    title = document.getElementsByClassName("title")[0];
    title_sec = document.getElementsByClassName("title_sec")[0];

    title_sec_height_init = get_Style(title_sec, "height", "int");
    title_font_init = get_Style(title, "font-size", "int") / 16;
}