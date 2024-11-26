// variabili necessarie:

let numeriGenerati = [];
let counterTempo = 10;
let counterNumeri = 0


// elementi HTML:

const timer = document.getElementById("timer");
const howtoplay = document.getElementById ("howtoplay");
const numberString = document.getElementById("numbers");
const finalMessage = document.getElementById("finalmessage");
const form = document.getElementById("numberform");
const numberInput= document.querySelector(".ins-number");






//logica:

// genero i numeri randomici
while(numeriGenerati.length < 5){
  let numeroRandomico = Math.floor(Math.random()* 50)+1;
  if (numeriGenerati.includes(numeroRandomico)=== false){
    numeriGenerati.push(numeroRandomico);
  }
}
// stampo i numeri nella pagina html

numberString.innerHTML = numeriGenerati.join(" | ");
timer.innerHTML = counterTempo;

//parte il timer

const scorriTempo = setInterval(function(){
  timer.innerHTML--

//allo scadere del timer si susseguono una serie di eventi  
  if(timer.innerHTML == 0){
    clearInterval(scorriTempo) //si ferma il timer
    timer.classList.add("hide"); //il timer scompare
    numberString.classList.add("hide"); //i numeri scompaiono
    howtoplay.innerHTML = `INSERISCI I NUMERI CHE RICORDI`; //cambia il messaggio di consegna
    form.classList.add("show-f") //appare il form con l'inserimento

  }
},1000);

// inserimento dei numeri

//conferma dell'inserimento

form.addEventListener('submit', function(event){
  event.preventDefault();
  numeroInserito = parseInt(numberInput.value);
  //logica di confronto dei numeri
  if(numeriGenerati.includes(numeroInserito)){
    counterNumeri++
  }
  
finalMessage.classList.add("show"); //al submit appare anche il messaggio finale

// logica del messaggio finale
if (counterNumeri === 0){
  finalMessage.innerHTML = `Mi dispiace, forse è necessario l'oculista.`;
} else if(counterNumeri === 5){
  finalMessage.innerHTML = `Gran Maestro della vista! Hai indovinato TUTTI i numeri!`;
} else if(counterNumeri > 1){
  finalMessage.innerHTML = `Complimenti! hai indovinato ${counterNumeri} numeri.`;
} else {
  finalMessage.innerHTML = `Hai indovinato ${counterNumeri} solo numero.`
}
})



