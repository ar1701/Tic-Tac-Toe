let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let body = document.querySelector("body");

let turnO = false;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("Game Over");
                return true;
            }
        }
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            if (box.innerText == "") {
                box.innerText = "O";
                turnO = false;
            }
            if(checkWinner()){
                console.log("O Wins!");
                body.classList.add("over");
                let h1 = document.createElement("h1");
                h1.innerText = "Game Over\n O WINS!";
                h1.classList.add("text");
                body.append(h1);
                setTimeout(()=>{
                    h1.innerText = "";
                    h1.classList.remove("text");
                    body.classList.remove("over");
                },1100);
                reset();
            }

        }
        else {
            if (box.innerText == "") {
                box.innerText = "X";
                turnO = true;
            }
            if(checkWinner()){
                console.log("X Wins!");
                body.classList.add("over");
                let h1 = document.createElement("h1");
                h1.innerText = "Game Over\n X WINS!";
                h1.classList.add("text");
                body.append(h1);
                setTimeout(()=>{
                    h1.innerText = "";
                    h1.classList.remove("text");
                    body.classList.remove("over");
                },1100);
                reset();
            }

        }
    });
});


resetBtn.addEventListener("click", ()=>{
    for(box of boxes){
        box.innerText = "";
    }
})

function reset(){
    for(box of boxes){
        box.innerText = "";
    }
}

