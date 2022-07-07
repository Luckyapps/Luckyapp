window.addEventListener("load", load_style);

//if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').then(function(registration){registration.update()})}; //experimenteller Offlinemodus

function load_style(){
    //load_titlebar_stylesheet();
    //load_content_stylesheet();
    load_error_stylesheet();
    //load_sidecard_stylesheet();
    load_cookie_stylesheet();
    //load_darkmode_stylesheet();
    load_version_history_stylesheet();
    load_update_notification_stylesheet();
}