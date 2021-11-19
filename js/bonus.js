/* se il cliente ha messo una stringa vuota o una stringa anzichè un numero stampare a schermo un messaggio di errore */

let distancez = parseInt(prompt('Quanti chilometri intendi percorrere? '));
console.log(distancez);

let agez = parseInt(prompt('Da quanto vivi? '));
console.log(agez);

let targetz = ('mediano ');
console.log(targetz);

let prezzoz = distancez * 0.21;

let wr = ('uno o entrambi tra i dati inseriti non sono validi, reinseriscili! ');
console.log(wr);


if (age != NaN || distance != NaN) {
    if (agez < 18) {
        prezzoz = prezzoz - ((prezzoz / 100) * 20);
        console.log(prezzoz.toFixed(2));
        targetz = ('minorenne');
    }
    else if (agez > 65) {
        prezzoz = prezzoz - ((prezzoz / 100) * 40);
        console.log(prezzoz.toFixed(2));
        target = ('over65');
    }

    else {
        console.log(prezzoz.toFixed(2));
    }
}
else {
    document.getElementById('wr').innerHTML = wr;
}



document.getElementById('targetz').innerHTML = target;
document.getElementById('distancez').innerHTML = distance;
document.getElementById('prezzoz').innerHTML = prezzo;
