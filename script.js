const wrapper = document.querySelector("#wrapper");
const sizeButton = document.querySelector("#size-button");
const blackButton = document.querySelector("#change-color-black");
const rainbowButton = document.querySelector("#change-color-rainbow");
const saturationButon  = document.querySelector("#change-saturation");
let mode = "black";
let changeSaturation = false;
let squareNumber = 16;

generateGrid(squareNumber);

sizeButton.addEventListener("click", () => {
    let input;
    do {
        input = prompt("Write the number of squares you'd like to have per side");
        if (input < 0 || input === 0 || input > 100) alert("The number needs to be between 1 and 100!");
    } 
    while (input < 0 || input === 0 || input > 100);
    if (input !== null && !(input < 0 || input === 0 || input > 100)) {
        squareNumber = input;
        wipeGrid();
    }
})

blackButton.addEventListener("click", () => {
    mode = "black"
})

rainbowButton.addEventListener("click", () => {
    mode = "Rainbow";
})

saturationButon.addEventListener("click", () => {
    changeSaturation = !changeSaturation;
})

wrapper.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (!target.hasChildNodes()) {
        if (!target.style.background) {
            if (mode == "Rainbow") {
                if (changeSaturation) {
                    target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                    target.style.opacity = 0.1;
                } else {
                    target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                }
            } else {
                target.style.background = mode;
            }
        } else if (changeSaturation) {
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
    generateGrid(squareNumber);
}