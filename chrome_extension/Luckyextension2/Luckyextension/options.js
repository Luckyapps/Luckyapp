window.addEventListener("load", ()=>{
    var wiki_button = document.getElementById("wiki_button");
    wiki_button.addEventListener("click", (evt)=>{
        disable_wiki(evt.target);
    })
})

function disable_wiki(but){
    var wiki_ = chrome.storage.sync.get(["wiki"], function(result){return result.wiki});
    console.log(wiki_);
    if(wiki_ == true){
        but.innerHTML = "Bei Wikipedia aktivieren";
        chrome.storage.sync.set({"wiki": false});
    }else{
        but.innerHTML = "Bei Wikipedia deaktivieren";
        chrome.storage.sync.set({"wiki": true});
    }
}