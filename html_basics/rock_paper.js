let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const compGen = ()=>{
 const options =["rock","paper","scissors"];
  const genComp=Math.floor(Math.random()*3);
  return options[genComp];
}

const drawGame = () =>{
msg.innerText = "game was draw,play again";
msg.style.backgroundColor = "bisque";
}

const showWinner = (userWin,compChoice,userChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}` ;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Loose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice,)=>{
  console.log("user choosed =",userChoice);
  const compChoice =  compGen();
  console.log("computer choosed =",compChoice);
  

  if(userChoice === compChoice) {
    /// DrawGame
    drawGame();
  } else {
    let userWin = true;
    if (userChoice==="rock"){
     userWin =  compChoice === "paper" ? false : true;
    }else if (userChoice==="paper") {
      userWin =  compChoice === "scissors" ? false:true;
    }else{
      userWin = compChoice === "rock"? false:true;
    }
      showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

