/*
Descrizione
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.
Finito l’esercizio base, cercate di capire se potete semplificarlo: faccia_leggermente_sorridente:
*/

/*
1. crea due variabili: age, distance.
2. crea un if seguito da un if-else e poi un else; 
con condizioni: age<18, age>65, else NO-SALE.
Alla fine converti in float.
*/
let distance = parseInt(prompt('Quanti chilometri intendi percorrere? '));
console.log(distance);

let age = parseInt(prompt('Da quanto vivi? '));
console.log(age);

//let target = ('persona di mezza eta ';)

let prezzo = distance*0.21;

if (age < 18) {
    prezzo = prezzo - ((prezzo/100)*20);
    console.log(prezzo);
}
else if ( age > 65) {
    prezzo = prezzo - ((prezzo / 100) * 40);
    console.log(prezzo);
}

else {
    console.log(prezzo.toFixed(2));
}



document.getElementById('distance').innerHTML = distance;
document.getElementById('prezzo').innerHTML = prezzo;





