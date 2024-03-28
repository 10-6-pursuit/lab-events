const board = document.querySelector(".tic-tac-toe");
board.style.display = "grid";
board.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)";

let acc = false;

function makeBoard() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.className = "square empty";

    board.append(div);

    div.addEventListener("click", (e) => {
      if (e.target.classList.contains("empty") && acc) {
        e.target.innerText = "X";
        e.target.classList.remove("empty");
        acc = !acc;
      } else if (e.target.classList.contains("empty") && !acc) {
        e.target.innerText = "O";
        e.target.classList.remove("empty");
        acc = !acc;
      }
    });
  }
}

const nameYouWannaNameIt = document.querySelector("button");
nameYouWannaNameIt.addEventListener("click", () => {
  const allDivs = document.querySelectorAll(".square");
  allDivs.forEach((idk) => {
    idk.innerText = "";
    idk.classList.add("empty");
  });
});

makeBoard();