import { getCards } from "../cards/cards";
import { getStore } from "../../core/store";
import { chosenCardsKey } from "../../core/constants";

window.addEventListener("DOMContentLoaded", function () {
  let openBtn = document.querySelector(".icon-cart");
  // let field = document.querySelector(".basket-field");
  // let basket = document.querySelector(".basket");
});

async function createBasket(root, openBtn) {
  openBtn.addEventListener("click", openBasket);

  let basket = document.createElement("div");
  let field = document.createElement("div");
  let heading = document.createElement("h2");
  let closeBtn = document.createElement("button");

  const cardsArr = await getSelectedCards();

  basket.classList.add("basket");
  field.classList.add("basket-field");
  closeBtn.classList.add("close");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", closeBasket);
  for (card of cardsArr) {
    cardRender(field, card);
  }

  basket.appendChild(heading);
  basket.appendChild(field);
  basket.appendChild(closeBtn);
  root.appendChild(basket);
}

function openBasket(event) {
  const basket = document.getElementsByClassName("basket")[0];
  basket.style.display = "block";
}

function closeBasket(event) {
  const basket = document.getElementsByClassName("basket")[0];
  basket.style.display = "none";
}

function cardRender(field, element) {
  const card = document.createElement("div");
  card.classList.add("basket-card");
  card.innerHTML = `
  <div class="basket-cards_img"><img src = "${element.img}"></div>
  <div class="basket-cards_info">
    <div class="basket-cards_info_name">${element.name}</div>
    <div class="basket-cards_info_price">${element.price}</div>
  </div>
  <div class="basket-cards_btn">
    <button type="button" class="basket-cards_btn_remove">Remove</button>
  </div>
  `;

  field.appendChild(card);
}

async function getSelectedCards() {
  const allCards = await getCards();
  const ids = getIdLocalStorage();

  const selectedCards = allCards.filter((card) =>
    ids.find((id) => card.id === id)
  );

  return selectedCards;
}

function getIdLocalStorage() {
  const chosenStore = getStore(chosenCardsKey);
  return chosenStore;
}

export { createBasket };
