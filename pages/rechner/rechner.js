var comp_string = "";

function r_numbut_clicked(but){
    console.log(but.getAttribute("value"));
    comp_string += but.getAttribute("value");
    document.getElementById("r_result_container").innerHTML = comp_string;
    console.log(comp_string);
}

function compute(){
    document.getElementById("r_result_container").innerHTML = eval(comp_string);
    comp_string = "";
}