window.addEventListener("load", ()=>{
    var adblock_button = document.getElementById("adblock_button"); //Adblocker
    chrome.storage.sync.get(["adblock"]).then((result) =>{
        if(result.adblock){
            if(result.adblock == true){
                adblock_button.innerHTML = "Adblocker Deaktivieren";
            }else if(result.adblock == false){
                adblock_button.innerHTML = "Adblocker Aktivieren";
            }
        }else{
            adblock_button.innerHTML = "Adblocker Aktivieren";
        }
    })
    adblock_button.addEventListener("click", (evt)=>{
        disable_adblock(evt.target);
    })

})






async function disable_adblock(but){
    var adblock_ = await chrome.storage.sync.get(["adblock"]).then((result) =>{return result.adblock});
    if(adblock_ == true){
        but.innerHTML = "Adblocker Deaktivieren";
        chrome.storage.sync.set({"adblock": false});
    }else{
        but.innerHTML = "Adblocker Aktivieren";
        chrome.storage.sync.set({"adblock": true});
    }
}