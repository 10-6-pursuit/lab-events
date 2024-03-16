let turn = "x";
let ticTacToeSz = document.querySelector(".tic-tac-toe");
let gameover = false;
for(let i=0;i<9;i++){
    let squarez = document.createElement("div");
    squarez.setAttribute("class","square");
    ticTacToeSz.append(squarez);
    squarez.addEventListener("click", event => {
        if(!event.target.innerText){
            event.target.innerText=turn
        }
        if(!gameover){
            checkWinner();
            turn === "x" ? turn = "o": turn = "x";
        }
    })
}
let allSquarez = document.querySelectorAll(".square");

function checkWinner(){
    for(let i = 0;i <= 6; i+=3){
        if(turn === allSquarez[i].innerText && turn === allSquarez[i+1].innerText && turn === allSquarez[i+2].innerText){
            console.log(`Player ${turn} wins!`);
            gameover = true;
        }
    }
    for(let i = 0; i <= 2 ; i++){
        if(turn === allSquarez[i].innerText && turn === allSquarez[i+3].innerText && turn === allSquarez[i+6].innerText){
            console.log(`Player ${turn} wins!`);
            gameover = true;
        }
    }
        if(turn === allSquarez[0].innerText && turn === allSquarez[4].innerText && turn === allSquarez[8].innerText){
            console.log(`Player ${turn} wins!`);
            gameover = true;
        }
        if(turn === allSquarez[2].innerText && turn === allSquarez[4].innerText && turn === allSquarez[6].innerText){
            console.log(`Player ${turn} wins!`);
            gameover = true;
    }
}  

const button = document.querySelector("button");
button.addEventListener("click",event =>{
    for(let i = 0;i<allSquarez.length;i++){
        allSquarez[i].innerText = ""
        gameover = true;
    }
})