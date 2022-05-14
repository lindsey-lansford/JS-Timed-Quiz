const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");

const questionEl = document.getElementById("question");
const answerbtnsEl = document.getElementById("answer-buttons");

var timerText = document.querySelector(".timer-text");
var score = 0;
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
console.log("started");
startButton.classList.add("hide");
mixQuestions = questions.sort(() => Math.random() - .5);
currentQIndex = 0;
questionContainerEl.classList.remove("hide");
setNextQuestion();
}


function setNextQuestion() {
    resetCard()
    showQuestion(mixQuestions[currentQIndex]);
} 

function showQuestion(question) {
    questionEl.innerHTML = question.question;
    question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innertext = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerbtnsEl.appendChild(button);
  });
}

function resetCard() {
    nextButton.classList.add("hide");
    while (answerbtnsEl.firstChild) {
        answerbtnsEl.removeChild
        (answerbtnsEl.firstChild)
    }
}

function selectAnswer(event) {
  const selectedButton = event.target;

}

function endGame() {
    
}




