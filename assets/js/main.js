//- creo dinamicamente la griglia di gioco al click sul bottone

const containerEl = document.querySelector('.container');
let numbCells = 100;
const btnGeneratorEl = document.getElementById('grid_generator');

function gridGenerator() {
    for (let i = 1; i <= numbCells; i++) {
        let markup = `<div class="cell">${i}</div>`;
        containerEl.insertAdjacentHTML('beforeend', markup);
    }
    return containerEl.querySelectorAll('div.cell')
}
//console.log(gridGenerator());

btnGeneratorEl.addEventListener('click', function(){
    gridGenerator();
    //console.log(gridGenerator());
})
let cellEl = containerEl.querySelectorAll('div.cell');
//- inserisco in ogni cella un numero progressivo da 1 a 100
//- creo l'evento al click sulle celle 
    //- stampo in console il suo numero
    //- aggiungo dinamicamente una classe alla cella cliccata per cambiare il suo colore
