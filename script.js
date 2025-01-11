const wrapper = document.querySelector("#wrapper");
const button = document.querySelector("button");
const defaultSquareNumber = 16;

generateGrid(defaultSquareNumber);

button.addEventListener("click", () => {
    let input;
    do {
        input = prompt("Write the number of squares you'd like to have per side");
        if (input < 0 || input === 0 || input > 100) alert("The number needs to be between 1 and 100!");
    } 
    while (input < 0 || input === 0 || input > 100);
    if (input !== null && !(input < 0 || input === 0 || input > 100)) {
        wipeGrid();
        generateGrid(input);
    }
})

function generateGrid(squareNumber) {
    for (let i = 0; i < squareNumber*squareNumber; i++) {
        let square = document.createElement("div");
        square.classList.add("squares");
        square.style.width = wrapper.clientWidth/squareNumber + "px";
        square.style.height = wrapper.clientHeight/squareNumber + "px";
        square.addEventListener("mouseover", () => {
            square.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        })
        wrapper.appendChild(square);
    }
}

function wipeGrid() {
    while (wrapper.hasChildNodes()) {
        wrapper.firstChild.remove();
    }
}