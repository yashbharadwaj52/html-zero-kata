let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new-game");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}





const showWinner=(winner)=>{
msg.innerText="Congratulations,Winner is "+ winner;
disableBoxes();
msgContainer.classList.remove("hide");
}



const resetGame=()=>{
    turn0=true;
    boxes.forEach((box)=>{
        box.innerText="";
        
    })
    enableBoxes();

}

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("The button was clicked");
    if(turn0){
        box.innerText="O";
        turn0=false;
                }
    else{
        box.innerText="X";
        turn0=true
        }
        box.disabled=true;
        checkWinner();
    })})

const checkWinner =() =>{
for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
            showWinner(pos1val);
        }
    }
}
}

reset.addEventListener("click",()=>{
    resetGame();
})
newGame.addEventListener("click",()=>{
    resetGame();
    msgContainer.classList.add("hide");
})