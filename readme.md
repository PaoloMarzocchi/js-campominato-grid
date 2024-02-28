## TRACCIA

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;     

## STEPS
- Creo un container nella pagina html e il bottone di generazione griglia
- creo dinamicamente la griglia di gioco al click sul bottone
- inserisco in ogni cella un numero progressivo da 1 a 100
- creo l'evento al click sulle celle 
    - stampo in console il suo numero
    - aggiungo dinamicamente una classe alla cella cliccata per cambiare il suo colore

## TOOLS
- let/ const
- querySelector / getElementById
- for(){}
- addEventListener
- insertAdjacentHTML
- classList.add / classList.toggle