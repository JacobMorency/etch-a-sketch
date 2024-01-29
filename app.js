const container = document.querySelector("#container");
const btnClear = document.querySelector("#btn-clear");
const btnRandom = document.querySelector("#btn-random");
const btnBlack = document.querySelector("#btn-black");

function getRandomColor() {
    const getInt = () => Math.floor(Math.random() * 256);
    const red = getInt();
    const green = getInt();
    const blue = getInt();
    

    return `rgb(${red}, ${green}, ${blue})`
}

for (let i = 0; i < (16 * 16); i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add(`grid-div`);
    gridDiv.classList.add(`div-${i}`);
    container.appendChild(gridDiv);
    gridDiv.addEventListener("mouseover", () => {
        gridDiv.style.backgroundColor = "black";
    })
}

btnClear.addEventListener('click', ()=> {
    const gridDivs = document.querySelectorAll(".grid-div");
    gridDivs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
   
})

btnRandom.addEventListener('click', () => {
    const gridDivs = document.querySelectorAll(".grid-div");
    gridDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomColor();
        })
    })
})

btnBlack.addEventListener('click', () => {
    const gridDivs = document.querySelectorAll(".grid-div");
    gridDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
    })
})

