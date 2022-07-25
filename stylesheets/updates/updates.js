var updatelist;

async function start_updates_stylesheet(){
    if(luckyapp_core.modules.content.loaded && luckyapp_core.modules.updates.updatelists.luckyapp.loaded){
        luckyapp_core.modules.updates.updatelists.luckyapp.list = updatelist_luckyapp;
        if(luckyapp_core.page_config.modules.updates.updatelist){
            await load_updatelist(luckyapp_core.modules.updates.updatelists.luckyapp.list.content, "Luckyapp");
        }

        luckyapp_core.modules.updates.loaded = true;
    }else{
        await sleep(1);
        start_updates_stylesheet();
    }
}

function load_updatelist(list, source, return_required){
    if(source == "Luckyapp"){
        updatelist = document.getElementById("updatelist");
        for(i=0; i< list.length; i++){
            var list_li = "";
            list_li = "<li onclick='updates_info_open(this)' value='"+ i +"'><h3>";
            if(list[i].type == "UPDATE"){
                list_li += "<font color='green'>"+ list[i].type +"</font>";
            }else{
                list_li += "<font color='green'>"+ list[i].type +"</font>";
            }

            if(list[i].date != undefined){
                list_li += " ("+ list[i].date +")";
            }

            list_li += "<u>";

            if(list[i].title != undefined){
                list_li += " "+ list[i].title;
            }else{
                list_li += " "+ list[i].id;
            }

            if(list[i].name != undefined){
                list_li += " : "+ list[i].name;
            }
            list_li += "</u></h3></li>";
            updatelist.innerHTML = list_li;
        }
    }
}

function updates_info_open(src){
    var i = src.value;
    var list = luckyapp_core.modules.updates.updatelists.luckyapp.list.content;
    var flyin_content = "";
    flyin_content += "<h1 id='updates_info_header'>"+ list[i].title +" : "+ list[i].name +"</h1><hr>"
                        +"<p id='updates_info_content'>"+ luckyapp_core.modules.updates.info_window_text +""+ list[i].description +""+ luckyapp_core.modules.updates.info_window_signature +"</p>";
    flyin_open("<div id='updates_info_container'>"+ flyin_content +"</div>");
}

function load_version_history_updatelist(){
    var list = luckyapp_core.modules.updates.updatelists.luckyapp.list.content;
    var vers_hist_cont = "";
    watermark.innerHTML += " | "+ list[0].id;
    for(i=0; i<list.length;i++){
        vers_hist_cont += "<div><h3>"+ list[i].id +" "+ list[i].title +" : "+ list[i].name +"</h3>"+ list[i].description +"</div>"
    }
    vers_hist_cont += "<br>";
    return vers_hist_cont;
}