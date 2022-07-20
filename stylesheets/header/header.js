var header_title;

async function start_header_stylesheet(){
    if(!luckyapp_core.modules.preset.loaded){
        await sleep(1);
        start_header_stylesheet();
    }else{
        header_title = document.getElementsByClassName("header_title")[0];
        header_title.innerHTML = "<h1>"+ luckyapp_core.page_config.modules.header.title +"</h1><h2>"+ luckyapp_core.page_config.modules.header.subtitle +"</h2>";
        luckyapp_core.modules.header.loaded = true;
    }
}