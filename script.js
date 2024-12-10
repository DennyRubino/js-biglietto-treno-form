//ID ITEMS//
document.getElementById('genera').addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const km = parseFloat(document.getElementById('km').value);
    const eta = document.getElementById('eta').value;

    if (!nome || isNaN(km) || km <= 0) {
        alert("Inserisci valori veri :/");
        return;
    }

    //CALCOLO PREZZO BIGLIETTO//
    const prezzoKm = 0.21;
    let costoBiglietto = km * prezzoKm;
    let offerta = "Biglietto Standard";

    //CALCOLO PREZZO BIGLIETTO//
    if (eta === "minorenne") {
        costoBiglietto *= 0.8; 
        offerta = "Sconto Minorenne";
    } else if (eta === "over65") {
        costoBiglietto *= 0.6; 
        offerta = "Sconto Over 65";
    }

    costoBiglietto = costoBiglietto.toFixed(2);

    // GENERAZIONE CARROZZA E CODICE BIGLIETTO//
    const carrozza = Math.floor(Math.random() * 10) + 1; 
    const codiceBiglietto = Math.floor(Math.random() * 90000) + 10000; 

    // DATI DEL BIGLIETTP//
    document.getElementById('ticket-nome').innerText = `Nome Passeggero: ${nome}`;
    document.getElementById('ticket-offerta').innerText = `Offerta: ${offerta}`;
    document.getElementById('ticket-carrozza').innerText = `Carrozza: ${carrozza}`;
    document.getElementById('ticket-codice').innerText = `Codice CP: ${codiceBiglietto}`;
    document.getElementById('ticket-costo').innerText = `Costo Biglietto: €${costoBiglietto}`;

    
    document.getElementById('ticket').style.display = "block";
});




