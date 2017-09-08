window.addEventListener('DOMContentLoaded', () => {
  const cards = [];
  const cardsImg = document.getElementsByClassName('submiddle-element')[0];
  const totalDeck = document.getElementsByClassName('deckTotal')[0];

  console.log('Game Started');

  function card(typeOfCard) {
    this.typeOfCard = typeOfCard;
  }

  function getAllDeck() {
    const bird = { name: 'bird' };
    const cat = { name: 'cat' };
    const scarecrow = { name: 'scarecrow' };

    // for (let b = 0; b < 41; b += 1) {
    // for (let c = 41; c < 47; c += 1) {
    // for (let sc = 47; sc < 50; sc += 1) {
    // cards.push(card(bird.name), card(cat.name), card(scarecrow.name));
    cards.push(10);
    if (cards.length === 0) {
      console.log('Empty');
    }
    // }
    // }
    // }
    return cards;
  }

  function getACard() {
    const hand = [];
    hand.push(getAllDeck().pop);
    return hand;
  }

  function putACardOnTheTable() {
    const table = [];
    table.push(getACard().pop);
    return table;
  }

  function getAOneCard() {
    getACard();
    console.log(`I take a card${getACard}`);
    console.log(cards.length);
  }
  cardsImg.addEventListener('click', getAOneCard);
  totalDeck.write('cards.length');
});
