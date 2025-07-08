console.log("Script is running!");
const playBtn = document.getElementById("playBtn");
const rpsDiv = document.getElementById("rpsButtons");
const result = document.getElementById("result");

const choices = ["Rock", "Paper", "Scissors"];

playBtn.addEventListener("click", () => {
  rpsDiv.style.display = "block";
  playBtn.style.display = "none";

  // Get all RPS buttons
  const rpsButtons = document.querySelectorAll(".rps");

  // Add `.show` with a slight delay for each
  rpsButtons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add("show");
    }, index * 300); // 300ms stagger
  });
});

document.querySelectorAll(".rps").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    const pcChoice = choices[Math.floor(Math.random() * 3)];

    let outcome = "";
    if (userChoice === pcChoice) {
      outcome = "Tie!";
    } else if (
      (userChoice === "Rock" && pcChoice === "Scissors") ||
      (userChoice === "Paper" && pcChoice === "Rock") ||
      (userChoice === "Scissors" && pcChoice === "Paper")
    ) {
      outcome = "You win!";
    } else {
      outcome = "You lose!";
    }

    result.textContent = ` You chose ${userChoice}, computer chose ${pcChoice}. ${outcome}`;
  });
});
