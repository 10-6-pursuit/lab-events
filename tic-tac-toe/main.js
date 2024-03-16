const board = document.querySelector(".tic-tac-toe");
board.style.display = "grid";
board.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)"
// section.style.width = "max-content"
// section.style.height = "max-content"
board.style.color = "lime";

let acc = false;

function makeBoard() {
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.className = "empty square";

        board.append(div);

 
            div.addEventListener("click", (event) => {
                if (event.target.classList.contains("empty") && acc/*acc % 2 !== 0*/) {
                event.target.innerText = "X"
            event.target.classList.remove("empty");
            acc = !acc;
                } else if (event.target.classList.contains("empty") && !acc/*acc % 2 === 0*/) {
                    event.target.innerText = "O"
                event.target.classList.remove("empty");
                acc = !acc;
                }
            })
        }
    }

    const nameYouWannaName = document.querySelector("button");
    nameYouWannaName.addEventListener("click", () => {
        const allDivs = document.querySelectorAll(".square");
        allDivs.forEach(idk => {
            idk.innerText = "";
            idk.classList.add("empty");
            acc = !acc;
        })
    })

makeBoard()