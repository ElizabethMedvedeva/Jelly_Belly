import { getCards } from "../cards/cards";
import { getStore } from "../../core/store";
import { chosenCardsKey } from "../../core/constants";

window.addEventListener("DOMContentLoaded", function () {
  let openBtn = document.querySelector(".icon-cart");
});

function createBasket(root, openBtn) {
  openBtn.addEventListener("click", openBasket);

  let basket = document.createElement("div");
  let field = document.createElement("div");
  const wrapper = document.createElement("div");
  let heading = document.createElement("h2");
  heading.innerText = `Your Basket`;
  let closeBtn = document.createElement("button");
  let deleteAll = document.createElement("button");

  basket.classList.add("basket");
  field.classList.add("basket-field");
  wrapper.classList.add("basket-field_wrapper");
  closeBtn.classList.add("close");
  deleteAll.classList.add("delete-button");
  deleteAll.textContent = "Clear basket";
  closeBtn.innerHTML = "&times";
  closeBtn.addEventListener("click", closeBasket);

  basket.appendChild(heading);
  basket.appendChild(field);
  field.appendChild(wrapper);
  basket.appendChild(closeBtn);
  basket.append(deleteAll);
  root.appendChild(basket);
}

async function fillCards() {
  const cardsArr = await getSelectedCards();
  const wrapper = document.getElementsByClassName("basket-field_wrapper")[0];
  for (card of cardsArr) {
    cardRender(wrapper, card);
  }
}

function openBasket(event) {
  const basket = document.getElementsByClassName("basket")[0];
  basket.style.display = "block";
  fillCards();
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
