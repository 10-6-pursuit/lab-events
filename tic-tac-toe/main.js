const section = document.querySelector(".tic-tac-toe");
section.style.display = "grid";
section.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)";
// section.style.width = "max-content";
// section.style.height = "max-content";

let acc = false;

function makeBoard() {
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.className = "square empty";

        section.append(div);

         div.addEventListener("click", (e) => {
            if (e.target.classList.contains("empty") && acc % 2 !== 0) {
                    e.target.innerText = "X";
                    e.target.classList.remove("empty");
                    acc++;
                } else if (e.target.classList.contains("empty") && acc % 2 === 0) {e.target.innerText = "O";
                    e.target.classList.remove("empty");
                    acc++;
                }
            });
        }
    }
}

const nameYouWannaNameIt = document.querySelector("button");
nameYouWannaNameIt.addEventListener("click"), () => {
    const allDivs = document.querySelectorAll(".square");
    allDivs.forEach((idk => {
        idk.innerText = "";
    } )
}

makeBoard();