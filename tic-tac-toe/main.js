//State
let plays = new Array(9).fill("");
const playsLimit = 9;
let playsCount = 0;
let previousPlayer = "X";
let isThereWinner = false;

//Queries
const title = document.querySelector("h1");
const square = document.querySelectorAll(".board__sq");
square.forEach((ele) => ele.addEventListener("click", handlePlay));

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetGame);

function handlePlay(e) {
	previousPlayer = previousPlayer === "X" ? "O" : "X";
	e.target.innerText = previousPlayer;
	e.target.style.pointerEvents = "none";
	playsCount++;
	setPlay(e);
	checkForWin();
}

function setPlay(e) {
	plays[e.target.id] = previousPlayer;
}
function checkForWin() {
	if (
		(plays[0] === plays[1] &&
			plays[1] === plays[2] &&
			plays[0] &&
			plays[1] &&
			plays[2]) ||
		(plays[3] === plays[4] &&
			plays[4] === plays[5] &&
			plays[3] &&
			plays[4] &&
			plays[5]) ||
		(plays[6] === plays[7] &&
			plays[7] === plays[8] &&
			plays[6] &&
			plays[7] &&
			plays[8]) ||
		(plays[0] === plays[3] &&
			plays[3] === plays[6] &&
			plays[0] &&
			plays[3] &&
			plays[6]) ||
		(plays[1] === plays[4] &&
			plays[4] === plays[7] &&
			plays[1] &&
			plays[4] &&
			plays[7]) ||
		(plays[2] === plays[5] &&
			plays[5] === plays[8] &&
			plays[2] &&
			plays[5] &&
			plays[8]) ||
		(plays[0] === plays[4] &&
			plays[4] === plays[8] &&
			plays[0] &&
			plays[4] &&
			plays[8]) ||
		(plays[2] === plays[4] &&
			plays[4] === plays[6] &&
			plays[2] &&
			plays[4] &&
			plays[6])
	) {
		isThereWinner = true;
		showFinalResult(previousPlayer);
	}

	if (playsCount === playsLimit && !isThereWinner) {
		showFinalResult();
	}
}

function showFinalResult(winner = "") {
	title.innerText = winner
		? `Congrats on the win! ${winner}`
		: "It' s a draw guys";
	square.forEach((ele) => (ele.style.pointerEvents = "none"));
}

function resetGame() {
	playsCount = 0;
	previousPlayer = "X";
	isThereWinner = false;
	title.innerText = "Tic Tac Toe";
	plays = new Array(9).fill("");
	square.forEach((ele) => {
		ele.innerText = "";
		ele.style.pointerEvents = "auto";
	});
}
