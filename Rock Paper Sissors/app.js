let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("Game was a Draw");
  msg.innerText = "Draw match,Try again.";
  msg.style.backgroundColor = "black";
}

const genCompChoice = () => {
  const options = ["rock", "paper", "sissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const msg = document.querySelector("#msg");

const showWin = (userWin,userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!!");
    msg.innerText = `You Win!! ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
  }else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!!");
    msg.innerText = `You loose!. ${compChoice} beats ${userChoice} `;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("user has choosen ", userChoice);
  //generate logic
  const  compChoice = genCompChoice();
  console.log("cpu has choosen ", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //sissors paper
      userWin = compChoice === "paper"? false:true
    } else if (userChoice === "paper"){
      //sissors rock
      userWin = compChoice === "sissors"? false:true
    }else{
      //rock paper
      userWin = compChoice === "rock"? false:true
    }
    showWin(userWin, userChoice, compChoice);
  }


}
  choices.forEach((choice) => {

    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);

    })
  }
  )
