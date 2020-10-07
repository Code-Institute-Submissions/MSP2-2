const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
    //first card
    hasFlippedCard = true;
    firstCard = this;
  } else {
     // second click
      hasFlippedCard = false;
      secondCard = this;

      // do cards match?
      
  }
}

cards.forEach(card => card.addEventListener('click', flipCard))
;