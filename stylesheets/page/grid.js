var body_init, body, page, header;

async function start_grid_stylesheet(){
    body = document.body;
    body_init = body.innerHTML;
    body.innerHTML += "<div class='page'></div>";
    page = document.getElementsByClassName("page")[0];
    if(luckyapp_core.modules.header.active){
        page.innerHTML += "<div class='header'></div>";
        header = document.getElementsByClassName("header")[0];
        header.classList.add("grid_100");
        header.innerHTML += "<div class='header_title'></div>";
    }
    if(luckyapp_core.modules.navbar.active){
        header.innerHTML += "<div class='header_navbar'></div>";
    }
    page.innerHTML += "<div class='content'></div><div class='footer'></div>";
    if(luckyapp_core.page_config.appearance.font_style){
    }
    luckyapp_core.modules.preset.loaded = true;
}