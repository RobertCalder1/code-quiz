//button variables
var highScoresButton = document.querySelector(".high-scores-button");
var startButton = document.querySelector("start-button");
var answerButton = document.querySelector("answer-button");
//section variables
var highScoresSection = document.querySelector(".high-scores-section");
var startSection = document.querySelector(".start-section");
var questionsSection = document.querySelector(".questions-section");
//Display variables
var highScoreDisplay = highScoresSection.style.display;
var startDisplay = startSection.style.display;
var questionsDisplay = questionsSection.style.display;

function toggleHighScore() {
  if (highScoreDisplay === "none") {
    highScoreDisplay = "inline-block";
    startDisplay = "none";
    questionsDisplay = "none";
    console.log(highScoreDisplay);
  } else {
    return;
  }
}

highScoresButton.addEventListener("click", toggleHighScore());
