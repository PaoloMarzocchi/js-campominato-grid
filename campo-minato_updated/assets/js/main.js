const containerEl = document.querySelector('.container');
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
    
    ninjaField(ninjasArray)
    console.log(ninjasArray.sort((a, b) => a - b));
    

    //- creo l'evento al click sulle celle 

    for (let i = 0; i < gridCells; i++) {
        let cellEl = document.querySelectorAll('div.cell');
        cellEl[i].addEventListener('click', letsGame)
    }
})



/**
 * Inserisce i ninja all'interno della griglia di gioco
 * @param {Array} ninjaNumbs 
 */
function ninjaField(ninjaNumbs) {
    let cellEl = document.querySelectorAll('div.cell');
  
    for (let i = 0; i < cellEl.length; i++) {
        
        if (ninjaNumbs.includes(i + 1)) {
            cellEl[i].innerHTML = `<span class="d_none">🐱‍👤</span>`;
        } else {
            cellEl[i].innerHTML = `<span class="d_none">${i + 1}</span>`;

        }

    }
}


/**
 * Gestisce il comportamento delle celle quando vengono attivate
 */
function letsGame() {
    
    let flag = true;
    
    let cellNumb = this.querySelector('span');
    
    if (cellNumb.innerHTML == "🐱‍👤") {
        this.classList.add('red');
        cellNumb.classList.remove('d_none');
        flag=false;
    } else {
        this.classList.add('blue');
        cellNumb.classList.remove('d_none');
    }
    let counter = document.getElementsByClassName('blue').length;
    
    gameOver(flag,counter);
}


/**
 * Stampa Nella DOM il risultato della partita
 * @param {boolean} flag 
 * @param {number} counter 
 */
function gameOver(flag, counter){
    let endGameMessage = document.querySelector('h2');
    let cellEl = document.querySelectorAll('div.cell');
    const winCells = cellEl.length - 16;
    for (let i = 0; i < cellEl.length; i++) {
        const cell = cellEl[i];
        
        if (flag && counter == winCells) {
            endGameMessage.innerHTML = `<h1>HAI VINTO!`;
            endGameMessage.style.backgroundColor = 'chartreuse';
            cell.removeEventListener('click',letsGame)
            
        } else if (!flag) {
            endGameMessage.innerHTML = `<h1>HAI PERSO! N° MOSSE: ${counter}</h1>`;
            endGameMessage.style.backgroundColor = 'darkred';
            cell.removeEventListener('click',letsGame)
        }
        
    }
}

/**
 * Genera la griglia di gioco
 * @param {number} numMaxCells 
 */
function gridGenerator(numMaxCells) {
    containerEl.innerHTML = "";
    for (let i = 1; i <= numMaxCells; i++) {
        let markup = `<div class="cell grid_${numMaxCells}"></div>`;
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


