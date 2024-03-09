const canvas = document.querySelector('main#canvas');

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    canvas.appendChild(cell);
  }
}

// When a color is clicked in the #palette, the #current-color element should have its background changed to that color.
const palletColors = document.querySelectorAll('div.color');
for (const palletColor of palletColors) {
  const currentColor = document.querySelector('section#current-color');
  let backgroundColor = palletColor.style.backgroundColor;
  palletColor.addEventListener(
    'click',
    () => (currentColor.style.backgroundColor = backgroundColor)
  );
}

// When you click on a .cell, its background should change to match the background of #current-color.
const cells = document.querySelectorAll('.cell');
for (const cell of cells) {
  cell.addEventListener('click', () => {
    const currentColor = document.querySelector('section#current-color');

    cell.style.backgroundColor = currentColor.style.backgroundColor;

    clearButton.addEventListener(
      'click',
      () => (cell.style.backgroundColor = 'white')
    );
  });
}

// Additional feature:
// Create a button that, when clicked, resets all cells so that they all have a background of white.
const clearButton = document.createElement('button');
clearButton.innerHTML = 'Erase';
clearButton.style.display = 'block';
clearButton.style.margin = 'auto';
clearButton.style.padding = '5px';

const wrapper = document.querySelector('#wrapper');
wrapper.appendChild(clearButton);
