//button variables
var highScoresButton = document.querySelector(".high-scores-button");
var startButton = document.querySelector(".start-button");
var answerButton = document.querySelector(".answer-button");
var backButton = document.querySelector(".back-button");
//section variables
var highScoresSection = document.querySelector(".high-scores-section");
var startSection = document.querySelector(".start-section");
var questionsSection = document.querySelector(".questions-section");
//Display variables
var highScoreDisplay = highScoresSection.style.display;
var startDisplay = startSection.style.display;
var questionsDisplay = questionsSection.style.display;
//timer variables
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
//questions variables
var questionsArray = [];
var questionOne = ["Hello", "What", "When", "Why", "How"];
var questionTwo = ["World", "What", "When", "Why", "How"];
var questionThree = ["How", "What", "When", "Why", "How"];
var questionFour = ["Are", "What", "When", "Why", "How"];
var questionFive = ["You", "What", "When", "Why", "How"];
var questionText = document.querySelector(".question-text");
var answerBtnOne = document.querySelector(".answer-button-1");
var answerBtnTwo = document.querySelector(".answer-button-2");
var answerBtnThree = document.querySelector(".answer-button-3");
var answerBtnFour = document.querySelector(".answer-button-4");
var answerResult = document.querySelector(".answer-result");

//other variables
var score = 0;

//create function for high score button
function toggleHighScore() {
  if (highScoreDisplay === "") {
    highScoresSection.style.display = "inline-block";
    startSection.style.display = "none";
    questionsSection.style.display = "none";

    timerElement.textcontent = timerCount;
    clearInterval(timer);
  }
}

//create function for Go back button
function goBack() {
  highScoresSection.style.display = "none";
  questionsSection.style.display = "none";
  startSection.style.display = "inline-block";
}

//create function for Start button
function startGame() {
  startSection.style.display = "none";
  questionsSection.style.display = "inline-block";
  timerCount = 60;
  score = 0;
  startTimer();
  questionsArray = ["q1", "q2", "q3", "q4", "q5"];
  shuffle(questionsArray);
  shuffle(questionOne);
  shuffle(questionTwo);
  shuffle(questionThree);
  shuffle(questionFour);
  shuffle(questionFive);
  question();
  console.log(questionsArray);
}

//create function for starting timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

//create function to shuffle questions
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//create function to show question and answers
function question() {
  if (questionsArray[0] === "q1") {
    questionText.innerHTML = questionOne[0];
    answerBtnOne.textContent = questionOne[1];
    answerBtnTwo.textContent = questionOne[2];
    answerBtnThree.textContent = questionOne[3];
    answerBtnFour.textContent = questionOne[4];
    questionsArray.shift();
  } else if (questionsArray[0] === "q2") {
    questionText.innerHTML = questionTwo[0];
    answerBtnOne.textContent = questionTwo[1];
    answerBtnTwo.textContent = questionTwo[2];
    answerBtnThree.textContent = questionTwo[3];
    answerBtnFour.textContent = questionTwo[4];
    questionsArray.shift();
  } else if (questionsArray[0] === "q3") {
    questionText.innerHTML = questionThree[0];
    answerBtnOne.textContent = questionThree[1];
    answerBtnTwo.textContent = questionThree[2];
    answerBtnThree.textContent = questionThree[3];
    answerBtnFour.textContent = questionThree[4];
    questionsArray.shift();
  } else if (questionsArray[0] === "q4") {
    questionText.innerHTML = questionFour[0];
    answerBtnOne.textContent = questionThree[1];
    answerBtnTwo.textContent = questionThree[2];
    answerBtnThree.textContent = questionThree[3];
    answerBtnFour.textContent = questionThree[4];
    questionsArray.shift();
  } else if (questionsArray[0] === "q5") {
    questionText.innerHTML = questionFive[0];
    answerBtnOne.textContent = questionFive[1];
    answerBtnTwo.textContent = questionFive[2];
    answerBtnThree.textContent = questionFive[3];
    answerBtnFour.textContent = questionFive[4];
    questionsArray.shift();
  } else {
    endGame();
  }
}
//create function for answer
function answer() {
  if (questionsArray[0] === "q1") {
    if (answerButton.textContent === "What") {
      correct();
    } else {
      incorrect();
    }
  }
  if (questionsArray[0] === "q2") {
    if (answerButton.textContent === "What") {
      correct();
    } else {
      incorrect();
    }
  }
  if (questionsArray[0] === "q3") {
    if (answerButton.textContent === "What") {
      correct();
    } else {
      incorrect();
    }
  }
  if (questionsArray[0] === "q4") {
    if (answerButton.textContent === "What") {
      correct();
    } else {
      incorrect();
    }
  }
  if (questionsArray[0] === "q5") {
    if (answerButton.textContent === "What") {
      correct();
    } else {
      incorrect();
    }
  }
  question();
}
//create answerResult functions
function correct() {
  answerResult.innerHTML = "Correct";
  score += 5;
  clearResult();
}
function incorrect() {
  answerResult.innerHTML = "Incorrect";
  timerCount -= 10;
  clearResult();
}
function clearResult() {
  answerResult.innerHTML = "";
}

//delay clearResult function
setTimeout(clearResult, 2000);

function endGame() {
  prompt("Score: " + score + "\nEnter Initials:");
  toggleHighScore();
}

//create function to show question
highScoresButton.addEventListener("click", toggleHighScore);

startButton.addEventListener("click", startGame);

backButton.addEventListener("click", goBack);

startButton.addEventListener("click", startGame);

answerButton.addEventListener("click", answer);
