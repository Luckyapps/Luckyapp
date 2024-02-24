function startAudio(){
}

var sources = {
    list: {
        wdr2:{
            name:"WDR2",
            description:"WDR2 Popsender",
            source:"https://wdr-wdr2-suedwestfalen.icecastssl.wdr.de/wdr/wdr2/suedwestfalen/mp3/128/stream.mp3",
            main: true,
            radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr2.txt",
            type: "radio",
            image: {
                src: "https://luckyapps.github.io/Musik/media/images/wdr2.png",
                sizes: "400x400",
                type: "image/png"
            }
        },
        wdr3:{
            name:"WDR3",
            description:"Klassik und Kultur",
            source:"https://wdr-wdr3-live.icecastssl.wdr.de/wdr/wdr3/live/mp3/128/stream.mp3",
            radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr3.txt",
            type: "radio",
            image: {
                src: "https://luckyapps.github.io/Musik/media/images/wdr3.png",
                sizes: "448x448",
                type: "image/png"
            }
        },
        wdr4:{
            name:"WDR4",
            description:"Oldies",
            source:"https://wdr-wdr4-live.icecastssl.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3",
            radiotext_url: "https://www.wdr.de/radio/radiotext/streamtitle_wdr4.txt",
            type: "radio",
            image: {
                src: "https://luckyapps.github.io/Musik/media/images/wdr4.png",
                sizes: "180x180",
                type: "image/png"
            }
        },
        loop1:{
            name: "LOOP1",
            description: "Ein Loop für zwischendurch.",
            source: "audio/LOOP 1.wav",
            type: "audio/wav"
        },
        loop4:{
            name: "LOOP4",
            description: "Ein Loop für zwischendurch.",
            source: "audio/LOOP 4.wav",
            type: "audio/wav"
        }
    }
}

class audioObject{
    constructor(source,name,description,type,image, data){
        this.source = source;
        this.name = name;
        this.description = description;
        this.type = type;
        this.image = image;
        try{
            this.data = data;
        }catch(err){}
    }
}

var player = {
    currentAudio: {},
    audioPlaying: false,
    playbuttons: [],
    playbars: [],
    audios: [],
    audioList: {
        audios: sources.list,
        keylist: Object.keys(sources.list)
    },
    playerSettings: {
        settings_version: 0
    },
    settings_storagename: "luckyappMusicApi",
    add: function(id, source, data){
        this.audioList.keylist.push(id);
        this.audioList.audios[id] = new audioObject(source,data.name,data.description,data.type,data.image,data);
        /*resetPlaybuttons();
        loadPlaybuttons();*/
        reloadPlaybuttons();
    },
    check: function(id){
        for(i=0;i<this.audioList.keylist.length;i++){
            if(this.audioList.keylist[i] == id){
                return true;
            }
        }
        return false;
    },
    play: function(audio_id){
        if(!player.audioList.audios[audio_id].audio){
            player.audioList.audios[audio_id].audio = new Audio(player.audioList.audios[audio_id].source);
            player.audios.push(player.audioList.audios[audio_id].audio);
            //player.audioList.audios[audio_id].audio.play();
            player.audioList.audios[audio_id].audio.addEventListener("play", (evt)=>{player.audioPlaying = true;if(player.audioList.audios[audio_id].buttons){playbuttons.update(player.audioList.audios[audio_id].buttons);}});
            player.audioList.audios[audio_id].audio.addEventListener("pause", (evt)=>{player.audioPlaying = false;if(player.audioList.audios[audio_id].buttons){playbuttons.update(player.audioList.audios[audio_id].buttons);}});
            player.audioList.audios[audio_id].audio.addEventListener("ended", (evt)=>{player.audioPlaying = false;if(player.audioList.audios[audio_id].buttons){playbuttons.update(player.audioList.audios[audio_id].buttons);}});
            player.audioList.audios[audio_id].audio.addEventListener("timeupdate", (evt)=>{if(player.audioList.audios[audio_id].playbars){playbars.update(player.audioList.audios[audio_id]);}});
        }
        var audio = player.audioList.audios[audio_id].audio;
        if(player.audioList.audios[audio_id].type == "radio"){
            audio.src = audio.src;
        }
        audio.play();
        this.audioPlaying = true;
        this.currentAudio = player.audioList.audios[audio_id];
        this.currentAudio.id = audio_id;
        if(player.audioList.audios[audio_id].buttons){
            playbuttons.update(player.audioList.audios[audio_id].buttons);
        }
        loadMediaInterface(audio_id);
    },
    pause: function(audio_id){
        var audio = player.audioList.audios[audio_id].audio;
        audio.pause();
        this.audioPlaying = false;
        if(player.audioList.audios[audio_id].buttons){
            playbuttons.update(player.audioList.audios[audio_id].buttons);
        }
    },
    stop: function(audio_id){
        if(audio_id != undefined){
            var audio = player.audioList.audios[audio_id].audio;
        }else{
            var audio = player.currentAudio.audio;
        }
        audio.pause();
        audio.currentTime = 0;
    },
    stopAll: function(){
        this.audios.forEach((elem)=>{
            elem.pause();
        });
        this.audioPlaying = false;
    },
    toggle: function(audio_id){
        if(this.audioPlaying){
            if(audio_id == this.currentAudio.id){
                this.pause(audio_id);
            }else{
                this.pause(this.currentAudio.id);
                this.play(audio_id);
            }
        }else{
            this.play(audio_id);
        }
        /*try{
            refreshPlaybar(player.currentAudio);
        }
        catch{
            console.log("RefreshPlaybar nicht gesetzt oder keine Playbar vorhanden.");
        }*/
        //console.log(player);
    },
    changeProgress: function(progress_factor, audio_id){ //Progess als Faktor (z.B. 0.74)
        if(audio_id == player.currentAudio.id){
            player.currentAudio.audio.currentTime = player.currentAudio.audio.duration * progress_factor;
        }else{
            //console.log(`Das zur Playbar gehörende Audio ${audio_id} ist aktuell nicht das aktive Audio.`);
            player.toggle(audio_id);
            if(0<player.currentAudio.audio.readyState){
                player.currentAudio.audio.currentTime = player.currentAudio.audio.duration * progress_factor;
            }else{
                player.currentAudio.audio.onloadedmetadata = function(){
                    player.currentAudio.audio.currentTime = player.currentAudio.audio.duration * progress_factor;
                }
            }
        }
    },
    playlist:{
        getNextSong: function(){
            var nowPlaying = player.playlist_init[0];
            player.playlist_init.shift();
            return nowPlaying;
        },
        content: ["loop1", "loop2"]
    },
    settings: {
        load: function(){
            var storage = player.settings_storagename;
            if(localStorage.getItem(storage)){
                var settings = JSON.parse(localStorage.getItem(storage));
                if(settings.settings_version != player.playerSettings.settings_version){
                    player.settings.save();
                    console.warn("Settings Aktualisiert");
                }else{
                    player.playerSettings = settings;
                }
            }else{
                console.log(player.playerSettings);
                player.settings.save();
            }
        },
        save: function(){
            var storage = player.settings_storagename;
            localStorage.setItem(storage, JSON.stringify(player.playerSettings));
        },
        get: function(){
            return player.playerSettings;
        },
        set: function(setting, value){
            player.settings.load();
            player.playerSettings[setting] = value;
            player.settings.save();
        }
    }
}

