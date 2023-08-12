var adblock;

chrome.storage.sync.onChanged.addListener(function (changes, namespace) { //ONCHANGE
    console.log(changes);
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is "${newValue}".`
      );
      if(key == "adblock"){ //reload onchange
        window.location.reload(false);
      }
    }
  });

window.addEventListener("load", async function(){ //Onload Wikipedia
    var adblock_ = await chrome.storage.sync.get(["adblock"]).then((result) =>{return result.adblock});
    if(adblock_ == undefined){
        chrome.storage.sync.set({"adblock": true});
        adblock = true;
    }else{
        adblock = adblock_;
    }
    //loadCSS("style");
    extension_load_style();
});

function loadCSS(file) {
  var link = document.createElement("link");
  link.href = chrome.runtime.getURL(file + '.css');
  link.id = file;
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
  extension_load_style();
}
function unloadCSS(file) {
  var cssNode = document.getElementById(file);
  cssNode && cssNode.parentNode.removeChild(cssNode);
}


function extension_load_style(){
  if(adblock == true){
    console.warn("ADBLOCKER");
    for(i=0;i<document.getElementsByTagName("div").length;i++){
      if(document.getElementsByTagName("div")[i].slot){
        if(document.getElementsByTagName("div")[i].slot == "adInject"){
          document.getElementsByTagName("div")[i].style.display = "none";
          console.log(document.getElementsByTagName("div")[i]);
        }
      }
    }
  }

  //Minecraft Wiki Adblock
  if(document.getElementsByClassName("top-ads-container")[0]){ 
    document.getElementsByClassName("top-ads-container")[0].style.display = "none";
  }
}