"use strict";

// Deefine variables
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let stratGuessing = document.querySelector("h4");
let bodyS = document.querySelector("body");
let scoreRes = document.querySelector(".scoreRes");
let number = document.querySelector(".number");
let highScore = document.querySelector(".highscoreRes");

// Checking number
document.querySelector("#checkNumber").addEventListener("click", function () {
  let numberValue = Number(document.getElementById("numberValue").value);
  if (!numberValue) {
    stratGuessing.textContent = " ⛔️ Wrong number";
  } else if (numberValue === randomNumber) {
    stratGuessing.textContent = "🎉 GREAT JOOB";
    bodyS.style.background = "Green";
    number.textContent = randomNumber;
    number.style.width = "30%";
    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
  } else if (score > 1) {
    stratGuessing.textContent =
      numberValue > randomNumber ? "📈 To high" : "📉 To low";
    score--;
    scoreRes.textContent = score;
  } else {
    stratGuessing.textContent = " ⛔️ Your lose the game";
    scoreRes.textContent = 0;
  }
});

// Button play again
document.querySelector("#again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  bodyS.style.background = "#222";
  number.textContent = "?";
  document.querySelector("#numberValue").value = "";
  stratGuessing.textContent = "Start guessing....";
  scoreRes.textContent = score;
  number.style.width = "14%";
});
