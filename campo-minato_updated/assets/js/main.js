//- creo dinamicamente la griglia di gioco al click sul bottone
//- inserisco in ogni cella un numero progressivo da 1 a 100

const containerEl = document.querySelector('.container');
let numbCells;
//const btnGeneratorEl = document.getElementById('grid_generator');

const generatorEl = document.querySelector('form');

//console.log(level(generatorEl.value));
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
//console.log(gridGenerator());

generatorEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const levelValue = document.getElementById('level').value

   
    gridGenerator(level(levelValue));
    //console.log(gridGenerator());

    //- creo l'evento al click sulle celle 
    //- stampo in console il suo numero
    //- aggiungo dinamicamente una classe alla cella cliccata per cambiare il suo colore

    for (let i = 1; i <= level(levelValue); i++) {
        let cellEl = document.querySelectorAll('div.cell');
        //console.log(cellEl);
        cellEl[i - 1].addEventListener('click', function () {
            cellEl[i - 1].classList.toggle('red');
            cellEl[i - 1].innerHTML = i;
            console.log(i);
        })
    }
})







