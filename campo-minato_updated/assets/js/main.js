const containerEl = document.querySelector('.container');
let numbCells;
const generatorEl = document.querySelector('form');


//- creo dinamicamente la griglia di gioco al click sul bottone
generatorEl.addEventListener('submit', function (e) {
    e.preventDefault();

    let endGameMessage = document.querySelector('h2');
    endGameMessage.innerHTML = ``;
    endGameMessage.style.backgroundColor = 'transparent';

    const levelValue = document.getElementById('level').value
    const gridCells = level(levelValue);
    gridGenerator(gridCells);

    // - Creo un array per i 16 numeri dove saranno posizionati i funghi
    const ninjasArray = ninjaArrayNumbers(gridCells);
    console.log(ninjasArray);
    flag = true;
    counter = 0;

    //- creo l'evento al click sulle celle 

    for (let i = 0; i < gridCells; i++) {
        let cellEl = document.querySelectorAll('div.cell');
        cellEl[i].addEventListener('click', function () {
            let endGameMessage = document.querySelector('h2');
            if (flag) {

                this.innerHTML = i + 1;
                let cellNumb = Number(this.innerHTML)

                // - confronto i numeri dell'array casuale con quelli della griglia
                // - se una di queste celle viene cliccata la coloro di rosso, se viene cliccata una cella senza il numero all'interno la coloro di azzurro
                if (ninjasArray.includes(cellNumb)) {
                    this.classList.add('red');
                    this.innerHTML = '🐱‍👤';
                    // - quando la cella cliccata ha un numero dell'array dei funghi blocco la partita
                    flag = false;

                } else {
                    this.classList.add('blue');
                    counter++;
                    console.log(cellEl.length);
                    console.log(ninjasArray.length);

                }
            } else {
                // - stampo l'esito della partita ed il punteggio(contando le volte che ha cliccato su celle vuote) 

                endGameMessage.innerHTML = `<h1>HAI PERSO! N° MOSSE: ${counter}</h1>`;
                endGameMessage.style.backgroundColor = 'darkred';
                console.log(counter);

            }

            const winCells = cellEl.length - ninjasArray.length;

            if (counter == winCells) {
                endGameMessage.innerHTML = `<h1>HAI VINTO!`;
                endGameMessage.style.backgroundColor = 'chartreuse';
                console.log(counter);
                //- stampo in console il suo numero
                //console.log(i + 1);
            }
        })
    }
})



/**
 * Genera la griglia di gioco
 * @param {number} numMaxCells 
 */
function gridGenerator(numMaxCells) {
    containerEl.innerHTML = "";
    for (let i = 1; i <= numMaxCells; i++) {
        let markup = `<div class="cell grid_${numMaxCells}">${i}</div>`;
        containerEl.insertAdjacentHTML('beforeend', markup);
    }
}
/**
 * imposta il livello selezionato dall'utente
 * @param {string} lvl 
 * @returns {number}
 */
function level(lvl) {
    switch (lvl) {

        case 'easy':
            numbCells = 100;
            break;
        case 'medium':
            numbCells = 81;
            break;
        case 'hard':
            numbCells = 49;
            break;
    }
    return numbCells
}
/**
 * Genera un numero casuale 
 * @param {*} min 
 * @param {*} max 
 * @returns {number}
 */
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Crea un array di 16 numeri casuali
 * @param {number} maxCells
 * @returns {Array} 
 */
function ninjaArrayNumbers(maxCells) {

    const ninjasArray = [];
    while (ninjasArray.length < 16) {
        const randomNumbVar = randomNumb(1, maxCells);
        // - Controllo che nell'array i numeri creati non siano ripetuti
        if (!ninjasArray.includes(randomNumbVar)) {
            ninjasArray.push(randomNumbVar);
        }
    }
    return ninjasArray
}




