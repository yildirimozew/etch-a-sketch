let containerDiv = document.getElementById("container");
let colorChanger = document.getElementById("rgb-picker");
let rainbow = 0; 

function drawCanvas() {
    let squareNum = document.getElementById("squareNum").value;
    containerDiv.innerHTML = "";
for (let i = 0; i < squareNum ** 2; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("sketch");
    let percentage = 100 / squareNum;
    squareDiv.style.height = percentage + "vh";
    squareDiv.style.width = percentage + "vh";
    squareDiv.addEventListener("mouseover", () => {if (rainbow === 1) {let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        squareDiv.style.backgroundColor = randomColor;}
    else {squareDiv.style.backgroundColor = color;}})
    containerDiv.appendChild(squareDiv);}}

function colorChange() {
    rainbow = 0;
    color = colorChanger.value;
}

function init() {
    colorChange();
    drawCanvas();
}

function rainbowize() {if (rainbow === 0 ) {rainbow = 1}};

init();