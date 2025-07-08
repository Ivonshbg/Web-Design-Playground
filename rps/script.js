console.log("Script is running!");
const playBtn = document.getElementById("playBtn");
const rpsDiv = document.getElementById("rpsButtons");
const result = document.getElementById("result");

const choices = ["Rock", "Paper", "Scissors"];

playBtn.addEventListener("click", () => {
  rpsDiv.style.display = "flex"; // ✅ set to flex to match your CSS intention
  playBtn.style.display = "none";

  const rpsButtons = document.querySelectorAll(".rps");
  rpsButtons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add("show");
    }, index * 300);
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
