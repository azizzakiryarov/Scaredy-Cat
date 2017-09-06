// eslint no-undef: "error"
// eslint no-plusplus: "error"
// eslint no-param-reassign: "error"
// eslint class-methods-use-this: "error"
// eslint-env es6

scaredycat.models.Deck = class {
  static getWholeDeck() {
    const deck = [];
    for (let cardBird = 0; cardBird < 41; cardBird = +1) {
      deck.push(new scaredycat.model.Bird());
    }
    for (let cardCat = 47; cardCat < 50; cardCat = +1) {
      deck.push(new scaredycat.model.Cat());
    }
    for (let card = 41; card < 47; card = +1) {
      deck.push(new scaredycat.model.ScaredyCat());
    }
    return deck;
  }

  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
};
