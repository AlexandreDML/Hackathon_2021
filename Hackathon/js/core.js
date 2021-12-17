var step = 0;
var pas = 5000;
var heure = "00:00";
var consomation = 0;
var production = 0;
var total = 0;
var energieNonLivre = 0;
var energieEnSurplue = 0;

var consoJounaliere = [];
var productionVerteJournaliere = [];

let ville = ["Ajaccio", 40, [0,1], 40];
let ville2 = ["Bastia", 40, [0,1], 40];
let ville3 = ["Bonifacio", 40, [0,1], 20];

let barr = ["Barrage Prunelli", 50, 0, 25, [0,1,-1]];
let barr2 = ["Barrage Golo", 50, 0, 25, [0,1,-1]];

let eolie = ["Eolienne Calvi", 25, 0, 15, [0,1,-1]];
let eolie2 = ["Eolienne Cap", 25, 0, 15, [0,1,-1]];

let centrale =["Centrale Lucciana", 50, 0, 25, [0,1,-1]];
let centrale2 =["Centrale Vazzio", 50, 0, 25, [0,1,-1]];

let interco = ["SACOI", 50, 0, 25, [0,1,-1]];

let solaire =["Panneau Porto-Veccio", 25, 0, 10, [0,1,-1]];
let solaire2 =["Panneau Bonifacio", 25, 0, 10, [0,1,-1]];

let energie = [barr, barr2, centrale, centrale2];
let conso = [ville, ville2, ville3];

var steprand = Math.random(47);
var infra = Math.random(4);

var consoJournee = [205.81,187.02,168.94,158.51,151.16,146.27,143.93,141.8,142.67,142.37,149.79,157.15,167.95,181.77,196.72,205.2,216.43,226.39,235.52,243.29,247.36,251.43,244.51,242.23,246.61,240.63,238.19,231.46,228.82,225.89,220.28,215.37,216.9,214.07,214.4,217.2,225.41,237.75,254.62,263.39,255.15,239.29,239.29,239.29];

function setProd(){
    production = document.getElementById('inputUser').value;
    total += parseInt(production);
    document.getElementById('prod').innerHTML = total;
}

function setConso(step){
    consoJounaliere = consoJournee[step];
    document.getElementById('conso').innerHTML = consoJounaliere;
}

function changerPas(newPas){
    pas = newPas;
};

function nextStep(){
    step++;
    setConso(step);
    /*if (step == steprand){

        event(infra);

    }*/
    if(consomation<production){
        energieEnSurplue += production - consomation;
    }else{
        energieNonLivre += consomation - production;
    };
    //consomation = consoJounaliere[step];
};

function score(){
    return energieNonLivre + energieEnSurplue;
}

function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }


async function play() {
  document.getElementById('prod').innerHTML = 700;
    for(var i = 0; i<24; i++){
      await sleep(2000);
      console.log("tik tok")
      nextStep();
      // setTimeout(nextStep(),20);
    }

};
function reset(){
    step = 0;
    pas = 5000;
    energieEnSurplue = 0;
    energieNonLivre = 0;
}

function event(infra) {

    energie[infra[5]] = energie[infra[5[-1]]];
    return echo("On a un probleme Ã  " + energie[infra[1]]);
}
