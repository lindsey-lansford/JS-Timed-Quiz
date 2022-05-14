const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");

const questionEl = document.getElementById("question");
const answerbtnsEl = document.getElementById("answer-buttons");

var timerText = document.querySelector(".timer-text");
var score = 0;
var timer = 0;
let mixQuestions, currentQIndex;

startButton.addEventListener("click", startGame);
startTimer();

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
mixQuestions = questions.sort(() => Math.random() - 0.5);
console.log(mixQuestions);
currentQIndex = 0;
questionContainerEl.classList.remove("hide");
setNextQuestion();
}

function setNextQuestion() {
  resetCard();
  console.log(mixQuestions[currentQIndex]);
  showQuestion(mixQuestions[currentQIndex]);
  console.log(showQuestion());
} 

function showQuestion(questionObj) {
  questionEl.innerHTML = questionObj.question;
  questionObj.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("btn");
      if (answer == questionObj.correct) {
          console.log("correct");
      button.style.backgroundColor = "green";
      button.addEventListener("click", correctButton());
    }
    // button.addEventListener("click", selectAnswer);
    // answerbtnsEl.appendChild(button);
  });
}

function correctButton() {
  score++;
  console.log(score);
}

function resetCard() {
  nextButton.classList.add("hide");
  while (answerbtnsEl.firstChild) {
    answerbtnsEl.removeChild(answerbtnsEl.firstChild);
  }
}

// function selectAnswer(event) {
//   const selectedButton = event.target;
// }

function endGame() {}
