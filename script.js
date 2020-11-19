const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var restart;
var moves = parseInt(
  document.querySelector("section.memory-game").getAttribute("data-grid-size")
);

function check_win() {
  grid_size = parseInt(
    document
      .querySelector("section.memory-game")
      .getAttribute("data-card-length")
  );
  fliped_cards = document.querySelectorAll("div.flip").length + 1;
  if (fliped_cards == grid_size) {
    return true;
  }
  return false;
}

function flipCard() {
  if (lockBoard) return;
  moves = moves - 1;
  if (moves < 0) {
    document.querySelector("div.moves").innerHTML = "moves " + 0;
    document.getElementById("over").innerHTML =
      "IT'S GAME OVER MAN, IT'S GAME OVER !!!!!!!";
  } else {
    document.querySelector("div.moves").innerHTML = "moves " + moves;
    if (check_win()) document.getElementById("win").innerHTML = "YOU WON";
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      //first card
      hasFlippedCard = true;
      firstCard = this;

      return;
    }

    // second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
cards.forEach((card) => card.addEventListener("click", flipCard));

function reset() {
  location.reload();
  return false;
}
