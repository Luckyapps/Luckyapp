//works with https://github.com/muxinc/hls-video-element
var link = document.createElement("script");
link.type = "module";
link.src = "https://unpkg.com/hls-video-element@0.0";
document.getElementsByTagName("head")[0].appendChild(link);

window.addEventListener("load",async()=>{
    var ijf = await chrome.storage.sync.get(["ijf"]).then((result) =>{return result.ijf});
    if(ijf == undefined){
        chrome.storage.sync.set({"ijf": true});
    }

    if(window.location.host == "judo.ijf.org"){
        start_ijf_script();
    }
});

window.addEventListener("resize",()=>{
    if(window.location.host == "judo.ijf.org"){
        start_ijf_script();
    }
})

async function start_ijf_script(){
    var ijf = await chrome.storage.sync.get(["ijf"]).then((result) =>{return result.ijf});
    if(ijf == true){
        document.getElementsByClassName("video16_9")[0].innerHTML = '<hls-video style="width:100%;height:'+ window.getComputedStyle(document.getElementsByClassName("video16_9")[0],null).getPropertyValue("height") +'" src="https://videodelivery.net/3c241a45d30225df9ba14f204dca994c/manifest/video.m3u8" controls></hls-video>';
    }
}