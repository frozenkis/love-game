const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

// Jika klik YES
yesBtn.addEventListener("click", () => {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
});

// Jika klik NO, tombolnya kabur
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.6;
  const y = Math.random() * window.innerHeight * 0.6;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
