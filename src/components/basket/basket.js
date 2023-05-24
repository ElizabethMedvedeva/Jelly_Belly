import { getCards } from "../cards/cards";
import { getStore } from "../../core/store";
import { chosenCardsKey } from "../../core/constants";

window.addEventListener("DOMContentLoaded", function () {
  let openBtn = document.querySelector(".icon-cart");
});

async function createBasket(root, openBtn) {
  openBtn.addEventListener("click", openBasket);

  let basket = document.createElement("div");
  let field = document.createElement("div");
  const wrapper = document.createElement("div");
  let heading = document.createElement("h2");
  heading.innerText = `Your Basket`;
  let closeBtn = document.createElement("button");

  const cardsArr = await getSelectedCards();

  basket.classList.add("basket");
  field.classList.add("basket-field");
  wrapper.classList.add("basket-field_wrapper")
  closeBtn.classList.add("close");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", closeBasket);
  for (card of cardsArr) {
    cardRender(wrapper, card);
  }

  basket.appendChild(heading);
  basket.appendChild(field);
  field.appendChild(wrapper);
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

function cardRender(wrapper, element) {
  const card = document.createElement("div");
  card.classList.add("basket-card");
  card.innerHTML = `
  <div class="basket-card_img"><img src = "${element.img}"></div>
  <div class="basket-card_info">
    <div class="basket-card_info_name">${element.name}</div>
    <div class="basket-card_info_price">${element.price}</div>
  </div>
  <div class="basket-card_btn">
    <button type="button" class="basket-card_btn_remove">Remove</button>
  </div>
  `;

  wrapper.appendChild(card);
}

async function getSelectedCards() {
  const allCards = await getCards();
  const ids = getIdLocalStorage();
  if (!ids) {
    return [];
  }
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