var playbuttons = {
    update: function(buttons){
        for(i=0;i<buttons.length;i++){
            if(player.audioPlaying){
                buttons[i].innerHTML = "||";
            }else{
                buttons[i].innerHTML = ">";
            }
        }
    },
    updateAll: function(){ //Experimentell
        var buttons = player.playbuttons;
        for(i=0;i<buttons.length;i++){
            if(player.audioPlaying){
                for(j=0;j<player.currentAudio.buttons.length;j++){
                    if(buttons[i] == player.currentAudio.buttons[j]){
                        buttons[i].innerHTML = "||";
                        break;
                    }else{
                        buttons[i].innerHTML = ">";
                    }
                }
            }else{
                buttons[i].innerHTML = ">";
            }
        }
    }
}

var playbars = {
    update: function(audioElem){
        var audioTag = audioElem.audio;
        for(i=0;i<audioElem.playbars.length;i++){
            audioElem.playbars[i].style.width = (100 / audioTag.duration) * audioTag.currentTime+"%";
        }
    },
    updateAll: function(){
        for(i=0;i<player.audioList.keylist.length;i++){
            var elem = player.audioList.audios[player.audioList.keylist[i]];
            if(typeof elem.audio != "undefined"){
                var audioDuration = elem.audio.duration;
                var audioPlaystate = player.audioList.audios[player.audioList.keylist[i]].audio.currentTime;
                var progress = 100 / audioDuration * audioPlaystate;
                if(elem.playbars){
                    for(j=0;j<elem.playbars.length;j++){
                        elem.playbars[j].style.width = progress +"%";
                    }
                }
            }
        }
    }
}

