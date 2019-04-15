let userscore = 0;
let computerscore = 0;
const userScore_span = document.getElementById("user-score");
const computer_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertlettertoword(letter) {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  if (letter === "s") return "scissor";
}

function getcomputerchoice() {
  const choices = ["r", "p", "s"];
  const randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}
console.log(getcomputerchoice());
function win(user, computer) {
  userscore++;
  userScore_span.innerHTML = userscore;
  computer_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcomputerword = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertlettertoword(user)}${smalluserword} 
    &nbspBEATS &nbsp 
    ${convertlettertoword(computer)}${smallcomputerword} 
    &nbspYOU WIN`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("green-glow");
  }, 300);
}
function loose(user, computer) {
  computerscore++;
  userScore_span.innerHTML = userscore;
  computer_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcomputerword = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertlettertoword(user)}${smalluserword} 
    &nbsploose to &nbsp 
    ${convertlettertoword(computer)}${smallcomputerword} 
    &nbspYOU lOST`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("red-glow");
  }, 300);
}
function draw(user, computer) {
  userScore_span.innerHTML = userscore;
  computer_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcomputerword = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertlettertoword(user)}${smalluserword} 
    &nbspEQUALS &nbsp 
    ${convertlettertoword(computer)}${smallcomputerword} 
    &nbspGAME DRAWN`;
  document.getElementById(user).classList.add("gray-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("gray-glow");
  }, 300);
}

function game(userchoice) {
  const computerchoice = getcomputerchoice();
  switch (userchoice + computerchoice) {
    case "pr":
    case "sp":
    case "rs":
      win(userchoice, computerchoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loose(userchoice, computerchoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userchoice, computerchoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissor_div.addEventListener("click", function() {
    game("s");
  });
}
main();
