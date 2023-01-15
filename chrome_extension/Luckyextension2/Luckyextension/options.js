window.addEventListener("load", ()=>{
    var wiki_button = document.getElementById("wiki_button"); //WIKI
    chrome.storage.sync.get(["wiki"]).then((result) =>{
        if(result.wiki){
            if(result.wiki == true){
                wiki_button.innerHTML = "Wikipedia Deaktivieren";
            }else if(result.wiki == false){
                wiki_button.innerHTML = "Wikipedia Aktivieren";
            }
        }else{
            wiki_button.innerHTML = "Wikipedia Aktivieren";
        }
    })
    wiki_button.addEventListener("click", (evt)=>{
        disable_wiki(evt.target);
    })

    var ijf_button = document.getElementById("ijf_button"); //IJF
    chrome.storage.sync.get(["ijf"]).then((result) =>{
        if(result.ijf){
            if(result.ijf == true){
                ijf_button.innerHTML = "IJF Deaktivieren";
            }else if(result.ijf == false){
                ijf_button.innerHTML = "IJF Aktivieren";
            }
        }else{
            ijf_button.innerHTML = "IJF Aktivieren";
        }
    })
    ijf_button.addEventListener("click", (evt)=>{
        disable_ijf(evt.target);
    })
})






async function disable_wiki(but){
    var wiki_ = await chrome.storage.sync.get(["wiki"]).then((result) =>{return result.wiki});
    if(wiki_ == true){
        but.innerHTML = "Bei Wikipedia Deaktivieren";
        chrome.storage.sync.set({"wiki": false});
    }else{
        but.innerHTML = "Bei Wikipedia Aktivieren";
        chrome.storage.sync.set({"wiki": true});
    }
}

async function disable_ijf(but){
    var ijf_ = await chrome.storage.sync.get(["ijf"]).then((result) =>{return result.ijf});
    if(ijf_ == true){
        but.innerHTML = "Bei IJF Aktivieren";
        chrome.storage.sync.set({"ijf": false});
    }else{
        but.innerHTML = "Bei IJF Deaktivieren";
        chrome.storage.sync.set({"ijf": true});
    }
}