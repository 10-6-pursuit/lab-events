let colors = document.querySelectorAll(".color");
const currentColor = document.getElementById("current-color");
let clearButton = document.querySelector(".clear-button");

for(let c of colors){
    c.addEventListener("click", event =>{
    currentColor.style.background = event.target.style.background;

    });
}
let main = document.querySelector("#canvas");
for(let i=0;i<100;i++){
    const divCell = document.createElement("div");
    divCell.classList.add("cell");
    divCell.addEventListener("click", event=>{
    event.target.style.background = currentColor.style.background;
})
    main.append(divCell);
}
let divCell = document.querySelectorAll(".cell");
clearButton.addEventListener("click",() =>{
    for(let div of divCell){
        div.style.background = "white";
    }
})