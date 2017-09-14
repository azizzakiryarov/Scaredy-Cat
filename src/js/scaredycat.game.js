window.addEventListener('DOMContentLoaded', () => {
  console.log('Game Started...');
  class Card {
    constructor(typeOfCard, image) {
      this.typeOfCard = typeOfCard;
      this.image = image;
    }
    isBirdCard(birdCard) {
      return this.image === birdCard;
    }
    isCatCard(catCard) {
      return this.image === catCard;
    }
    isScareCrowCard(scarecrowCard) {
      return this.image === scarecrowCard;
    }
  }

  const hand = [];
  const table = [];
  const cardBack = document.getElementById('card-back');
  const cardBird = document.getElementById('card-bird');
  const cardCat = document.getElementById('card-cat');
  const cardScarecrow = document.getElementById('card-scarecrow');
  const totalDeck = document.querySelector('.deckTotal');
  const player1Score = document.querySelector('.score1Summa');
  const cards = [
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('bird', cardBird), new Card('bird', cardBird),
    new Card('cat', cardCat), new Card('cat', cardCat), new Card('cat', cardCat),
    new Card('scarecrow', cardScarecrow), new Card('scarecrow', cardScarecrow),
    new Card('scarecrow', cardScarecrow), new Card('scarecrow', cardScarecrow),
    new Card('scarecrow', cardScarecrow), new Card('scarecrow', cardScarecrow),
  ];
  const getACardNow = hand.push(cards.pop());
  // const timer = document.querySelector('.game-timlet;

  function getACard() {
    hand.push(cards.pop());
    return hand;
  }
  /*
  function putACardOnTheTable() {
    table.push(getACard().pop());
    return table;
  }
*/
  function shuffle(array) {
    let j;
    let x;
    let i = 0;
    const len = array.length;
    for (i; i < len; i += 1) {
      j = Math.floor(Math.random() * len);
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  }


  function displayCardsOnTheTable() {
    cardBack.style.display = 'block';
    cardBird.style.display = 'none';
    cardCat.style.display = 'none';
    cardScarecrow.style.display = 'none';
  }

  function displayNoneBirdCard() {
    setTimeout(() => {
      cardBird.style.display = 'none';
    }, 1000);
  }

  function displayNoneCatCard() {
    setTimeout(() => {
      cardCat.style.display = 'none';
    }, 1000);
  }

  displayCardsOnTheTable();
  shuffle(cards);

  function getOneCard() {
    displayCardsOnTheTable();
    console.log(cards);
    console.log(hand);
    totalDeck.innerHTML = cards.length;
    player1Score.innerHTML = hand.length;
    if (getACardNow.image === cardBird.image) {
      getACard();
      cardBird.style.display = 'block';
      cardCat.style.display = 'none';
      cardScarecrow.style.display = 'none';
      displayNoneBirdCard();
      console.log('getABirdCard...');
    } else if (getACardNow.image === cardCat.image) {
      while (hand.length > 0) {
        cards.push(hand.pop());
      }
      cardCat.style.display = 'block';
      cardBird.style.display = 'none';
      cardScarecrow.style.display = 'none';
      displayNoneCatCard();
      console.log('getACatCard...');
    } else if (getACardNow.image === cardScarecrow.image) {
      getACard();
      cardScarecrow.style.display = 'block';
      cardBird.style.display = 'none';
      cardCat.style.display = 'none';
      console.log('getAScarecrowCard...');
    } else {
      console.log('default');
    }
    if (cards.length === 0) {
      alert('Deck is Empty!!!\n GAME OVER!!!');
    }
    console.dir(`I take a card ${hand.length}`);
    console.dir(`Deck: ${cards.length}`);
    console.dir(`Table: ${table.length}`);
  }
  cardBack.addEventListener('click', getOneCard);
});
