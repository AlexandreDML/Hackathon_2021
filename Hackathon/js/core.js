var CONFIG = require('./config.json');
var step = 0;
var pas = 300000;
var heure = "00:00";
var consomation = 0;
var production = 0;
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

function changerPas(newPas){
    pas = newPas;
};

function nextStep(){
    step++;
    if (step == steprand){

        event(infra);
    
    }
    if(consomation<production){
        energieEnSurplue += production - consomation;
    }else{
        energieNonLivre += consomation - production;
    };
    consomation = consoJounaliere[step];
};

function score(){
    return energieNonLivre + energieEnSurplue;
}

function play(){
    for(var i = 0; i<48; i++){
        setTimeout(nextStep(),pas);
    }

};
function reset(){
    step = 0;
    pas = 300000;
    energieEnSurplue = 0;
    energieNonLivre = 0;
}

function event(infra) {

    energie[infra[5]] = energie[infra[5[-1]]];
    return echo("On a un probleme à " + energie[infra[1]]);
}

