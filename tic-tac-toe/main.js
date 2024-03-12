document.addEventListener("DOMContentLoaded", () => {
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
HTMLElement.prototype.on = (a,b,c) => this.addEventListener(a,b,c);
HTMLElement.prototype.off = (a,b) => this.removeEventListener(a,b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$$ = (s) => this.querySelectorAll(s);
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
document.on("DOMContentLoaded", makeBoard());
// window.onload = makeBoard();

//create variable for circle and square for turn selection

//Create function adding eventListener to squares
// {once:true} allows a square to only have an eventListener once
square.forEach((cell) => {
  cell.on("click", makeMove, {once:true})
})

function makeMove() {
  //add functionality here
  //place marker
  //check for win
  //check for draw
  //switch turns
}





})