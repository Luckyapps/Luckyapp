async function start_xxxx_stylesheet(){
    var ready_to_load = false;
    for(i=0; ready_to_load != true;i++){
        if(luckyapp_core.modules.content.loaded){
            ready_to_load = true;
            var html_content = '';
            html_content = await createHTML(html_content);
            document.body.appendChild(html_content);
            luckyapp_core.modules.xxxxxx.loaded = true;
        }else{
            await sleep(1);
            if(i==100){
                luckyapp_core.load_error(undefined, "CONTENT ERROR");
            }
        }
    }
}


async function start_xxxx_stylesheet(){
    var ready_to_load = false;
    for(i=0; ready_to_load != true;i++){
        if(luckyapp_core.modules.content.loaded){
            ready_to_load = true;

            luckyapp_core.modules.xxxxxx.loaded = true;
        }else{
            await sleep(1);
            if(i==100){
                luckyapp_core.load_error(undefined, "CONTENT ERROR");
            }
        }
    }
}