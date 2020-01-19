function pickRandom(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
function getCards() {
  let values = ["2", "3","4", "5","6","7", "8", "9", "10", "J", "Q", "K", "A"];
  let suits = ["clubs", "spades", "hearts", "diamonds"];
  let value = pickRandom(values)
  let suit = pickRandom(suits);

  return {
    value: value,
    suit: suit
  }
}

// Refactor the pervious function
function getCardsTwo() {
  let values = ["2", "3","4", "5","6","7", "8", "9", "10", "J", "Q", "K", "A"];
  let suits = ["clubs", "spades", "hearts", "diamonds"];

  return {
    value: pickRandom(values),
    suit: pickRandom(suits)
  }
}