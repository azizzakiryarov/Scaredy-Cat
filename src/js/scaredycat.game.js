window.addEventListener('DOMContentLoaded', () => {
  const cards = ['bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird',
    'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird',
    'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird',
    'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird',
    'cat', 'cat', 'cat', 'scarecrow',
    'scarecrow', 'scarecrow', 'scarecrow', 'scarecrow', 'scarecrow'];
  const bird = [];
  const cat = [];
  const scarecrow = [];
  const hand = [];
  const table = [];
  const cardsImg = document.getElementsByClassName('submiddle-element')[0];
  const totalDeck = document.querySelector('.deckTotal');
  const player1Score = document.querySelector('.score1Summa');
  console.log('Game Started');

  function getACard() {
    hand.push(cards.pop());
    return hand;
  }

  function putACardOnTheTable() {
    table.push(getACard().pop());
    return table;
  }

  function getAOneCard() {
    getACard();
    totalDeck.innerHTML = cards.length;
    player1Score.innerHTML = hand.length;
    console.log(`I take a card ${hand.length}`);
    console.dir(`Deck:${cards.length}`);
    console.log(`Bird : ${bird.length}`);
    console.log(`Cat : ${cat.length}`);
    console.log(`Scarecrow : ${scarecrow.length}`);
  }

  cardsImg.addEventListener('click', getAOneCard);
});
