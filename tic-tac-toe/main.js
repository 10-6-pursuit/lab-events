let ticTacToeSz = document.querySelector(".tic-tac-toe");
for(let i=0;i<9;i++){
    let squarez = document.createElement("div");
    squarez.setAttribute("class","square")
    ticTacToeSz.append(squarez);
}
