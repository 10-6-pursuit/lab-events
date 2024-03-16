document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const currentColorDisplay = document.getElementById('current-color');
    let currentColor = 'black';
    let mouseDown = false;
  
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);
  
    
    const gridSize = 32; 
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('mouseover', paintCell);
      cell.addEventListener('mousedown', paintCell);
      grid.appendChild(cell);
    }
  
    function paintCell(event) {
    
      if (mouseDown || event.type === 'mousedown') {
        event.target.style.backgroundColor = currentColor;
      }
    }
  
    document.getElementById('palette').addEventListener('click', function(event) {
      if (event.target.classList.contains('color-choice')) {
        currentColor = event.target.style.backgroundColor;
        currentColorDisplay.style.backgroundColor = currentColor;
      }
    });
  
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', () => {
      document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
      });
    });
    document.body.appendChild(resetButton);
  
   
    const fillButton = document.createElement('button');
    fillButton.textContent = 'Fill All';
    fillButton.addEventListener('click', () => {
      document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = currentColor;
      });
    });
    document.body.appendChild(fillButton);
  });
  