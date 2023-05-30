import { getCards } from "../cards/cards";
import { getStore, setStore } from "../../core/store";
import { chosenCardsKey } from "../../core/constants";

// window.addEventListener("DOMContentLoaded", function () {
//   let openBtn = document.querySelector(".icon-cart");
// });

function createBasket(root, openBtn) {
  openBtn.addEventListener("click", openBasket);

  const basket = document.createElement("div");
  basket.classList.add("basket");

  const basketHead = document.createElement("div");
  basketHead.classList.add("basket_head");
  basket.appendChild(basketHead);

  const heading = document.createElement("h2");
  heading.innerText = `Your Basket`;
  basketHead.appendChild(heading);

  const deleteAll = document.createElement("button");
  deleteAll.addEventListener("click", clearBasket);
  deleteAll.classList.add("basket_delete-button");
  deleteAll.textContent = "Delete all";
  basketHead.appendChild(deleteAll);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("basket_close");
  closeBtn.innerHTML = `&times;`;
  closeBtn.addEventListener("click", closeBasket);
  basketHead.appendChild(closeBtn);

  const field = document.createElement("div");
  field.classList.add("basket-field");
  basket.appendChild(field);

  const wrapper = document.createElement("div");
  wrapper.classList.add("basket-field_wrapper");
  field.appendChild(wrapper);

  root.appendChild(basket);
}

function clearBasket() {
  setStore(chosenCardsKey, []);
  const wrapper = document.querySelector(".basket-field_wrapper");
  wrapper.innerHTML = ``;
}

async function fillCards() {
  const cardsArr = await getSelectedCards();
  const wrapper = document.getElementsByClassName("basket-field_wrapper")[0];
  for (let card of cardsArr) {
    cardRender(wrapper, card);
  }
}

async function openBasket(event) {
  const basket = document.getElementsByClassName("basket")[0];
  basket.style.display = "block";
  await refreshBasket();
  getTotalPrice();
}
async function refreshBasket() {
  const wrapper = document.querySelector(".basket-field_wrapper");
  wrapper.innerHTML = ``;
  await fillCards();
  addTotalPriceToBasket();
}

function addTotalPriceToBasket() {
  const wrapper = document.querySelector(".basket-field_wrapper");
  const totalPrice = document.createElement("div");
  totalPrice.classList.add("basket-field_wrapper_total-price");
  totalPrice.innerHTML = `Total price: ${getTotalPrice()}$`;
  wrapper.appendChild(totalPrice);
}

function closeBasket(event) {
  const basket = document.getElementsByClassName("basket")[0];
  basket.style.display = "none";
}

function cardRender(wrapper, element) {
  const card = document.createElement("div");
  card.classList.add("basket-card");
  card.id = element.id;
  const cardQuantity = getCardsQuantity();
  const quantity = cardQuantity[element.id];
  const totalPrice = quantity * element.price;
  card.innerHTML = `
  <div class="basket-card_img"><img src = "${element.img}"></div>
  <div class="basket-card_info">
    <div class="basket-card_info_name">${element.name}</div>
    <div class="basket-card_info_price">Price ${totalPrice}$</div>
  </div>
  <div class="basket-card_quantity">
  <button type="button" class="basket-card_quantity_minus">-</button>
  <div class="basket-card_quantity_number">${quantity}</div>
  <button type="button" class="basket-card_quantity_plus">+</button>
  </div>
  <div class="basket-card_btn">
  <span class="icon-trash1">
  </div>
  `;
  const decreaseButton = card.querySelector(".basket-card_quantity_minus");
  decreaseButton.addEventListener("click", decreaseQuantity);

  const increaseButton = card.querySelector(".basket-card_quantity_plus");
  increaseButton.addEventListener("click", increaseQuantity);

  const removeButton = card.querySelector(".icon-trash1");
  removeButton.addEventListener("click", removeCard);

  wrapper.appendChild(card);
}

async function decreaseQuantity(event) {
  const selectedCardID = event.target.parentNode.parentNode.id;
  const chosenCard = getIdLocalStorage();
  const index = chosenCard.indexOf(selectedCardID);
  chosenCard.splice(index, 1);
  setStore(chosenCardsKey, chosenCard);
  await refreshBasket();
}

async function increaseQuantity(event) {
  const selectedCardID = event.target.parentNode.parentNode.id;
  const chosenCard = getIdLocalStorage();
  chosenCard.push(selectedCardID);
  setStore(chosenCardsKey, chosenCard);
  await refreshBasket();
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

async function removeCard(event) {
  const idArrayLocalStorage = getIdLocalStorage();
  const selectedCardID = event.target.parentNode.parentNode.id;
  const newBasketArray = idArrayLocalStorage.filter(function (element) {
    return element !== selectedCardID;
  });

  setStore(chosenCardsKey, newBasketArray);
  await refreshBasket();
}
function getCardsQuantity() {
  const selectedCardID = getIdLocalStorage();
  const counter = {};
  for (let id of selectedCardID) {
    if (id in counter) {
      counter[id] += 1;
    } else {
      counter[id] = 1;
    }
  }
  return counter;
}

function getTotalPrice() {
  const basketCardPrice = document.querySelectorAll(".basket-card_info_price");
  let fullPrice = 0;
  for (let card of basketCardPrice) {
    let priceText = card.innerText;
    let price = +priceText.substring(6, priceText.length - 1);
    fullPrice += price;
  }
  return fullPrice;
}

export { createBasket };
