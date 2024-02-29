// - inserisco i vari numeri appena creati casualmente nelle celle
// - se una di queste celle viene cliccata la coloro di rosso, se viene cliccata una cella senza il numero all'interno la coloro di azzurro
// - quando la cella cliccata ha un numero dell'array dei funghi blocco la partita
// - stampo l'esito della partita ed il punteggio(contando le volte che ha cliccato su celle vuote) 
const containerEl = document.querySelector('.container');
let numbCells;
const generatorEl = document.querySelector('form');
// - Creo un array per i 16 numeri dove saranno posizionati i funghi

//console.log(ninjasArray);


/* containerEl.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        let markup = `<div class="cell grid_100">${i}</div>`;
        containerEl.insertAdjacentHTML('beforeend', markup);
    }
    let cellEl = document.querySelectorAll('div.cell');
    //console.log(cellEl); */


/* function randomNinjasCell() {
    
} */
/*  const ninjasArray = ninjaArrayNumbers();
 //console.log(randomNumbVar);
 for (let i = 0; i < cellEl.length; i++) {
     let cell = cellEl[i];
     let cellNumb = Number(cell.innerHTML)
     
     if (ninjasArray.includes(cellNumb)) {
         cell.classList.toggle('red');
     } else{
         cell.classList.toggle('blue');
     }
 }   
*/

/* if(!cellEl.innerHTML.includes(ninjaCell)) {
    //console.log(cellEl.innerHTML);
    cellEl.innerHTML = ninjaCell;
} else{
    element.innerHTML = "";
} */

//}

//console.log(ninjasArray);


//- creo dinamicamente la griglia di gioco al click sul bottone
generatorEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const levelValue = document.getElementById('level').value
    const gridCells = level(levelValue);
    gridGenerator(gridCells);
    const ninjasArray = ninjaArrayNumbers();
    flag = true;
    counter = 0;
    //- creo l'evento al click sulle celle 
    for (let i = 0; i < gridCells; i++) {
        let cellEl = document.querySelectorAll('div.cell');
        cellEl[i].addEventListener('click', function () {
            if (flag) {
                //console.log(flag);
                this.innerHTML = i + 1;
                let cellNumb = Number(this.innerHTML)
                console.log(ninjasArray);
                if (ninjasArray.includes(cellNumb)) {
                    this.classList.add('red');
                    this.innerHTML = '🐱‍👤';
                    flag = false;
                } else {
                    this.classList.add('blue');
                    counter++;
                    console.log(cellEl.length);
                    console.log(ninjasArray.length);

                }
            }  else {
                document.querySelector('.container').innerHTML = `<h1>HAI PERSO! N° MOSSE: ${counter}</h1>`
                console.log(counter);

            } 
            const winCells = cellEl.length - ninjasArray.length;
            if (counter == winCells) {
                document.querySelector('.container').innerHTML = `<h1>HAI VINTO!</h1>`
                console.log(counter);
                //- stampo in console il suo numero
                //console.log(i + 1);
            }
        })
    }
})

/* else if (counter === (cellEl.length - ninjasArray.length)) {
    document.querySelector('.container').innerHTML = `<h1>HAI VINTO</h1>`
    console.log(counter);
    //- stampo in console il suo numero
    //console.log(i + 1);
} */

/**
 * 
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
 * 
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
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {number} maxCells
 * @returns {Array}
 */
function ninjaArrayNumbers(maxCells) {

    const ninjasArray = [];
    const ninjaMaxNum = 100;
    while (ninjasArray.length < 16) {
        const randomNumbVar = randomNumb(1, ninjaMaxNum);
        // - Controllo che nell'array i numeri creati non siano ripetuti
        if (!ninjasArray.includes(randomNumbVar)) {
            ninjasArray.push(randomNumbVar);
        }
    }
    return ninjasArray
}




