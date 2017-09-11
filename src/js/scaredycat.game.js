window.addEventListener('DOMContentLoaded', () => {
  class Card {
    constructor(typeOfCard) {
      this.typeOfCard = typeOfCard;
    }
    isCatCard(catCard) {
      return this.typeOfCard === catCard;
    }
    isScareCrowCard(scarecrowCard) {
      return this.typeOfCard === scarecrowCard;
    }
  }

  const cards = [
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'), new Card('bird'),
    new Card('bird'),
    new Card('cat'), new Card('cat'), new Card('cat'),
    new Card('scarecrow'), new Card('scarecrow'), new Card('scarecrow'), new Card('scarecrow'),
    new Card('scarecrow'), new Card('scarecrow'),
  ];

  const hand = [];
  const table = [];
  const cardsImg = document.getElementsByClassName('submiddle-element')[0];
  const totalDeck = document.querySelector('.deckTotal');
  const player1Score = document.querySelector('.score1Summa');
  const list = document.createElement('li');
  const myListOfCards = document.querySelector('.myList');
  const myListOfScaredyCat = document.querySelector('.scaredycat');
  // const timer = document.querySelector('.game-timlet;

  console.log('Game Started');


  function getACard() {
    hand.push(cards.pop());
    return hand;
  }


  function putACardOnTheTable() {
    table.push(getACard().pop());
    return table;
  }

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

  function getAOneCard() {
    shuffle(cards);
    getACard();
    totalDeck.innerHTML = cards.length;
    player1Score.innerHTML = hand.length;
    myListOfCards.appendChild(list);
    list.innerText = JSON.stringify(hand);
    if (cards.length === 0) {
      alert('Deck is Empty!!!\n GAME OVER!!!');
    } /* else if () {
      myListOfScaredyCat.appendChild(list);
      list.innerText = JSON.stringify(hand);
    } */
    console.log(`I take a card ${hand.length}`);
    console.dir(`Deck:${cards.length}`);
    // console.log(`Bird : ${bird.length}`);
    // console.log(`Cat : ${cat.length}`);
    // console.log(`Scarecrow : ${scarecrow.length}`);
  }
  cardsImg.addEventListener('click', getAOneCard);
});
