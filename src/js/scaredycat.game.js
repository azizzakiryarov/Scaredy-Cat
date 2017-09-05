scaredycat.game = () => {
  const hand = [];
  const table = [];
  const getDeck = new scaredycat.models.Deck().getWholeDeck();
  console.log(getDeck);
  // eslint-disable-next-line no-alert
  const welcomeTitle = alert('Welcome to our game: ScaredyCat');
};
