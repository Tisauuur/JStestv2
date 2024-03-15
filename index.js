const grid = document.querySelector('#grid-container');
const newGridBtn = document.querySelector('#new-grid');

function squareDiv() {
    const square = document.createElement('div');
    square.style.width = '15px';
    square.style.height = '15px';
    square.style.padding = '15px';
    square.style.border = 'none';
    square.style.backgroundColor = 'green';

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
    });

    square.addEventListener('mouseout', () => {
        setTimeout(() => {
            square.style.backgroundColor = 'green';
        }, 200);
    });

    return square;
}

function addSquares(n) {
    const squaresArray = [];

    for (let i = 0; i < n; i++) {
        const square = squareDiv();
        squaresArray.push(square);
    }

    return squaresArray;
}

const initialSquares = addSquares(50);
initialSquares.forEach(square => grid.appendChild(square));

newGridBtn.addEventListener('click', () => {
    let newSquares = +prompt("Add the # of squares for the new grid (100 square max): ");

    if (typeof newSquares === 'number' && newSquares <= 100) {
        const newSquaresArray = addSquares(newSquares);
        grid.replaceChildren(...newSquaresArray);
    } else {
        alert('Wrong input!');
    }
});