function start1(){
    const fGewichtAuto = 2000;
    const fGewichtHuelle = 0.5;
    let iAutosproLadung = 12;
    let fGewichtLadung = 0;
    let iAnzahlAutos = 51013;
    let iAnzahlVerladen = 0;
    let iAnzahluebrig = 0;
    let iAnzahlLadungen = 0;
        console.log("Dieses Programm erechnet aus einem Autobestand Y, wie viele Ladungen einer Groesse X pro Jahr benoetigt werden,\n um alle Fahrzeuge zu verladen\n\n");
        console.log("Wie viele Autos passen in eine Ladung?\n");
    iAutosproLadung = parseInt(prompt());
        console.log("Wie viel wiegt eine Huelle [in KG]?\n");
    fGewichtHuelle = parseFloat(prompt());
        console.log("Wie viel wiegt ein Auto [in KG]?\n");
    fGewichtAuto = parseFloat(prompt());
        console.log("Wie viele Autos sind verfuegbar?\n");
    iAnzahlAutos = parseInt(prompt());
    fGewichtLadung = iAutosproLadung * (fGewichtHuelle + fGewichtAuto);
    iAnzahlLadungen = Math.floor(iAnzahlAutos / iAutosproLadung);
}

async function start1_1(){
    document.getElementById("tb2").style.borderColor = "unset";
    document.getElementById("tb1").style.borderColor = "red";
    var fGewichtAuto = 2000;
    var fGewichtHuelle = 0.5;
    let iAutosproLadung = 12;
    let fGewichtLadung = 0;
    let iAnzahlAutos = 51013;
    let iAnzahlVerladen = 0;
    let iAnzahluebrig = 0;
    let iAnzahlLadungen = 0;
        console_log("Dieses Programm erechnet aus einem Autobestand Y, wie viele Ladungen einer Groesse X pro Jahr benoetigt werden,\n um alle Fahrzeuge zu verladen\n\n");
        console_log("Wie viele Autos passen in eine Ladung?\n");
    iAutosproLadung = await keyinput();
        console_log("Wie viel wiegt eine Huelle [in KG]?\n");
    fGewichtHuelle = await keyinput();
        console_log("Wie viel wiegt ein Auto [in KG]?\n");
    fGewichtAuto = await keyinput();
        console_log("Wie viele Autos sind verfuegbar?\n");
    iAnzahlAutos = await keyinput();
    fGewichtLadung = iAutosproLadung * (fGewichtHuelle + fGewichtAuto);
    iAnzahlLadungen = Math.floor(iAnzahlAutos / iAutosproLadung);
}