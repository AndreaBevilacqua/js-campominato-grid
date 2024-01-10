// Recupero gli elementi 
const grid = document.getElementById('grid');

//  Dati 
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Funzioni 
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    return cell;
}

// Programma

for (let i = 1; i <= totalCells;i++) {

    const cell = createCell();
    cell.innerText = i;

    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
        console.log(`Hai cliccato la cella numero ${i}`);
    })

    grid.appendChild(cell);
}

