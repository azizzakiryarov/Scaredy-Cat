scaredycat.models.Deck = class {
  constructor() {
    let deck = [];
    let hand = [];
    let table = [];
  }



class ScaredyCat {
  constructor(id, card) {
    this.id = id;
    this.card = card;
  }
  isThatCardAScaredyCatCard() {
    return true;
  }
}

getWholeDeck() {
  for (let cardBird = 0; cardBird < 41; cardBird =+ 1){
    deck.push(new Bird());
  }
  for (let cardCat = 47; cardCat < 50; cardCat =+ 1){
    deck.push(new Cat());
  }
  for (let cardCat = 41; cardCat < 47; cardCat =+ 1){
    deck.push(new ScaredyCat());
  }
}

console.log(`Get whole deck: ${getWholeDeck}`);
}
