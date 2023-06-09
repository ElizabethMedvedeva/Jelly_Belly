import {
  createBanner,
  getSwiperImages,
} from "../components/banner/js/banner.js";
import { createBestSellers } from "../components/ui/best_sellers/best_sellers.js";
import { getCards } from "../components/cards/cards.js";
import { createPatch, getPatchesImg } from "../components/ui/patch/patch.js";
import { Header } from "../components/ui/header/header.js";
import { Footer } from "../components/ui/footer/footer.js";
import { createBasket } from "../components/basket/basket.js";

async function init() {
  const root = document.getElementById("root");

  root.appendChild(Header());

  let openBtn = document.querySelector(".icon-cart");

  await createBasket(root, openBtn);

  const swipers = await getSwiperImages();
  createBanner(root, swipers);
  let cards = await getCards();
  cards = shuffle(cards);
  cards = cards.slice(0, 6);
  createBestSellers(root, cards);
  const patches = await getPatchesImg();
  createPatch(root, patches);
  root.appendChild(Footer());
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
