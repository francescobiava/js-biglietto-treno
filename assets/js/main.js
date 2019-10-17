// Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65

// definizione variabili
var km, age, price, discount, finalprice;

// inserimento da utente con prompt
km = parseInt(prompt('Inserisci il totale dei chilometri da percorrere'));
age = parseInt(prompt('Inserisci la tua età'));

// calcolo biglietto senza sconti
price = (km * 0.21);

// verifica condizioni per eventuale sconto e calcolo sconto
if (age < 18) {
  discount = ((price / 100) * 20);
  document.getElementById('js-discount-title').innerHTML = ('Sconto 20% under 18:');
} else if (age > 65) {
  discount = ((price / 100) * 40);
  document.getElementById('js-discount-title').innerHTML = ('Sconto 40% over 65:');
} else {
  discount = 0;
}

// calcolo prezzo finale
finalprice = price - discount;

// output prezzo finale
document.getElementById('js-price').innerHTML = (price + '€');
document.getElementById('js-discount').innerHTML = (discount + '€');
document.getElementById('js-finalprice').innerHTML = (finalprice + '€');