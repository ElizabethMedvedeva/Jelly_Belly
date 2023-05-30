import { createCard } from "../../cards/cards";
import { createModal, openModal } from "./cards_modal";

function createBestSellers(root, cards) {
  const bestSellers = document.createElement("div");
  bestSellers.classList.add("best-sellers");

  bestSellers.innerHTML = `
    <div class="best-sellers_name">Best Sellers</div>
    `;
  const bestSellersCards = document.createElement("div");
  bestSellersCards.classList.add("best-sellers_cards");
  for (let i = 0; i < cards.length; i++) {
    createCard(bestSellersCards, cards[i]);
  }

  createModal(root);
  const cardsImage = bestSellersCards.querySelectorAll(".card_image");
  cardsImage.forEach((element) => (element.firstChild.onclick = openModal));

  bestSellers.appendChild(bestSellersCards);
  root.appendChild(bestSellers);
}
export { createBestSellers };
