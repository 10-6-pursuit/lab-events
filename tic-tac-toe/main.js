window.addEventListener("DOMContentLoaded", () => {
  const $ = function(args) { 
    return document.querySelector(args);
  }

  const $$ = function(args) { 
    return document.querySelectorAll(args);
  }

  const create = function(args) {
    return document.createElement(args);
  }

//Instead of addEventListener we can do the below
HTMLElement.prototype.on = function(a, b, c) {
  this.addEventListener(a, b, c);
};

HTMLElement.prototype.off = function(a, b, c) {
  this.removeEventListener(a, b, c);
};

HTMLElement.prototype.$ = function(a, b, c) {
  this.querySelector(a, b, c);
};

HTMLElement.prototype.$$ = function(a, b, c) {
  this.querySelectorAll(a, b, c);
};
//----------------------------------------------------------
//Creating section with class="board" and appending to main
const main = $("main");
const section = create("section");
section.className = "board";
main.append(section);

//Creates 9 Div's with className and appending to section
function makeBoard () {
  for(let i = 0; i < 9; i++) {
    const div = create("div");
    div.className = "empty square";
    section.appendChild(div);
  }
}
//Loads makeBoard() when DOM is fully loaded
window.onload = makeBoard();

//create variable for circle and square for turn selection
const x = "x";
const o = "o";

//Create function adding eventListener to squares
// {once:true} allows a square to only have an eventListener once
const squares = $$(".square");

squares.forEach((square) => {
  square.on("click", makeMove, {once:true})
})

//Function removes class empty when clicked, next and Add logic, if X started, switch to O.
let currentPlayer = x;
function makeMove(e) {
  const square = e.target;
  const squareClass = square.classList;
  if (squareClass.contains("empty")) {
    squareClass.remove("empty");
    squareClass.add(currentPlayer);

    //switch currentPlayer
    currentPlayer = currentPlayer === x ? o : x;
  }
}

//Adding functionality to reset button
const reset = $(".reset");
reset.on("click", () => {
  location.reload();
})

//Extra functionality: Declare Winner
//Add winning or draw message
//If X or O win
  //Decide the coordinates that decide a win
  //If no win then it's a draw
//Show message when winner or draw
//Add event listener to restart button
  //On click remove show class and reset board
})