var body;

window.addEventListener("load", load_style);

//if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').then(function(registration){registration.update()})}; //experimenteller Offlinemodus

function load_style(){
    body = document.getElementsByTagName("body")[0];
    load_header_stylesheet();
    load_titlebar_stylesheet();
    load_content_stylesheet();
}