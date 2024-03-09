//  Write a function called makeBoard() that will generate 9 div with the class empty and another class square.
function makeBoard() {
  const parent = document.querySelector('div.tic-tac-toe');
  for (let i = 0; i < 9; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    div.classList.add('empty');
    parent.appendChild(div);
  }
}

//  Call makeBoard() on page load so that 9 squares appear and the board is 3 x 3 squares.
window.onload = makeBoard();

/* Write a function called makeMove() that is an event handler for the divs with the class of square that:

    - Checks if the clicked square has the class empty.

    - If the square has the class empty add either an X or an O inside the square, remove the class empty and write some logic so that the next time this function is called the other player has a play (first play an X then an O, then an X...).

    - Players should NOT be able to change a full square.
*/
const squares = document.querySelectorAll('div.square');

let xOFlag = true;

function makeMove() {
  for (const square of squares) {
    square.addEventListener('click', () => {
      if (square.classList.contains('empty')) {
        xOFlag ? (square.innerText = 'X') : (square.innerText = 'O');
        xOFlag = !xOFlag;
        square.classList.remove('empty');
      }
    });
  }
}

makeMove();

// Add a listener to the reset button and write an event handler function called reset, that removes the squares and then calls makeBoard() to reset the board.
const button = document.querySelector('button');

function reset() {
  for (const square of squares) {
    square.classList.add('empty');
    square.innerText = '';
  }
}

button.addEventListener('click', reset);
