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


  /*  
    function shuffle(array) {
    const currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
 */

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
