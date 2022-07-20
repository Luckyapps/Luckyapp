var navbar;

async function start_navbar_stylesheet(){
    if(!luckyapp_core.modules.header.loaded){
        await sleep(1);
        start_navbar_stylesheet();
    }else{
        header.innerHTML += "<div class='navbar'></div>";
        navbar = document.getElementsByClassName("header_navbar")[0];
        for(i=0; i < luckyapp_core.page_config.modules.navbar.links.length; i++){
            navbar.innerHTML += "<a href='"+ luckyapp_core.page_config.modules.navbar.links[i].href +"'>"+ luckyapp_core.page_config.modules.navbar.links[i].text +"</a>";
        }
        luckyapp_core.modules.navbar.loaded = true;
    }
}