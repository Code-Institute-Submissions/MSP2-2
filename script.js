let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const cards = [...document.querySelectorAll('.card')];
for (let card of cards) {
    const cardAIndex = parseInt(Math.random() * cards.length)
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += `${color}`
    cardA.setAttribute('', card);

    const cardBIndex = parseInt(Math.random() * cards.length)
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += `${card}`
    cardB.setAttribute('', card);
}

function onCardClicked(e) {
    const target = e.currentTarget;

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes('done')
    ) {
        return;
    }

    target.className = target.className
        .replace('card', '')
        .trim()
    target.className += ' done';

    if (!clickedCard) {
        //if we haven't clicked a card, keep track of the card, display it's color
        clickedCard = target;
    } else if (clickedCard) {
        // if we have already clicked a card, check if the new card matches the old card color
        preventClick = true;
        if (
            clickedCard.getAttribute('card') !==
            target.getAttribute('card')
        ) {
            preventClick = true;

            console.log('cards not equal');
            setTimeout(() => {
                console.log('we are here!!!')
                clickedCard.className =
                    clickedCard.className.replace('done', '').trim() + ' card';
                target.className =
                    target.className.replace('done', '').trim() + ' card';
                clickedCard = null;
                preventClick = false;
            }, 500);
        } else {
            combosFound++;
            clickedCard = null;
            preventClick = false;
            if (combosFound === 8) {
                alert('YOU WIN');
            }

        }
    }
}