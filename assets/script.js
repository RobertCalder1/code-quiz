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

function toggleHighScore() {
  if (highScoreDisplay === "") {
    highScoresSection.style.display = "inline-block";
    startSection.style.display = "none";
    questionsSection.style.display = "none";

    timerElement.textcontent = timerCount;
    clearInterval(timer);
  } else {
    return;
  }
}

function goBack() {
  highScoresSection.style.display = "none";
  startSection.style.display = "inline-block";
  questionsSection.style.display = "none";
}

function startGame() {
  startSection.style.display = "none";
  questionsSection.style.display = "inline-block";
  timerCount = 90;
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
  }, 1000);
}

highScoresButton.addEventListener("click", toggleHighScore);

startButton.addEventListener("click", startGame);

backButton.addEventListener("click", goBack);

startButton.addEventListener("click", start);
