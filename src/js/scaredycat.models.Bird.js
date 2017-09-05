scaredycat.model.Bird = class {
  constructor(id, card) {
    this.id = id;
    this.card = card;
  }

  isThatCardABirdCard(yourCard) {
    return this.card === yourCard;
  }
};
