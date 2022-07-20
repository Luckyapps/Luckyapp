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
                    await cssLoader_(luckyapp_core.modules.preset.files.css_[0]);
                    luckyapp_core.load_check();
                }else{
                    console.error("No preset");
                    luckyapp_core.load_check();
                }
            }
        }
    },
    page_config: page_config_init,
    load_check: async function(){
        load_status++;
        /*console.log("Modules to load: "+ loaded_modules_count);
        console.log("Modules loaded: "+ load_status);*/
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
    }
}

window.addEventListener("load", load_luckyapp_core);

var loaded_modules_count = 0, load_status = 0;

function load_luckyapp_core(){
    luckyapp_core.modules.keylist = Object.keys(luckyapp_core.modules);
    for(i=0;i<luckyapp_core.modules.keylist.length;i++){
        if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].active){ //Wenn modul aktiv
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js_main){
                loaded_modules_count++;
                scriptLoader(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js_main, luckyapp_core.modules[luckyapp_core.modules.keylist[i]].start);
            }
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js){ //Wenn js
                loaded_modules_count++;
                luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.js.forEach(function(src){scriptLoader(src, luckyapp_core.load_check)});
            }
            if(luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.css){ //Wenn css
                loaded_modules_count++;
                luckyapp_core.modules[luckyapp_core.modules.keylist[i]].files.css.forEach(function(src){cssLoader_(src, luckyapp_core.load_check)});
            }
        }
    }
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