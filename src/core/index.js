import {
  createBanner,
  getSwiperImages,
} from "../components/banner/js/banner.js";
import { createBestSellers } from "../components/ui/best_sellers/best_sellers.js";
import { getCards } from "../components/cards/cards.js";
import { MainSearch } from "../components/search/search.js";

async function init() {
  const root = document.getElementById("root");

  root.appendChild(MainSearch());

  const swipers = await getSwiperImages();
  createBanner(root, swipers);
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
