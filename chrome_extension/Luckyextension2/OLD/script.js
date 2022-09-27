window.addEventListener("load", function() {
  if(chrome.storage.sync.get(["ch_wiki_state"])){
    console.log("ch_wiki_state");
    chrome.storage.sync.get(["ch_wiki_state"], function(result){
      if(result.ch_wiki_state == true){
        console.log("INIT TRUE");
        loadCSS("style");
        extension_load_style();
        return; 
      }
    });
  }else{console.log("ch_wiki_state not set")}
  check_sync_value();
  testing();
});

window.addEventListener('message', function (evt) {testing(evt.data)});

function testing(data){
  if(data.request){
    chrome.runtime.sendMessage(data);
  }
  console.log(data);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    console.log(sender);
    window.postMessage({data: request, result: "true"});
  }
);

function check_sync_value(){
  chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is "${newValue}".`
      );
      if(newValue == true){
        console.log("NEW VALUE TRUE");
        extension_load_style;
        loadCSS("style");
      }else{
        unloadCSS("style");
      }
    }
  });
}

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

  if(document.getElementById("logo") != null){
  document.getElementById("logo").children[0].src = "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
  }

  if(window.location.origin == "https://de.wikipedia.org"){
  //for(i=0; i<document.getElementsByTagName("a").length; i++){/*document.getElementsByTagName("a")[i].style.color = "#00adad";*/document.getElementsByTagName("a")[i].setAttribute('style', 'color:#00adad !important') };
  // Create our stylesheet
  var style = document.createElement('style');
  style.innerHTML =
    ':not(a *) {' +
      'color: #9f9f9f !important;' +
      'background-color: black !important;' +
    '}' +
          'a{color:#00adad !important;}' +
          '#p-logo a {background-color: #6f6f6f !important}';

  // Get the first script tag
  var ref = document.querySelector('script');

  // Insert our new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);

  //EXPERIMENTE
    /*var wiki_content = document.getElementById("content");
    wiki_content.innerHTML = wiki_content.innerHTML + "<button style='position:absolute; z-index:999; top:0; right:0; background-color:green !important;' onclick='document.getElementById('content').classList_add('wiki_fullscreen')'>Widescreen</button>" */
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
  // Create our stylesheet
  var style = document.createElement('style');
  style.innerHTML 
    ':not(a *) {' +
      'color: #9f9f9f !important;' +
      'background-color: black !important;' +
    '}a{color:#00adad !important;}';

  // Get the first script tag
  var ref = document.querySelector('script');

  // Insert our new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);
  }

  if(document.getElementsByClassName("lnXdpd")[0] /*!= null*/){
    if(document.getElementsByClassName("lnXdpd")[0].src.match(/doodles/ig)){
      console.log("Doodle erkannt, Logo wird nicht geändert.");
    }else{
      document.getElementsByClassName("lnXdpd")[0].src = "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
      document.getElementsByClassName("lnXdpd")[0].srcset = "https://www.google.de/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x";
    }

  }

  /*if(window.location == "chrome://new-tab-page/"){
  //document.getElementsByTagName("ntp-app")[0].$.logo.shadowRoot.styleSheets[1].rules[3].cssText = ':host([single-colored]) #logo { -webkit-mask-image: url("chrome://new-tab-page/icons/google_logo.svg"); -webkit-mask-repeat: no-repeat; -webkit-mask-size: 100%; background-image: url("chrome://new-tab-page/icons/google_logo.svg");}';
  //document.getElementById("logo").style.BackgroundImage = "url('chrome://new-tab-page/icons/google_logo.svg')";
  document.getElementsByTagName("ntp-app")[0].$.logo.shadowRoot.styleSheets[1].rules[3].cssText = ':host([single-colored]) #logo {background-image: url("chrome://new-tab-page/icons/google_logo.svg");}';
  }*/

  if(document.getElementsByClassName("top-ads-container")[0]){ //Minecraft Wiki Adblock
    document.getElementsByClassName("top-ads-container")[0].style.display = "none";
  }
}

function fetch(){
  chrome.runtime.sendMessage("start");
}


