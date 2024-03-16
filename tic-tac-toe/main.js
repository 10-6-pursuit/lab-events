let currentPlayer = 'X';
let gameActive = true;

function makeBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = ''; // Clear the game board

  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.className = 'square empty';
    square.addEventListener('click', makeMove);
    gameBoard.appendChild(square);
  }
}

function makeMove(e) {
  if (!gameActive) return;

  if (e.target.classList.contains('empty')) {
    e.target.textContent = currentPlayer;
    e.target.classList.remove('empty');
    e.target.classList.add(currentPlayer === 'X' ? 'x-color' : 'o-color');

    if (checkWin(currentPlayer)) {
      alert(`${currentPlayer} wins!`);
      gameActive = false;
      return;
    }

    if (checkDraw()) {
      alert("Game Over! It's a draw.");
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkDraw() {
  const squares = Array.from(document.querySelectorAll('.square'));
  return squares.every(square => !square.classList.contains('empty'));
}

function checkWin(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  
  const squares = Array.from(document.querySelectorAll('.square'));
  return winPatterns.some(pattern => {
    return pattern.every(index => {
      return squares[index].textContent === player;
    });
  });
}

function reset() {
  makeBoard(); // Reset the board
  currentPlayer = 'X'; // Reset the current player
  gameActive = true; // Re-enable the game
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reset').addEventListener('click', reset);
});

makeBoard(); // Initialize the board on page load
