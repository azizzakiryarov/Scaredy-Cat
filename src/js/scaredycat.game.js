// eslint one-var-declaration-per-line: ["error", "initializations"]
// eslint-env es6
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
  /*
  function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr -= 1;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }
*/
  function getAOneCard() {
    // shuffle(cards);
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
