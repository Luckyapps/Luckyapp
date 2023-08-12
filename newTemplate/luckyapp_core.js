scriptLoader_("https://luckyapps.github.io/Lucky_library/luckylibrary.js");

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').then(function(registration){registration.update()})}; //experimenteller Offlinemodus

var luckyapp_core = {
    modules:{
        preset: { //Initiiert die Seite
            active: true,
            files: {
                js_main: "stylesheets/page/preset.js"
            },
            start: async function(){
                try{
                    await start_preset_stylesheet();
                    //await cssLoader_(luckyapp_core.page_config.source + luckyapp_core.modules.preset.files.css_[0]);
                    luckyapp_core.load_check();
                }
                catch(err){
                    console.error("No preset");
                    luckyapp_core.load_error(err, "Es ist kein Preset-type unter luckyapp_core.page_config.modules.preset.type angegeben.");
                }
            }
        },
        navbar: {
            active: page_config_init.modules.navbar.active,
            links: [
                {
                    text: "Home",
                    href: "index.html"
                },{
                    text: "Fastlink",
                    href: "pages/fastlink/index.html"
                },{
                    text: "Musik",
                    href: "pages/musik/index.html"
                },{
                    text: "Test",
                    href: "pages/test/index.html"
                },{
                    text: "Tools",
                    href: "pages/tools/index.html"
                },{
                    text: "Rechner",
                    href: "pages/rechner/index.html"
                },{
                    text: "News",
                    href: "pages/news/index.html"
                },{
                    text: "APIs und Tests",
                    href: "pages/apitest/index.html"
                }
            ],
            files: {
                js_main: "stylesheets/navbar/navbar.js",
                css: ["stylesheets/navbar/navbar.css"]
            },
            start: async function(){
                try{
                    await start_navbar_stylesheet();
                    luckyapp_core.load_check();
                }catch(err){
                    luckyapp_core.load_error(err, "Navbar error");
                }
            }
        },
        content: { //Sorgt für die Einrichtung vom Content
            active: true,
            files: {
                js_main: "stylesheets/content/content.js",
                css: ["stylesheets/content/content.css"]
            },
            start: async function(){
                try{
                    await start_content_stylesheet();
                    luckyapp_core.load_check();
                }catch(err){
                    luckyapp_core.load_error(err, "Content Error");
                }
            }
        },
        footer: {
            active: page_config_init.modules.footer.active,
            links: [
                {
                    text: "Impressum",
                    href: "index.html"
                },{
                    text: "Entwicklung",
                    href: "pages/fastlink/index.html"
                },{
                    text: "Template",
                    href: "pages/template.html"
                },{
                    text: "Generator",
                    href: "pages/generate/generate.html"
                }
            ],
            files: {
                js_main: "stylesheets/footer/footer.js",
                css: ["stylesheets/footer/footer.css"]
            },
            start: async function(){
                try{
                    await start_footer_stylesheet();
                    luckyapp_core.load_check();
                }catch(err){
                    luckyapp_core.load_error(err, "Footer error");
                }
            }
        },
        version_history: {
            active: page_config_init.modules.version_history.active,
            files: {
                js_main: "stylesheets/version_history/version_history.js",
                css: ["stylesheets/version_history/version_history.css"]
            },
            start: async function(){
                await load_version_history_stylesheet();
                luckyapp_core.load_check();
            }
        },
        updates: {
            active: page_config_init.modules.updates.active,
            updatelists: {
                luckyapp: {}
            },
            info_window_text: "Es wurden einige Änderungen vorgenommen:",
            info_window_signature: '<hr style="border:1px solid black; width:15%">Wenn Sie einen Fehler/Bug gefunden haben, schreiben Sie uns gerne unter <a href="mailto:thebuissnescreeper@gmail.com">thebuissnescreeper@gmail.com</a>',
            trigger: false,
            files: {
                js_main: "stylesheets/updates/updates.js",
                css: ["stylesheets/updates/updates.css"],
                js: ["stylesheets/updates/updatelist.js"]
            },
            start: async function(){
                await start_updates_stylesheet();
                luckyapp_core.load_check();
            }
        },
        fileloader: {
            active: page_config_init.modules.fileloader.active,
            files: page_config_init.modules.fileloader.files,
            exec_time:0,
            load: async function(funcname){
                window[funcname]();
                console.warn("[Luckyapp_core.modules.fileloader] '"+ funcname +"()' geladen.");
            },
            start: async function(){
                var funclist = luckyapp_core.page_config.modules.fileloader.functions;
                if(funclist != undefined){
                    if(luckyapp_core.loaded == true){
                        /*for(i=0;i<funclist.length;i++){
                            await window[funclist[i]]();
                        }*/
                        await funclist.forEach(function(src){luckyapp_core.modules.fileloader.load(src)});
                        console.warn("[Luckyapp_core.modules.fileloader] Alle Funktionen geladen.");
                    }else{
                        if(luckyapp_core.modules.fileloader.exec_time == 0){
                            luckyapp_core.load_check();
                            luckyapp_core.modules.fileloader.exec_time = 1;
                        }
                        await sleep(1);
                        luckyapp_core.modules.fileloader.start();
                    }
                }else{
                    luckyapp_core.load_check();
                }
            }
        },
        window_bar: {
            active: true,
            files: {
                js_main: "stylesheets/window_bar/window_bar.js",
                css: ["stylesheets/window_bar/window_bar.css"]
            },
            start: async function(){
                await start_window_bar_stylesheet();
                luckyapp_core.load_check();
            }
        },
        error: {
            active: true,
            files: {
                js_main: "stylesheets/error/error.js",
                css: ["stylesheets/error/error.css"]
            },
            start: async function(){
                await start_error_stylesheet();
                luckyapp_core.load_check();
            }
        },
        /*news: {
            active: page_config_init.modules.news.active,
            files: {
                js_main: "stylesheets/news/news.js",
                js: page_config_init.modules.news.source,
                css: ["stylesheets/news/news.css"]
            },
            start: async function(){
                await start_news_stylesheet();
                luckyapp_core.load_check();
            }
        },*/
        cookies: {
            active: true,
            files: {
                js_main: "stylesheets/cookies/cookies.js",
                css: ["stylesheets/cookies/cookies.css"]
            },
            text:"Bei Nutzung der Website stimmen Sie zu, dass die Website notwendige technische Nutzerdaten (z.B. Darkmode-Einstellungen, Cookieauswahl, Favoriten, Einstellungen) lokal im Browser speichert.",
            start: async ()=>{
                await init_cookies_stylesheet();
                luckyapp_core.load_check();
            }
        }
    },
    page_config: page_config_init,
    load_check: async function(source){
        load_status++;
        /*console.log("Modules to load: "+ loaded_modules_count);
        console.log("Modules loaded: "+ load_status);
        console.log(load_status +"/"+ loaded_modules_count +" Module geladen");*/
        document.getElementById("bar").style.width = (100/loaded_modules_count ) * load_status +"%";
        await sleep(parseFloat(window.getComputedStyle(document.getElementById("bar")).getPropertyValue("transition-Duration"))*1000);
        if(load_status >= (loaded_modules_count)){
            document.getElementById("wall").style.display = "none";
            document.getElementsByTagName('html')[0].style.overflow = "";
            if(luckyapp_core.loaded){
            }else{
                luckyapp_core.loaded = true;
                console.warn("Fertig geladen");
            }
        }
    },
    load_error: function(event, message){
        if(event != undefined){
            console.log(event);
            try{
                error_show("Ein Fehler ist aufgetreten. Bitte überprüfe deine Internetverbindung. Sollte das Problem dadurch nicht behoben werden, bitte <a href='mailto:thebuissnesscreeper@gmail.com?subject=Luckyapp Fehlermeldung&amp;body="+ event.message +"%0A%0A"+ event.error.message +"%0A%0A"+ event.error.stack +"'>das Problem Melden</a>");
            }catch{};
            console.error("[LUCKYAPP LOAD ERROR Message] "+ message);
            document.getElementById("ball_container").innerHTML += "<p style='color:red; font-family: calibri; text-align:center'>Ein Fehler ist aufgetreten</p>"
            +"<p style='font-family: calibri; color:white; text-align:center'>Sie können das Laden der Seite erzwingen (die Seite ist dann unvollständig geladen) </p><button style='cursor:pointer' onclick='luckyapp_core.load_check(); console.warn(`Die Seite wird zwangsweise angezeigt`)'>Hier drücken, um die Seite zwangsweise zu laden.</button>";
        }else{
            //error_show("Ein Fehler ist aufgetreten: "+ message);
            document.getElementById("ball_container").innerHTML += "<p style='color:red; font-family: calibri; text-align:center'>Ein Fehler ist aufgetreten: "+ message +"</p>"
            +"<p style='font-family: calibri; color:white; text-align:center'>Sie können das Laden der Seite erzwingen (die Seite ist dann unvollständig geladen) </p><button style='cursor:pointer' onclick='luckyapp_core.load_check(); console.warn(`Die Seite wird zwangsweise angezeigt`)'>Hier drücken, um die Seite zwangsweise zu laden.</button>";
        }
    }
}

