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

wrapper.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (!target.hasChildNodes()) {
        if (!target.style.background) {
            target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            target.style.opacity = 0.1;
        } else {
            target.style.opacity = (parseFloat(target.style.opacity) + 0.1).toString();
        }
    }
})

function generateGrid(squareNumber) {
    const fragment = document.createDocumentFragment();
    let squareHeight = wrapper.clientHeight/squareNumber + "px";
    let squareWidth  =  wrapper.clientWidth/squareNumber + "px";
    for (let i = 0; i < squareNumber*squareNumber; i++) {
        console.log("added a square!");
        const square = document.createElement("div");
        square.classList.add("squares");
        square.style.height = squareHeight;
        square.style.width = squareWidth;
        fragment.appendChild(square);
    }
    wrapper.appendChild(fragment);
}

function wipeGrid() {
    while (wrapper.hasChildNodes()) {
        wrapper.firstChild.remove();
    }
}