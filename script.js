// Recupero gli elementi 
const grid = document.getElementById('grid');
const button = document.querySelector('button');

//  Dati 
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Funzioni 
const createCell = (content) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = content;
    return cell;
}

/* DA CORREGGERE 
button.addEventListener('click', () => {
    if(grid.classList.contains('d-none')) {
        grid.classList.remove('d-none');
    } else {
        grid.classList.add('d-block');
    }
})
*/ 

// Programma

for (let i = 1; i <= totalCells;i++) {

    const cell = createCell(i);
    

    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
        console.log(`Hai cliccato la cella numero ${i}`);
    })

    grid.appendChild(cell);
}

