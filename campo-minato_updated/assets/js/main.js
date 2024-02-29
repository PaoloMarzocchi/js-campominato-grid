// - inserisco i vari numeri appena creati casualmente nelle celle
// - se una di queste celle viene cliccata la coloro di rosso, se viene cliccata una cella senza il numero all'interno la coloro di azzurro
// - quando la cella cliccata ha un numero dell'array dei funghi blocco la partita
// - stampo l'esito della partita ed il punteggio(contando le volte che ha cliccato su celle vuote) 
const containerEl = document.querySelector('.container');
let numbCells;
const generatorEl = document.querySelector('form');
// - Creo un array per i 16 numeri dove saranno posizionati i funghi
function ninjaArrayNumbers() {
    
    const ninjasArray = [];
    const ninjaMaxNum = 100;
    while (ninjasArray.length < 16) {
        const randomNumbVar = randomNumb(1,ninjaMaxNum);
        // - Controllo che nell'array i numeri creati non siano ripetuti
        if(!ninjasArray.includes(randomNumbVar) ) {
            ninjasArray.push(randomNumbVar);
        }
    }
    return ninjasArray
}
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

    gridGenerator(level(levelValue));
    const ninjasArray = ninjaArrayNumbers();
    //- creo l'evento al click sulle celle 
    for (let i = 0; i < level(levelValue); i++) {
        let cellEl = document.querySelectorAll('div.cell');
        cellEl[i].addEventListener('click', function () {
            this.innerHTML = i + 1;
        let cellNumb = Number(this.innerHTML)
        console.log(ninjasArray);
        if (ninjasArray.includes(cellNumb)) {
            this.classList.add('red');
            flag = false
        } else{
            this.classList.add('blue');
        }
            
            //- stampo in console il suo numero
            //console.log(i + 1);
        })
    }
})


function gridGenerator(numMaxCells) {
    containerEl.innerHTML = "";
    for (let i = 1; i <= numMaxCells; i++) {
        let markup = `<div class="cell grid_${numMaxCells}"></div>`;
        containerEl.insertAdjacentHTML('beforeend', markup);
    }
}

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

function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }






