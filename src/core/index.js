import {
  createBestSellers,
  createCard,
  getCards,
} from "../components/cards/cards.js";
async function init() {
  const root = document.getElementById("root");
  let cards = await getCards();
  cards = shuffle(cards);
  cards = cards.slice(0, 6);
  createBestSellers(root, cards);
}
init();
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
