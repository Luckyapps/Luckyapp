function file_create(script, filetype, filename, linkdivid){ // linkdivid ist ein Divelement, in welches ein Downloadlink eingebettet wird.
    if(filetype == "json"){
        var jsonse = JSON.stringify(script);
        var blob = new Blob([jsonse], {type: "application/html"});
    }else{
        var blob = new Blob([script.toString()], {type: "text/plain"});
        console.log(blob);
    }
    var url  = URL.createObjectURL(blob);
    console.log(url);
    
    var a = document.createElement('a');
    a.href        = url;
    a.download    = filename +"."+ filetype;
    a.textContent =  filename +"."+ filetype;
    
    document.getElementById(linkdivid).appendChild(a); 
}

function gentest(){
var requestURL = "https://luckyapps.github.io/Luckyapp/pages/temp.html";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();
  request.onload = function() {
    data = request.response;
    console.log(data);
    return data;
  }
    //file_create({test:"GOGOGOG"}, "html", "TESTFILE", "json");
}

async function generator_run(){
    var page_config_init_gen = {
        source: "../",
        modules:{
            meta: {
                active: window.meta_active.checked,
                html_embed: window.meta_html_embed.checked,
                title: window.meta_title.value,
                apple_icon: window.meta_apple_icon,
                icon: {
                    href: "images/icons/icon-512x512.png",
                    type: "image/png",
                },
                description: "Beschreibung",
                theme_color: "black",
                viewport: "width=device-width",
                charset: "utf-8",
                manifest: "manifest.json"
            },
            header: {
                active: true,
                title: "Luckyapp5",
                subtitle: "Redesign"
            },
            navbar: {
                active: true,
                custom_links: false,
                links: [
                    {
                        text: "Text, der erscheinen Soll",
                        href: "absolute adresse",
                        active: true
                    }
                ]
            },
            preset: {
                active: true, //Muss true
                type: "grid", //false, zum deaktivieren -->error ["grid"]false
                prop: "2columns"
            },
            content: {
                active: true,
            },
            footer: {
                active: true,
                custom_links: false,
                links: [
                    {
                        text: "Text, der erscheinen Soll",
                        href: "absolute adresse"
                    }
                ]
            },
            version_history: {
                active: true,
                watermark: false
            },
            updates: {
                active: true,
                updatelist: false,
                updatebanner: true
            },
            fileloader: {
                active: true,
                files: {}
            },
            error: {
                active: true,
            },
            news: {
                active: true,
                source: ["stylesheets/news/newslist.js"],
                //list: "", enthält die Id des listencontainers. Weglassen wenn nicht vorhanden
            }
        },
        appearance: {
            font_style: "calibri",
            theme: "light"
        }
    }

    if(window.justscript.checked == true){
        file_create(page_config_init_gen, "json", "page_config_init_gen", "json");
    }else{
        var cont2 = await data_get_("https://luckyapps.github.io/Luckyapp/pages/tmp.html");
        var file_content = '<!DOCTYPE html><html><head></head><body><script id="page_config_script">var page_config_init = '+ JSON.stringify(page_config_init_gen) + cont2;
        file_create(file_content, "html", "pagename", "json");
    }
}

function get_add_(adress){ //Hilfsfunktion gehört zu data_get()
    return new Promise(resolve => {
    var requestURL = adress;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      var data_temp2 = request.response;
      resolve(data_temp2);
    }
  });
}

async function data_get_(adress){ //Api Abfrage zurückgeben
     var data_temp = await get_add_(adress);
     return data_temp;
}