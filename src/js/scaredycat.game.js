// eslint no-unused-vars: "error"
scaredycat.game = () => {
  const hand = [];
  const table = [];
  const getDeck = scaredycat.models.Deck().getWholeDeck();
  console.log(getDeck.length);
};
