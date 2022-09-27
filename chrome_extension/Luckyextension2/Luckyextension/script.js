var wiki;

chrome.storage.sync.onChanged.addListener(function (changes, namespace) {
    console.log(changes);
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is "${newValue}".`
      );
      if(key == "wiki"){
        window.location.reload(false);
      }
    }
  });

window.addEventListener("load", function(){
    var wiki_ = chrome.storage.sync.get(["wiki"], function(result){return result.wiki});
    console.log(wiki_);
    if(wiki_ == undefined){
        chrome.storage.sync.set({"wiki": true});
        wiki = true;
    }else{
        wiki = wiki_;
    }
    loadCSS("style");
    extension_load_style();
})

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
    //Google Logo
    if(document.getElementById("logo") != null){
        document.getElementById("logo").children[0].src = "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
    }

    if(document.getElementsByClassName("lnXdpd")[0] /*!= null*/){
        if(document.getElementsByClassName("lnXdpd")[0].src.match(/doodles/ig)){
          console.log("Doodle erkannt, Logo wird nicht geändert.");
        }else{
          document.getElementsByClassName("lnXdpd")[0].src = "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
          document.getElementsByClassName("lnXdpd")[0].srcset = "https://www.google.de/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x";
        }
      }



    //Wikipedia
  if(window.location.origin == "https://de.wikipedia.org" && wiki == true){
  
  var style = document.createElement('style');
  style.innerHTML =
    ':not(a *) {' +
      'color: #9f9f9f !important;' +
      'background-color: black !important;' +
    '}' +
          'a{color:#00adad !important;}' +
          '#p-logo a {background-color: #6f6f6f !important}';

  var ref = document.querySelector('script');
  ref.parentNode.insertBefore(style, ref);

    var wiki_content = document.getElementById("content");
    wiki_content.style.margin = 0;
    wiki_content.style.position = "absolute";
    wiki_content.style.top = 0;
    wiki_content.style.width = "auto";
    wiki_content.style.zIndex = 1;
    document.getElementById("p-search").style.zIndex = 999;
    document.getElementById("p-search").style.position = "absolute";
    document.getElementById("p-search").style.top = "3.9em";
    document.getElementById("p-search").style.right = "20px";
  }

  if(window.location.origin == "https://www.wikipedia.de"){
  var style = document.createElement('style');
  style.innerHTML 
    ':not(a *) {' +
      'color: #9f9f9f !important;' +
      'background-color: black !important;' +
    '}a{color:#00adad !important;}';

  var ref = document.querySelector('script');
  ref.parentNode.insertBefore(style, ref);
  }


  
  //Minecraft Wiki Adblock
  if(document.getElementsByClassName("top-ads-container")[0]){ 
    document.getElementsByClassName("top-ads-container")[0].style.display = "none";
  }
}