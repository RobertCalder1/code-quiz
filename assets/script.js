//button variables
var highScoresButton = document.querySelector(".high-scores-button");
var startButton = document.querySelector(".start-button");
var answerButton = document.getElementsByClassName("answer-button");
var backButton = document.querySelector(".back-button");
var clearButton = document.querySelector(".clear-scores-button");
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
var questionsArray = [
  {
    question: "Hello",
    answers: ["What", "When", "Why", "How"],
    correct: "What",
  },
  {
    question: "World",
    answers: ["What", "When", "Why", "How"],
    correct: "What",
  },
  {
    question: "Lets",
    answers: ["What", "When", "Why", "How"],
    correct: "What",
  },
  {
    question: "Have",
    answers: ["What", "When", "Why", "How"],
    correct: "What",
  },
  {
    question: "Fun",
    answers: ["What", "When", "Why", "How"],
    correct: "What",
  },
];
var questionIndex = 0;
var questionTextElement = document.querySelector(".question-text");
var answerBtnOne = document.querySelector(".answer-button-1");
var answerBtnTwo = document.querySelector(".answer-button-2");
var answerBtnThree = document.querySelector(".answer-button-3");
var answerBtnFour = document.querySelector(".answer-button-4");
var answerResult = document.querySelector(".answer-result");
//other variables
var score = 0;
var highScoreRecords = document.querySelector(".score-records");
var highScoresRecords = "";

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
  questionIndex = 0;
  shuffle(questionsArray);
  startTimer();
  questions();
}

//create function for starting timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
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
function questions() {
  if (questionIndex < 5) {
    var question = questionsArray[questionIndex];
    shuffle(question.answers);
    questionTextElement.innerHTML = question.question;
    answerBtnOne.textContent = question.answers[0];
    answerBtnTwo.textContent = question.answers[1];
    answerBtnThree.textContent = question.answers[2];
    answerBtnFour.textContent = question.answers[3];
  } else {
    endGame();
  }
}
//create function for answer selection
function answer(event) {
  var question = questionsArray[questionIndex];
  if (event.target.textContent === question.correct) {
    correct();
  } else {
    incorrect();
  }
  questions();
}
//answerResult functions
function correct() {
  answerResult.innerHTML = "Correct";
  score += 5;
  setTimeout(clearResult, 1000);
  questionIndex++;
}
function incorrect() {
  answerResult.innerHTML = "Incorrect";
  timerCount -= 10;
  setTimeout(clearResult, 1000);
  questionIndex++;
}

function clearResult() {
  answerResult.innerHTML = "";
}

function endGame() {
  setHighScore();
  toggleHighScore();
}

//runs on page load
function init() {
  getHighScores();
}

function setHighScore() {
  var highScores = document.createTextNode(
    prompt("Score: " + score + "\nEnter Initials:") + ": " + score
  );
  var createLi = document.createElement("li");
  createLi.appendChild(highScores);
  highScoreRecords.appendChild(createLi);
  localStorage.setItem(
    "highScoreRecords",
    JSON.stringify(highScoreRecords.textContent)
  );
  console.log(localStorage.getItem("highScoreRecords"));
}

function getHighScores() {
  var storedScores = localStorage.getItem("highScoreRecords");
  var highScores = document.createTextNode(storedScores);
  var createLi = document.createElement("li");
  createLi.appendChild(highScores);
  highScoreRecords.appendChild(createLi);
  console.log(storedScores);
}

function clearHighScores() {
  highScoreRecords.innerHTML = "";
  localStorage.setItem("highScoreRecords", "");
  console.log(localStorage.getItem("highScoreRecords"));
}

highScoresButton.addEventListener("click", toggleHighScore);
startButton.addEventListener("click", startGame);
backButton.addEventListener("click", goBack);
startButton.addEventListener("click", startGame);
clearButton.addEventListener("click", clearHighScores);
answerButton[0].addEventListener("click", answer);
answerButton[1].addEventListener("click", answer);
answerButton[2].addEventListener("click", answer);
answerButton[3].addEventListener("click", answer);

init();
