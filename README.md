ESERCIZIO: SIMON SAYS
===
## Consegna:

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.

## Bonus:
- Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci

## Consigli:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
- Immaginate la logica come fosse uno snack: “Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array”

## Logica:
- Creare un array vuoto contenente i numeri che dovranno apparire.
- Generare una funzione che tramite ciclo while possa popolare l'array dei 5 numeri necessari. Per garantire che i numeri siano univoci dovrebbe essere sufficiente una condizione if con .includes. Verranno stampati come stringa tramite il metodo .join
- Settare un counter che fungerà da timer con setInterval che, decrementando fino allo 0  si fermerà con un clear ed alla stessa condizione la riga dei numeri sparirà e verrà mostrata la riga "form" con 5 input numerici ed il bottone submit.
- I 5 input numerici avranno la stessa classe per permettere poi di confrontare la loro value con il contenuto dell'array precedentemente generato.
- Ad ogni numero immesso che corrisponderà a quelli presenti nell'array un counter incrementerà per sapere quanti risultati sono stati indovinati. In funzione dell'outcome verrà generato un messaggio di fine gioco.
