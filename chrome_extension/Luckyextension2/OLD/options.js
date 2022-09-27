var ch_wiki, ch_google;

window.addEventListener("load", start_options);

function start_options(){
    ch_wiki = document.getElementById("checkbox_wiki");
    ch_google = document.getElementById("checkbox_google");
    document.getElementById("save").addEventListener("click", wiki_change);

    chrome.storage.sync.get(["ch_wiki_state"], function(result){
        if((result.ch_wiki_state != undefined) && (result.ch_wiki_state == true)){
            ch_wiki.checked = true;
            console.log("SET CHECKED");
        }
    })

    //ch_wiki.addEventListener("click", wiki_change);
}

function wiki_change(evt){
    chrome.storage.sync.set({"ch_wiki_state": ch_wiki.checked});
    console.log("CHANGE");
}