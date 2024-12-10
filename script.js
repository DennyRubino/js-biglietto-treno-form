
//ID ITEMS//
document.getElementById('genera').addEventListener('click', function () {

    const nome = document.getElementById('nome').value.trim();
    const km = parseFloat(document.getElementById('km').value);
    const eta = document.getElementById('eta').value;
}

//CALCOLO PREZZO BIGLIETTO//
const prezzoKm = 0.21; 
let costoBiglietto = (km * prezzoKm);
let offerta = "Biglietto Standard";

if (eta === "minorenne") {
    costoBiglietto= codiceBiglietto * 0.8; 
    offerta = "Sconto Minorenne";

} else if (eta === "over65") {
    costoBiglietto= codiceBiglietto * 0.6; 
    offerta = "Sconto Over 65";
}

// GENERAZIONE CARROZZA E CODICE BIGLIETTO//
const carrozza = Math.floor(Math.random() * 10) + 1; 
const codiceBiglietto = Math.floor(Math.random() * 90000) + 10000; 

// DATI DEL BIGLIETTP//



