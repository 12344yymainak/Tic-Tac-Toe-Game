let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let turn0 = true; //player x, palyer 0
let newgamebtn = document.querySelector(".btn");
let msgcontainer =document.querySelector(".msg-container");
let msg = document.querySelector(".winner");
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () => {
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the button was clicked");
        if(turn0){//player0
            box.innerText= "0";
            turn0= false;
        }
        else{//playerx
            box.innerText= "X";
            turn0= true;
        }
        box.disabled = true;
        checkWinner();
       
    });
       
    });
    const disableBoxes = () => {
        for(let box of boxes){
            box.disabled = true;
           
        }
    }
    const enableBoxes = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText ="";
        }
    }
    const showwinner = (winner) => {
        msg.innerText = `Congrats, the winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();

    }
    const checkWinner = () => {
        for( let pattern of winpattern) {
            
                let pos1val = boxes[pattern[0]].innerText;
                let pos2val = boxes[pattern[1]].innerText;
                let pos3val = boxes[pattern[2]].innerText;

                if(pos1val!="" && pos2val!="" && pos3val!=""){
                    if(pos1val==pos2val && pos2val==pos3val){
                        console.log("Winner", pos1val);
                        showwinner(pos1val);
                    }


                }
        }
    };

    newgamebtn.addEventListener("click", resetGame);
    resetbtn.addEventListener("click", resetGame);


