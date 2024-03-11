document.addEventListener("DOMContentLoaded", () => {
//Created own variables
  const $ = function(args) {
    return document.querySelector(args);
  }

  const $$ = function(args) {
    return document.querySelectorAll(args);
  }

  HTMLElement.prototype.$ = function(s) {
    return this.querySelector(s);
  }

  HTMLElement.prototype.$$ = function(s) {
    return this.querySelectorAll(s);
  }

  //When color is clicked in the #palette, the #current-color background changes to that color.
  const palette = $$("#palette .color");
  const currentColor = $("#current-color");
  const canvas = $("#canvas");

  palette.forEach((color) => {
    color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
    })
  })


  //When clicked on a .cell,background changes to match the background of #current-color.

  //event.target: Triggers the specific element that was clicked, in this case the specific cell we click.
  canvas.addEventListener("click", (event) => {
    const targetCell = event.target;
    targetCell.style.background = currentColor.style.background;
  })

  //adding reset functionality to button
  const reset = $(".reset");
  reset.addEventListener("click", () => {
    location.reload();
  });

  //adding colorAll functionality to button
  const colorAll = $(".all");
  colorAll.addEventListener("click", () => {
    const cells = $$(".cell")
    cells.forEach((cell) => {
      cell.style.background = currentColor.style.background;
    })
  });
})