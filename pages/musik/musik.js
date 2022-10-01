async function musik_start(){
    if(!luckyapp_core.modules.updates.updatelists.musik){
        luckyapp_core.modules.updates.updatelists.musik = {loaded:false};
    }
    if(luckyapp_core.modules.updates.updatelists.musik.loaded){
        load_updatelist(luckyapp_core.modules.updates.updatelists.musik.list.content, luckyapp_core.modules.updates.updatelists.musik.list.source);
    }else{
        await sleep(1);
        musik_start();
    }
}