// Function to create the square
function squareDiv() {
    const square = document.createElement("div");
    square.style.width = '15px';
    square.style.height = '15px';
    square.style.padding = '15px';
    square.style.border = 'none';
    square.style.backgroundColor = 'green';
    // Add mouseover event to change the background color
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
    })
    // Add mouseout event to return the previous color with a 200ms delay
    square.addEventListener("mouseout", () => {
        setTimeout(() => {
            square.style.backgroundColor = 'green';
        }, 200);
    });

    return square;
}

// function to add the squareDiv 16 times to the container
function addSquares() {
    const grid = document.querySelector("#grid-container");

    for (let i = 0; i < 45; i++) {
        const square = squareDiv();
        grid.appendChild(square);
    }
}

addSquares();
