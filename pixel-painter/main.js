const main = document.querySelector("#canvas");

for (let i = 1; i <= 100; i++ ) {
    const box = document.createElement("div");
    box.setAttribute("style", "border: 1px solid black");
    box.setAttribute("class","cell");
    main.appendChild(box);
}

const color = document.querySelectorAll(".color");


for (let elem of color) {
    elem.addEventListener("click", event => {
        const colorChange = elem.style["background-color"];
        const current = document.querySelector("#current-color");
        current.setAttribute("style", `background-color: ${colorChange}`);
    })

};

 const cells = document.querySelectorAll(".cell");

 for (let elem of cells) {
    elem.addEventListener("click", event => {
        const current2 = document.querySelector("#current-color").style["background-color"];
        elem.setAttribute("style", `background-color: ${current2}`);
    })
 }

 




