scriptLoader_("https://luckyapps.github.io/Lucky_library/luckylibrary.js");

var luckyapp_core = {
    modules:{
        header: {
            active: page_config_init.modules.header.active,
            files: {
                js_main: "stylesheets/header/header.js",
                css: ["stylesheets/header/header.css"]
            },
            start: async function(){
                await start_header_stylesheet();
                luckyapp_core.load_check();
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
                    text: "Test",
                    href: "pages/test/index.html"
                }
            ],
            files: {
                js_main: "stylesheets/navbar/navbar.js",
                css: ["stylesheets/navbar/navbar.css"]
            },
            start: async function(){
                await start_navbar_stylesheet();
                luckyapp_core.load_check();
            }
        },
        preset: {
            active: page_config_init.modules.preset.active,
            files: {
                js_main: "stylesheets/page/grid.js",
                js: ["stylesheets/page/preset.js"],
                css_: ["stylesheets/page/grid.css"]
            },
            start: async function(){
                if(luckyapp_core.page_config.modules.preset.type == "grid"){
                    await start_grid_stylesheet();
                    await cssLoader_(luckyapp_core.page_config.source + luckyapp_core.modules.preset.files.css_[0]);
                    luckyapp_core.load_check();
                }else{
                    console.error("No preset");
                    luckyapp_core.load_error(undefined, "Es ist kein Preset-type unter luckyapp_core.page_config.modules.preset.type angegeben.");
                }
            }
        },
        content: {
            active: page_config_init.modules.content.active,
            files: {
                js_main: "stylesheets/content/content.js",
                css: ["stylesheets/content/content.css"]
            },
            start: async function(){
                await start_content_stylesheet();
                luckyapp_core.load_check();
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
                }
            ],
            files: {
                js_main: "stylesheets/footer/footer.js",
                css: ["stylesheets/footer/footer.css"]
            },
            start: async function(){
                await start_footer_stylesheet();
                luckyapp_core.load_check();
            }
        },
        version_history: {
            active: true,
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
            start: function(){
                var funclist = luckyapp_core.page_config.modules.fileloader.functions;
                console.log(funclist);
                if(funclist != undefined){
                    for(i=0;i<funclist.length;i++){
                        window[funclist[i]]();
                    }
                }
                luckyapp_core.load_check();
            }
        },  
    },
    page_config: page_config_init,
    load_check: async function(source){
        load_status++;
        /*console.log("Modules to load: "+ loaded_modules_count);
        console.log("Modules loaded: "+ load_status);
        console.log(load_status +"/"+ loaded_modules_count +" Module geladen");*/
        document.getElementById("bar").style.width = (100/loaded_modules_count ) * load_status +"%";
        await sleep(parseFloat(window.getComputedStyle(document.getElementById("bar")).getPropertyValue("transition-Duration"))*1000);
        if(load_status == (loaded_modules_count)){
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
            document.getElementById("ball_container").innerHTML += "<p style='color:red; font-family: calibri; text-align:center'>Ein Fehler ist aufgetreten</p>"
            +"<p style='font-family: calibri; color:white; text-align:center'>Sie können das Laden der Seite erzwingen (die Seite ist dann unvollständig geladen) </p><button style='cursor:pointer' onclick='luckyapp_core.load_check(); console.warn(`Die Seite wird zwangsweise angezeigt`)'>Hier drücken, um die Seite zwangsweise zu laden.</button>";
        }else{
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
    if(!luckyapp_core.page_config.modules.preset.active){
        loaded_modules_count++;
        luckyapp_core.load_error("Das Preset Modul unter luckyapp_core.page_config.modules.preset ist deaktiviert");
    }
    luckyapp_core.modules.keylist = Object.keys(luckyapp_core.modules);
    for(i=0;i<luckyapp_core.modules.keylist.length;i++){
        if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].active){ //Wenn modul aktiv
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js_main){
                loaded_modules_count++;
                scriptLoader(luckyapp_core.page_config.source + luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js_main, luckyapp_core.modules[luckyapp_core.modules.keylist[i]].start);
            }
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js){ //Wenn js
                loaded_modules_count++;
                luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js.forEach(function(src){scriptLoader(luckyapp_core.page_config.source + src, luckyapp_core.load_check)});
            }
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.css){ //Wenn css
                loaded_modules_count++;
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