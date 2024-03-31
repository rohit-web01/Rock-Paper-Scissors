let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let msg = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);    // for randomly generating the computer choice between 0, 1, 2;
    return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        // console.log("You Win!");
        ++userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        user.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("You lose.");
        ++compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        comp.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    const compChoice = genComputerChoice();
    // console.log("User Choice = ",userChoice);
    // console.log("Comp Choice = ",compChoice);

    if(userChoice === compChoice){
        // console.log("It is a Draw!");
        msg.innerText = "Game Draw! Play Again.";
        msg.style.backgroundColor = "rgb(0, 0, 92)";
    } 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            // userChoice === "scissors"
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
