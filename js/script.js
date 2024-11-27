// variabili necessarie:

let numeriGenerati = [];
let counterTempo = 10;
let numeriUtente = []
let counterNumeri = 0;

// elementi HTML:

const timer = document.getElementById("timer");
const howtoplay = document.getElementById ("howtoplay");
const numberString = document.getElementById("numbers");
const finalMessage = document.getElementById("finalmessage");
const form = document.getElementById("numberform");
const numberInputs= document.querySelectorAll(".ins-number");






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

  // numberInputs con il queryselector genera una nodelist con gli input chiamare direttamente il .value non funziona. L'unico modo è ciclare i risultati della nodelist in per poi trasformarli in numeri e pusharli dentro un array vuoto. In questo caso quell'array è numeriUtente.

  for (let i = 0; i < numberInputs.length; i++) {
    let numeroInserito = numberInputs[i].value.trim() ? parseInt(numberInputs[i].value.trim()) : 0;
    numeriUtente.push(numeroInserito);
  }
  console.log(numeriUtente)
  

  //logica di confronto dei numeri
 
  if (numeriUtente.length === 5){
    for (let i = 0; i < numeriUtente.length; i++){
      if(numeriGenerati.includes(numeriUtente[i])){
        counterNumeri++;
      }
    }
  }

  console.log(counterNumeri)


  finalMessage.classList.remove("hide"); //al submit appare anche il messaggio finale

  form.classList.remove("show-f")



 

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



