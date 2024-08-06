let userPoints = 0;
let compPoints = 0;
let choices = document.querySelectorAll(".choice");
let userPointsPara = document.querySelector(".user-points");
let compPointsPara = document.querySelector(".comp-points");
let msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options =["rock","papper", "scissor"];
    const rndmIdx = Math.floor(Math.random()*3);
    return options[rndmIdx];
}
let drawGame = () =>{
    // console.log("Game Draw")
    msg.innerText = "Game was a Draw";
    msg.style.backgroundColor = "#7FC6A4"
};
const playGame =(userChoice) => {
    const compChoice = genCompChoice();
    // console.log("user choice is ",userChoice)
    // console.log("computer choice is ", compChoice)
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true
        if(compChoice==="rock"){
            userWin = userChoice==="papper" ? true : false;
        }
        else if(compChoice ==="papper"){
            userWin = userChoice==="scissor" ? true : false;
        }
        else{
            userWin = userChoice==="rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
let showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        // console.log("You Won");
        userPoints++;
        userPointsPara.innerText = userPoints;
        msg.innerText = `Computer choice was ${compChoice}, You Won This Game`;
        msg.style.backgroundColor = "#EF946C";
    }
    else{
        // console.log("Computer Won")
        compPoints++;
        compPointsPara.innerText = compPoints;
        msg.innerText = `Computer choice was ${compChoice}, Computer Won This Game`;
        msg.style.backgroundColor = "#941C2F";
    }
    
} 
choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice + " was selected by user")
        playGame(userChoice);
    })
})
