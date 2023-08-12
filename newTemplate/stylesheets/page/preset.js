var body_init, body, page, header;

async function start_preset_stylesheet(){
    body = document.body;
    body_init = body.innerHTML;
    body.innerHTML += "<div class='page'></div>";
    page = document.getElementsByClassName("page")[0];
    luckyapp_core.modules.preset.loaded = true;
}