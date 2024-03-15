// Function to create the square
function squareDiv() {
    const square = document.createElement("div");
    square.style.width = '15px';
    square.style.height = '15px';
    square.style.padding = '15px';
    square.style.margin = '15px';
    square.style.border = 'none';
    square.style.backgroundColor = 'green';
    return square;
}

// function to add the squareDiv 16 times to the container
function addSquares() {
    const grid = document.querySelector("#grid-container");

    for (let i = 0; i < 16; i++) {
        const square = squareDiv();
        grid.appendChild(square);
    }
}

addSquares();
