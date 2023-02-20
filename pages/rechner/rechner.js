var comp_string = "", current_number = "", input_list = [], last_type = "compute", r_result_container;

var result_history = [];

var compute_history = [];

if(localStorage.getItem("result_history")){
    result_history = JSON.parse(localStorage.getItem("result_history"));
}

if(localStorage.getItem("compute_history")){
    compute_history = JSON.parse(localStorage.getItem("compute_history"));
}

window.addEventListener("keydown",(evt)=>{
    keytest(evt.key);
});

function r_numbut_clicked(but){
    var value = but.getAttribute("value");
    keytest(value);
}

function keytest(key){
    if(key == "Enter"){
        if(last_type == "compute"){
            return false;
        }
        compute();
        last_type = "compute";
    }else if(!isNaN(key) || key == "." || key == ","){
        if(key==","){
            key = ".";
        }
        last_type = "number";
        current_number += key;
        input_show();
    }else if(["+","*","-","/","h","w","(",")"].includes(key)){
        var klammer = false;
        if(key == "(" || key==")"){
            klammer = true;
        }
        if(last_type == "operator" && key != "w" && klammer != true){
            return false;
        }else if(last_type == "compute"){
            current_number = result_history[result_history.length-1];
            console.log(current_number);
        }
        if(key != "w" && key !="(" && last_type !="klammer"){
            input_list.push(parseFloat(current_number));
        }
        last_type = "operator";
        if(key==")"){
            last_type = "klammer";
        }
        input_list.push(key);
        current_number = "";
        console.log(input_list);
        input_show();
    }else if(key == "Delete"){
        input_show();
        r_result_container.innerHTML = "Los gehts!";
        input_list = [];
        current_number = "";
        last_type = "compute";
    }else if(key == "Backspace"){
        console.log(input_list);
        if(last_type == "operator"||last_type == "back"){
            input_list.pop();
        }
        current_number = "";
        last_type = "back";
        console.log(input_list);
        input_show();
    }
}

function input_show(){
    r_result_container = document.getElementById("r_result_container");
    var input = "";
    for(i=0;i<input_list.length;i++){
        if(input_list[i] == "w"){
            input += " Wurzel aus ";
        }else if(input_list[i] == "h"){
            input += " Hoch ";
        }else{
            input += input_list[i];
        }
    }
    r_result_container.innerHTML = input + current_number;
}

async function compute(recompute_pre){
    if(!recompute_pre){
        if(last_type != "operator"&&last_type!="klammer"){
            input_list.push(parseFloat(current_number));
        }
    }
    console.log(input_list);
    current_number = "";
    var ergebnis;
    var compute_list = input_list;
    var recompute = false;

    compute_history.push(input_list);
    localStorage.setItem("compute_history", JSON.stringify(compute_history));

    var klammer = false;
    for(i=0;i<compute_list.length;i++){ // Klammerdetektion
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "("){
                var indx1 = i;
                klammer = true;
            }else if(compute_list[i] == ")"){
                var indx2 = i;
                klammer = true;
            }
        }
    }

    if(klammer){ // Klammer berechnen
        /*console.log(indx1);
        console.log(indx2);
        console.log(indx2-indx1+1);
        console.log(compute_list.slice(indx1+1,indx2));
        console.log(compute_list);
        console.log(await compute2(false, compute_list.slice(indx1+1,indx2)));*/
        compute_list.splice(indx1,indx2-indx1+1,await compute2(false, compute_list.slice(indx1+1,indx2)));
        //console.log(compute_list);
    }
    
    for(i=0;i<compute_list.length;i++){ //Wurzel ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "w"){
                var erg_tmp = Math.sqrt(compute_list[i+1]);
                compute_list.splice(i,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }
        }
    }
    for(i=0;i<compute_list.length;i++){ //Hoch ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "h"){
                var erg_tmp = Math.pow(compute_list[i-1],compute_list[i+1]);
                compute_list.splice(i-1,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }
        }
    }
    for(i=0;i<compute_list.length;i++){ //Punkt vor Strich --> Mal ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "*"){
                if(compute_list[i-2] == "/"){ // Wenn erst Geteilt
                    recompute = true;
                }else{
                    var erg_tmp = compute_list[i-1] * compute_list[i+1];
                    compute_list.splice(i-1,3,erg_tmp);
                    console.log(compute_list);
                    i=0;
                }
            }
        }
    }
    for(i=0;i<compute_list.length;i++){ //Punkt vor Strich --> Geteilt ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "/"){
                if(compute_list[i-2] == "*"){ // Wenn erst Mal
                    recompute = true;
                }else{
                    var erg_tmp = compute_list[i-1] / compute_list[i+1];
                    console.log(i);
                    compute_list.splice(i-1,3,erg_tmp);
                    console.log(compute_list);
                    i=0;
                }
            }
        }
    }

    if(recompute){
        recompute = false;
        compute(true);
        return;
    }

    console.log(compute_list);
    for(i=0;i<compute_list.length;i++){ //Addieren und Subtrahieren
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "+"){
                var erg_tmp = compute_list[i-1] + compute_list[i+1];
                compute_list.splice(i-1,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }else if(compute_list[i] == "-"){
                var erg_tmp = compute_list[i-1] - compute_list[i+1];
                compute_list.splice(i-1,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }
        }
    }

    ergebnis = compute_list[0];
    result_history.push(ergebnis);
    localStorage.setItem("result_history", JSON.stringify(result_history));

    document.getElementById("r_result_container").innerHTML = ergebnis;
    compute_list = [];
    input_list = [];
}






















async function compute2(recompute_pre, equation){
    var ergebnis;
    var compute_list = equation;
    var recompute = false;

    for(i=0;i<compute_list.length;i++){ //Wurzel ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "w"){
                var erg_tmp = Math.sqrt(compute_list[i+1]);
                compute_list.splice(i,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }
        }
    }
    for(i=0;i<compute_list.length;i++){ // Hoch ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "h"){
                var erg_tmp = Math.pow(compute_list[i-1],compute_list[i+1]);
                compute_list.splice(i-1,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }
        }
    }
    for(i=0;i<compute_list.length;i++){ //Punkt vor Strich --> Mal ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "*"){
                if(compute_list[i-2] == "/"){ // Wenn erst Geteilt
                    recompute = true;
                }else{
                    var erg_tmp = compute_list[i-1] * compute_list[i+1];
                    compute_list.splice(i-1,3,erg_tmp);
                    console.log(compute_list);
                    i=0;
                }
            }
        }
    }
    for(i=0;i<compute_list.length;i++){ //Punkt vor Strich --> Geteilt ausrechnen
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "/"){
                if(compute_list[i-2] == "*"){ // Wenn erst Mal
                    recompute = true;
                }else{
                    var erg_tmp = compute_list[i-1] / compute_list[i+1];
                    console.log(i);
                    compute_list.splice(i-1,3,erg_tmp);
                    console.log(compute_list);
                    i=0;
                }
            }
        }
    }

    if(recompute){
        recompute = false;
        var ergebnis = await compute(true);
        return ergebnis;
    }

    console.log(compute_list);
    for(i=0;i<compute_list.length;i++){ //Addieren und Subtrahieren
        if(typeof(compute_list[i]) != "number"){
            if(compute_list[i] == "+"){
                var erg_tmp = compute_list[i-1] + compute_list[i+1];
                compute_list.splice(i-1,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }else if(compute_list[i] == "-"){
                var erg_tmp = compute_list[i-1] - compute_list[i+1];
                compute_list.splice(i-1,3,erg_tmp);
                console.log(compute_list);
                i=0;
            }
        }
    }

    return compute_list[0];
}