function loadPlaybuttons(){
    player.settings.load();
    var playbuttons = document.getElementsByClassName("playbutton");
    for(i=0;i<playbuttons.length;i++){
        if(playbuttons[i].getAttribute("data-audio")){
            for(j=0;j<player.audioList.keylist.length;j++){ 
                if(playbuttons[i].getAttribute("data-audio") == player.audioList.keylist[j]){ //Wenn es für data-audio ein Audioelement gibt.
                    player.playbuttons.push(playbuttons[i]);
                    if(player.audioList.audios[player.audioList.keylist[j]].buttons){
                        player.audioList.audios[player.audioList.keylist[j]].buttons.push(playbuttons[i]);
                    }else{
                        player.audioList.audios[player.audioList.keylist[j]].buttons = [playbuttons[i]];
                    }
                }
            }
        }
    }
    for(i=0;i<player.playbuttons.length;i++){
        player.playbuttons[i].addEventListener("click",playbuttonclickeventlistener);
    }
    console.log(player);
    reloadPlaybars();
}
function playbuttonclickeventlistener(evt){player.toggle(evt.target.getAttribute("data-audio"))};//für Playbuttons eventlistener

function resetPlaybuttons(){
    for(i=0;i<player.playbuttons.length;i++){
        player.playbuttons[i].removeEventListener("click", playbuttonclickeventlistener);
    }
    player.playbuttons = []; //Playbuttons zurücksetzen
    for(i=0;i<player.audioList.keylist.length;i++){
        if(player.audioList.audios[player.audioList.keylist[i]].buttons!=undefined){
            player.audioList.audios[player.audioList.keylist[i]].buttons = undefined;
        }
    }
}

function reloadPlaybuttons(){
    resetPlaybuttons();
    loadPlaybuttons();
    playbuttons.updateAll();
}

function loadPlaybars(){
    var playbars = document.getElementsByClassName("playbar");
    for(i=0;i<playbars.length;i++){
        if(playbars[i].getAttribute("data-audio")){
            for(j=0;j<player.audioList.keylist.length;j++){ 
                if(playbars[i].getAttribute("data-audio") == player.audioList.keylist[j]){ //Wenn es für data-audio ein Audioelement gibt.
                    player.playbars.push(playbars[i]);
                    if(player.audioList.audios[player.audioList.keylist[j]].playbars){
                        player.audioList.audios[player.audioList.keylist[j]].playbars.push(playbars[i]);
                    }else{
                        player.audioList.audios[player.audioList.keylist[j]].playbars = [playbars[i]];
                    }
                }
            }
        }
    }
    console.log(player);
    for(i=0;i<player.playbars.length;i++){
        player.playbars[i].parentElement.addEventListener("click",playbarsclickeventlistener);
    }
    console.log(player);
}
function playbarsclickeventlistener(e){
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    //console.log("x: "+ x +" | "+ "y: "+ y);
    var playbar_progress, audio_id;
    if(e.target.classList.contains("playbarContainer")){ //Klickposition unterscheiden
        var width = parseFloat(window.getComputedStyle(e.target).getPropertyValue("width"));
        playbar_progress = (1 / width) * x;
        audio_id = e.target.childNodes[0].getAttribute("data-audio");
    }else if(e.target.classList.contains("playbar")){
        var width = parseFloat(window.getComputedStyle(e.target.parentElement).getPropertyValue("width"));
        playbar_progress = (1 / width) * x;
        audio_id = e.target.getAttribute("data-audio");
    }else{
        console.warn("Playbar Klickevent Fehler: Klassennamen überprüfen");
    }
    player.changeProgress(playbar_progress, audio_id);
};//für Playbuttons eventlistener

function resetPlaybars(){
    for(i=0;i<player.playbars.length;i++){
        player.playbars[i].removeEventListener("click", playbarsclickeventlistener);
    }
    player.playbars = []; //playbars zurücksetzen
    for(i=0;i<player.audioList.keylist.length;i++){
        if(player.audioList.audios[player.audioList.keylist[i]].playbars!=undefined){
            player.audioList.audios[player.audioList.keylist[i]].playbars = undefined;
        }
    }
}

function reloadPlaybars(){
    resetPlaybars();
    loadPlaybars();
    playbars.updateAll();
}


function loadMediaInterface(audio_id, artist){
    var data = player.currentAudio;

    if(audio_id){
        data = player.audioList.audios[audio_id];
    }

    var image = {src:"https://luckyapps.github.io/Musik/media/images/logo.png", sizes:"1440x1440", type: "image/png"};

    if(data.image){
        image = data.image;
    }

    if(!data.name){
        data.name = audio_id;
    }

    if(!artist){
        artist = "Luckyapps";
    }

    navigator.mediaSession.metadata = new MediaMetadata({
        title: data.name,
        artist: artist,
        album: 'Luckyapps Media Player',
        artwork: [
            //{ src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
            //{ src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
            //{ src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
        // { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
            //{ src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
            //{ src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
            //---------------{ src: radio.current_stream.data.image.src, sizes: radio.current_stream.data.image.sizes, type: radio.current_stream.data.image.type },
            image
        ]
    });
}