var reloadBtn = document.getElementById("btn-reload");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var result = document.getElementById("result");

var freeze = false;

function reload() {
  freeze = false;
  compChoice = computerChoice();
  console.log(compChoice);
  console.log("inside reload");
  result.innerHTML = "";
  rock.style.boxShadow = "none";
  paper.style.boxShadow = "none";
  scissor.style.boxShadow = "none";
}

function computerChoice() {
  var Choice = Math.floor(Math.random() * 3);
  console.log(Choice);
  if (Choice === 0) {
    return "rock";
  } else if (Choice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

var compChoice = computerChoice();
console.log(compChoice);

function userChoiceRock() {
  if (freeze === false) {
    console.log("inside rock");
    if (compChoice === "rock") {
      var endResult = { result: "Tied", color: "yellow" };
    } else if (compChoice === "paper") {
      var endResult = { result: "You Lost", color: "red" };
    } else {
      var endResult = { result: "You won", color: "#4ad934" };
    }
    console.log(endResult);
    rock.style.boxShadow = "0px 0px 15px #4ad934";
    result.innerHTML = endResult["result"];
    result.style.color = endResult["color"];

    var bot = document.getElementById(compChoice);
    if (bot === rock) {
      rock.style.boxShadow = "0px 0px 15px yellow";
    } else {
      bot.style.boxShadow = "0px 0px 15px red";
    }
    freeze = true;
  }
}

function userChoicePaper() {
  if (freeze === false) {
    if (compChoice === "rock") {
      var endResult = { result: "You won", color: "#4ad934" };
    } else if (compChoice === "paper") {
      var endResult = { result: "Tied", color: "yellow" };
    } else {
      var endResult = { result: "You Lost", color: "red" };
    }

    paper.style.boxShadow = "0px 0px 15px #4ad934";
    result.innerHTML = endResult["result"];
    result.style.color = endResult["color"];

    var bot = document.getElementById(compChoice);
    if (bot === paper) {
      paper.style.boxShadow = "0px 0px 15px yellow";
    } else {
      bot.style.boxShadow = "0px 0px 15px red";
    }
    freeze = true;
  }
}

function userChoiceScissor() {
  if (freeze === false) {
    if (compChoice === "rock") {
      var endResult = { result: "You Lost", color: "red" };
    } else if (compChoice === "paper") {
      var endResult = { result: "You won", color: "#4ad934" };
    } else {
      var endResult = { result: "Tied", color: "yellow" };
    }

    scissor.style.boxShadow = "0px 0px 15px #4ad934";
    result.innerHTML = endResult["result"];
    result.style.color = endResult["color"];

    var bot = document.getElementById(compChoice);
    if (bot === scissor) {
      scissor.style.boxShadow = "0px 0px 15px yellow";
    } else {
      bot.style.boxShadow = "0px 0px 15px red";
    }
    freeze = true;
  }
}

rock.addEventListener("click", userChoiceRock);
rock.onmouseover = function () {
  if (freeze === false) this.style.boxShadow = "0px 0px 15px blue";
};
rock.onmouseleave = function () {
  if (freeze === false) this.style.boxShadow = "none";
};

paper.addEventListener("click", userChoicePaper);
paper.onmouseover = function () {
  if (freeze === false) this.style.boxShadow = "0px 0px 15px blue";
};
paper.onmouseleave = function () {
  if (freeze === false) this.style.boxShadow = "none";
};

scissor.addEventListener("click", userChoiceScissor);
scissor.onmouseover = function () {
  if (freeze === false) this.style.boxShadow = "0px 0px 15px blue";
};
scissor.onmouseleave = function () {
  if (freeze === false) this.style.boxShadow = "none";
};

reloadBtn.addEventListener("click", reload);
