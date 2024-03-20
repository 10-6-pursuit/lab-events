
const colorPalette = document.querySelectorAll(".color")
const currColor = document.querySelector("#current-color")
const main = document.getElementById("canvas");
const paletteBar = document.getElementById("palette");

let isMouseDown = false;

function onMouseOver(event) {
    if (isMouseDown) {
        event.target.style.background = currColor.style.background;
    }
}

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

for (let i = 0; i < 100; i++) {
    const newCell = document.createElement("div");
    newCell.className = "cell";

    newCell.addEventListener("mousedown", (event) => {
        event.target.style.background = currColor.style.background;
    });

    newCell.addEventListener("mouseover", onMouseOver);

    main.appendChild(newCell);
}

// for (let i = 0; i < 100; i++) {
//     const newCell = document.createElement("div");

//     newCell.className = "cell";

//     canvas.addEventListener("mousedown", (event) => {
//             event.target.style.background = currColor.style.background;
//         });

//     canvas.addEventListener("mousedown", () => {
//         newCell.addEventListener("mouseover", (event) => {
//             event.target.style.background = currColor.style.background;
//         });
//       });
//       canvas.addEventListener("mouseup", () => {
//         newCell.removeEventListener("mouseover", (event) => {
//             event.target.style.background = currColor.style.background;
//         });
//       });
// //     newCell.addEventListener("mousedown", (event) => {
// //     event.target.style.background = currColor.style.background;
// // });


//     main.appendChild(newCell);
// }



for (let color of colorPalette) {
    color.addEventListener("click", (event) => {
        currColor.style.background = event.target.style.background;
    });

    // clickAndHold.apply(color, () => {
    //     currColor.style.background = color.style.background;
    //     document.querySelectorAll(".cell").forEach((cell) => {
    //         cell.style.background = color.style.background;
    //     });
    // });

    
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

const fillButton = document.createElement("button");
fillButton.textContent = "Fill";

resetButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = "none";
    });
});

fillButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = currColor.style.background;
    });
});

paletteBar.append(resetButton);
paletteBar.append(fillButton);

// class clickAndHold {
//     /**
//      * 
//      * @param {EventTarget} target The HTML element to apply the event to
//      * @param {Function} callback The function to run once the target is clicked and held
//      */
//     constructor(target, callback) {
//         this.target = target;
//         this.callback = callback;
//         this.isHeld = false;
//         this.activeHoldTimeoutId = null;

//         ["mousedown", "touchstart"].forEach(type => {
//             this.target.addEventListener(type, this._onHoldStart.bind(this));
//         });

//         ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
//             this.target.addEventListener(type, this._onHoldEnd.bind(this));
//         });

//     }

//     _onHoldStart() {
//         this.isHeld = true;

//         this.activeHoldTimeoutId = setTimeout(() => {
//             if (this.isHeld) {
//                 this.callback();
//             }
//         }, 1000);
//     }
//     _onHoldEnd() {
//         this.isHeld = false;
//         clearTimeout(this.activeHoldTimeoutId);
//     }

//     static apply(target, callback) {
//         new clickAndHold(target, callback);
//     }

// }


// clickAndHold.apply(resetButton, () => {
//     alert("Click and hold!");
// });
