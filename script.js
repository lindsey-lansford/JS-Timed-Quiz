const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");

const questionEl = document.getElementById("question");
const answerbtnsEl = document.getElementById("answer-buttons");

var timerText = document.getElementById("timer-text");
var timer = 0;

const gameOverContainer = document.getElementById("end-container");
const userInitials = document.getElementById("user");
var finalScore = document.getElementById("final-score");
var score = 0;

let mixQuestions
let currentQIndex = 0


startButton.addEventListener("click", startGame);

function startTimer() {
  console.log("testing timer");
  var gameTimer = setInterval(function () {
    if (timer === 0) {
      clearInterval(gameTimer);
      endGame();
    }

    timerText.textContent = "Time Remaining: " + timer;
    timer--;
  }, 1000);
}

function startGame() {
  timer = 60;
  startTimer();
  timerText.innerHTML = timer;
console.log("started");
startButton.classList.add("hide");
  mixQuestions = questions;
console.log(mixQuestions);
questionContainerEl.classList.remove("hide");
setNextQuestion();
}

function setNextQuestion() {
  resetCard();
  console.log(currentQIndex)
  showQuestion(mixQuestions[currentQIndex]);
    currentQIndex++;
}

function showQuestion(questionObj) {
  console.log(questionObj)
    questionEl.innerHTML = questionObj.question;
  questionObj.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    answerbtnsEl.appendChild(button);
      // if (answer == questionObj.correct) {
      //     console.log("correct");
      // button.style.backgroundColor = "green";
      // button.addEventListener("click", correctButton());
      // }
    // if (answer !== questionObj.correct) {
    //     button.style.backgroundColor = "red";
    //     button.addEventListener("click", incorrectButton());
    // }
  });
}

// function correctButton() {
//   score++;
//   console.log(score);
// }

function resetCard() {
  nextButton.classList.add("hide");
  while (answerbtnsEl.firstChild) {
    answerbtnsEl.removeChild(answerbtnsEl.firstChild);
  }
}

function selectAnswer(event) {
  const selectedButton = event.target;
  console.log(selectedButton)
  if (currentQIndex < mixQuestions.length) {
    setNextQuestion();
  } else { endGame() }

}

function endGame() {
  alert("Game OVER.");
  questionEl.classList.add("hide");
  answerbtnsEl.classList.add("hide");
  gameOverContainer.classList.remove("hide");

}
