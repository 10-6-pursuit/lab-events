//state
let pickedColor = null;
let isDrawing = false;
let isEraser = false;
let insideCanvas = false;

// Queries
const pallete = document.querySelectorAll(".color");
const canvas = document.querySelector("#canvas");
const currentColor = document.querySelector("#current-color");
const resetBtn = document.querySelector("#controls__reset");
const fillAllBtn = document.querySelector("#controls__fill");
const eraserBtn = document.querySelector("#controls__eraser");
const gridSize = document.querySelector("#grid-size");
const eraserCursor = document.querySelector(".eraser");
const penCursor = document.querySelector(".pen");

//Events
window.onload = () => {
	pickColor("black");
	createGridItems();
};
pallete.forEach((ele) => ele.addEventListener("click", pickColor));
resetBtn.addEventListener("click", resetCanvas);
fillAllBtn.addEventListener("click", fillAllCanvas);
gridSize.addEventListener("change", resizeGrid);
eraserBtn.addEventListener("click", turnEraser);
canvas.addEventListener("mouseenter", updateCursorEnter);
canvas.addEventListener("mouseleave", updateCursorLeave);
canvas.addEventListener("mousemove", trackCursor);

//functions
function createGridItems(count = 64) {
	for (let i = 1; i <= count; i++) {
		const div = document.createElement("div");
		div.classList.add("canvas-item");
		div.addEventListener("mousedown", () => (isDrawing = true));
		div.addEventListener("mouseup", () => (isDrawing = false));
		div.addEventListener("mousemove", draw);
		canvas.append(div);
	}
}

function pickColor(e) {
	const color = e.target ? e.target.id : e;
	currentColor.style.backgroundColor = color;
	pickedColor = color;
}

function draw(e) {
	e.preventDefault();

	if (!isDrawing) return;

	e.target.style.backgroundColor = isEraser ? "white" : pickedColor;
}

function resetCanvas() {
	location.reload();
}

function fillAllCanvas() {
	const canvasItem = document.querySelectorAll(".canvas-item");
	canvasItem.forEach((ele) => (ele.style.backgroundColor = pickedColor));
}
function turnEraser() {
	isEraser = !isEraser;

	eraserBtn.innerText = eraserBtn.innerText == "Eraser" ? "Pencil" : "Eraser";
}

function resizeGrid(e) {
	const size = e.target.value;
	canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	createGridItems(Number(size) ** 2);
}

function updateCursorEnter(e) {
	insideCanvas = true;
	canvas.style.cursor = "none";
	if (isEraser) {
		penCursor.style.display = "none";
		eraserCursor.style.display = "block";
	} else {
		penCursor.style.display = "block";
		eraserCursor.style.display = "none";
	}
}
function updateCursorLeave(e) {
	canvas.style.cursor = "pointer";
	insideCanvas = false;
	penCursor.style.display = "none";
	eraserCursor.style.display = "none";
}
function trackCursor(e) {
	if (insideCanvas) {
		const w = penCursor.clientWidth;
		const h = penCursor.clientHeight;
		penCursor.style.transform = `translate(${e.clientX - w / 2 + 45}px,${
			e.clientY - h / 2 - 45
		}px)`;
		eraserCursor.style.transform = `translate(${e.clientX - w / 2 - 45}px,${
			e.clientY - h / 2 - 95
		}px)`;
	}
}
