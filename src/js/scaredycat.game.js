// eslint no-unused-vars: "error"

scaredycat.game = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const hand = [];
    const table = [];
    const getDeck = scaredycat.models.Deck.getWholeDeck();
    const deckTotal = document.querySelector('.deckTotal');
    const takeACard = hand.push(getDeck.pop());
    const putACardOnTheTable = table.push(takeACard);
    deckTotal.innerText(getDeck.length);
  });
};
