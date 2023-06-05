function console_log(text){
    document.getElementById("output").innerHTML = String(text);
}

var butstate = false;

window.addEventListener("keydown",(evt)=>{
    if(evt.key=="Enter"){
        butstate = true;
    }
})

async function keyinput(){
    while(butstate == false){
        await sleep(1000);
    }
    butstate = false;
    console_log(document.getElementById("input").value);
    document.getElementById("verlauf").innerHTML += "<div>"+ document.getElementById("input").value +"</div>";
    document.getElementById("input").value = "";
    return document.getElementById("input").value;
}

function sleep(ms) { //Sleep funktion, wird ausgelöst mit: await sleep(ms) !!Aufrufende funktion muss asynchron sein!!
  return new Promise(resolve => setTimeout(resolve, ms));
}