window.addEventListener("load", load_luckyapp_core);

window.addEventListener("error", luckyapp_core.load_error);

var loaded_modules_count = 0, load_status = 0;

function load_luckyapp_core(){
    document.getElementById("page_config_script").remove();
    load_meta();
    /*if(!luckyapp_core.page_config.modules.preset.active){
        loaded_modules_count++;
        luckyapp_core.load_error("Das Preset Modul unter luckyapp_core.page_config.modules.preset ist deaktiviert");
    }*/
    luckyapp_core.modules.keylist = Object.keys(luckyapp_core.modules);
    for(i=0;i<luckyapp_core.modules.keylist.length;i++){
        if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].active){ //Wenn modul aktiv
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js_main){
                loaded_modules_count++;
                scriptLoader(luckyapp_core.page_config.source + luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js_main, luckyapp_core.modules[luckyapp_core.modules.keylist[i]].start);
            }
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js){ //Wenn js
                luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js.forEach(function(src){loaded_modules_count++});
                luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js.forEach(function(src){scriptLoader(luckyapp_core.page_config.source + src, luckyapp_core.load_check)});
            }
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.css){ //Wenn css
                luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.css.forEach(function(src){loaded_modules_count++});
                luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.css.forEach(function(src){cssLoader_(luckyapp_core.page_config.source + src, luckyapp_core.load_check)});
            }
        }
    }
}

