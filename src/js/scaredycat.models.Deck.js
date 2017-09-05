// eslint class-methods-use-this: "error"
// eslint no-undef: "error"

const deck = [];
scaredycat.models.Deck = class {
  static getWholeDeck() {
    for (let cardBird = 0; cardBird < 41; cardBird = +1) {
      deck.push(new scaredycat.model.Bird());
    }
    for (let cardCat = 47; cardCat < 50; cardCat = +1) {
      deck.push(new scaredycat.model.Cat());
    }
    for (let card = 41; card < 47; card = +1) {
      deck.push(new scaredycat.model.ScaredyCat());
    }
  }
};
