function startAPI(){
    //console.log("API script erfolgreich geladen.");
}

//API ----------------------------------------------------------------
async function get_data(url){
    if(!luckyapp_core.page_config.settings){
        luckyapp_core.page_config.settings = {};
    }
    if(!luckyapp_core.page_config.settings.loading_info){
        luckyapp_core.page_config.settings.loading_info = true;
    }
    info_hide();
    if(luckyapp_core.page_config.settings.loading_info){
        info_show("Daten werden geladen...");
    }

    var data

    if(!url.includes("https")){
        if(url.includes("http")){
            url = url.replace("http","https");
            //console.log(url);
        }
    }else{
        //console.log(url);
    }
    
    await fetch(url)
    
    .then((response) => response.text())

    .then((data_text) => {data = JSON.parse(data_text)});
    info_hide();
    if(luckyapp_core.page_config.settings.loading_info){
        info_show("Daten geladen", "success");
    }
    return data;
}

//Audio ---------------------------------------------------------------------