function load_meta(){
    if(luckyapp_core.page_config.modules.meta.active){
        loaded_modules_count++;
        if(luckyapp_core.page_config.modules.meta.html_embed){
            document.getElementsByTagName("head")[0].innerHTML = ""
                +'<link rel="icon" href="'+ get_link(luckyapp_core.page_config.modules.meta.icon.href) +'" type="'+ luckyapp_core.page_config.modules.meta.icon.type +'">'
                +'<link rel="apple-touch-icon" href="'+ get_link(luckyapp_core.page_config.modules.meta.apple_icon) +'">'
                +'<meta name="theme-color" content="'+ luckyapp_core.page_config.modules.meta.theme_color +'">'
                +'<meta charset="'+ luckyapp_core.page_config.modules.meta.charset +'">'
                +'<meta name="viewport" content="'+ luckyapp_core.page_config.modules.meta.viewport +'">'
                +'<title>'+ luckyapp_core.page_config.modules.meta.title +'</title>'
                +'<link href="'+ get_link("style.css") +'" rel="stylesheet" type="text/css" />';
        }else{
            var meta_links = document.getElementsByTagName("link");
            var meta_metas = document.getElementsByTagName("meta");
            document.getElementsByTagName("title")[0].innerHTML = luckyapp_core.page_config.modules.meta.title;

            for(i=0;i<meta_links.length;i++){
                if(meta_links[i].rel == "icon"){
                    meta_links[i].href = get_link(luckyapp_core.page_config.modules.meta.icon.href);
                    meta_links[i].type = luckyapp_core.page_config.modules.meta.icon.type;
                }else if(meta_links[i].rel == "apple-touch-icon"){
                    meta_links[i].href = get_link(luckyapp_core.page_config.modules.meta.apple_icon);
                }else if(meta_metas[i]){
                    if(meta_metas[i].name  == "description"){
                        meta_metas[i].content = luckyapp_core.page_config.modules.meta.description;
                    }else if(meta_metas[i].name  == "theme-color"){
                        meta_metas[i].content = luckyapp_core.page_config.modules.meta.theme_color;
                    }else if(meta_metas[i].name  == "viewport"){
                        meta_metas[i].content = luckyapp_core.page_config.modules.meta.viewport;
                    }
                }
            } 
        }
        luckyapp_core.load_check();
    }
}

function get_link(absolute_link){
    return luckyapp_core.page_config.source + absolute_link;
}

async function html_add(content){ //Add HTML to body
    var html_content = content;
    html_content = await createHTML(html_content);
    await document.body.appendChild(html_content);
}

function Werteliste (querystring) {
    if (querystring == '') return;
    var wertestring = querystring.slice(1);
    var paare = wertestring.split("&");
    var paar, name, wert;
    for (var i = 0; i < paare.length; i++) {
      paar = paare[i].split("=");
      name = paar[0];
      wert = paar[1];
      name = unescape(name).replace("+", " ");
      wert = unescape(wert).replace("+", " ");
      this[name] = wert;
    }
}
var url_data = new Werteliste(location.search);



function cssLoader_(file, callback){ //Ein CSS stylesheet einbetten
    var link = document.createElement("link");
    link.href = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
    link.onload = function(){
        if(typeof(callback) == "function"){
            callback();
        }
    }
}

async function scriptLoader_(path, callback){ //Ein JS script einbetten
    var script = document.createElement('script');
    script.type = "text/javascript";
    //script.async = true;
    script.src = path;
    script.onload = function(){  
      if(typeof(callback) == "function"){
        callback();
      }
    }
    try
    {
      var scriptOne = document.getElementsByTagName('script')[0];
      scriptOne.parentNode.insertBefore(script, scriptOne);
    }
    catch(e)
    {
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }


//Subpage Manager (Buttoncontrol)
window.addEventListener("popstate", (event) => {
    //conditions (Wenn button gedrück => und ... dann...)
    /*==> if(n_flyin_state == "open"){
        n_flyin_close();
        window.history.forward(1);
    }*/
});

function openSubpage(name){
    if(location.search == ""){
        var url = "?"+name;
    }else{
        var url = location.search +"&"+name;
    }
    history.pushState({ page: 1 }, name, url);
}
