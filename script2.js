const myQuestions = [
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: [
      { text: "Storing numbers, dates, or other values", correct: true },
      { text: "Varying randomly", correct: false },
      { text: "Causing high-school algebra flashbacks", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: [
      { text: "Storing numbers, dates, or other values", correct: true },
      { text: "Varying randomly", correct: false },
      { text: "Causing high-school algebra flashbacks", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: [
      { text: "Storing numbers, dates, or other values", correct: true },
      { text: "Varying randomly", correct: false },
      { text: "Causing high-school algebra flashbacks", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: [
      { text: "Storing numbers, dates, or other values", correct: true },
      { text: "Varying randomly", correct: false },
      { text: "Causing high-school algebra flashbacks", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
];





/* <div id="count">Start</div>;

var count = 15;
var interval = setInterval(function () {
  document.getElementById("count").innerHTML = count;
  count--;
  if (count === 0) {
    clearInterval(interval);
    document.getElementById("count").innerHTML = "Done";
    // or...
    alert("You're out of time!");
  }
}, 1000); */


// var count = 15;
// var timer = setInterval(function () {
//   console.log(count);
//   count--;
//   if (count === 0) {
//     stopInterval();
//   }
// }, 1000);

// var stopInterval = function () {
//   console.log("time is up!");
//   clearInterval(timer);
// };



// var sec = 15;
// var time = setInterval(myTimer, 1000);

// function myTimer() {
//   document.getElementById("timer").innerHTML = sec + "sec left";
//   sec--;
//   if (sec == -1) {
//     clearInterval(time);
//     alert("Time out!! :(");
//   }
// }
// Time: <span id="timer"></span>;









// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button 
    //eventListner for the button
    
// THEN a timer starts and I am presented with a question
    //Need a setInterval(function() to get a JS countdown

// WHEN I answer a question
// THEN I am presented with another question
        //this will be a for loop ?

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
    //1 second=1000
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    //needs something to watch the time: things to check is if they have another question after the timer goes off: end game function

// WHEN the game is over
// THEN I can save my initials and score
    //prompt the initials for your high school, array of user high scores: objects: score & user--filter the array to look at all score; highest to lowest, to save the scores use: localstorage

