//- creo dinamicamente la griglia di gioco al click sul bottone
//- inserisco in ogni cella un numero progressivo da 1 a 100

const containerEl = document.querySelector('.container');
let numbCells = 100;
const btnGeneratorEl = document.getElementById('grid_generator');

function gridGenerator() {
    for (let i = 1; i <= numbCells; i++) {
        let markup = `<div class="cell">${i}</div>`;
        containerEl.insertAdjacentHTML('beforeend', markup);
    }
}
//console.log(gridGenerator());

btnGeneratorEl.addEventListener('click', function (e) {

    gridGenerator();
    //console.log(gridGenerator());



    //- creo l'evento al click sulle celle 
    //- stampo in console il suo numero
    //- aggiungo dinamicamente una classe alla cella cliccata per cambiare il suo colore
    
    for (let i = 1; i <= numbCells; i++) {
        let cellEl = document.querySelectorAll('div.cell');
        //console.log(cellEl);
        cellEl[i - 1].addEventListener('click', function () {
            cellEl[i - 1].classList.toggle('red');
            console.log(i);
        })
    }

})





