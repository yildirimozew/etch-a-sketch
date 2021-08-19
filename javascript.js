let containerDiv = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("sketch");
    squareDiv.style.height = "6.25vh";
    squareDiv.style.width = "6.25vh";
    containerDiv.appendChild(squareDiv);}