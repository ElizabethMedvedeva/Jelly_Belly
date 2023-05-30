import { apiRequest } from "../../core/api";
import { getStore, setStore } from "../../core/store";
import { chosenCardsKey } from "../../core/constants";

function createCard(root, element) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", element.id);

  card.innerHTML = `
  <div class="card_image"><img src="${element.img}" /></div>
  <div class="card_info">
    <div class="card_info_name">${element.name}</div>
    <div class="card_info_price">Price ${element.price}$</div>
  </div>
  <div class="card_button"><button class="card_button_btn" type="button">Add to cart</button></div>
  `;
  const cardButton = card.querySelector(".card_button");
  cardButton.addEventListener("click", addToBasket);

  root.appendChild(card);
}
function addToBasket(event) {
  let cardsID = getStore(chosenCardsKey);
  if (!cardsID) {
    cardsID = [];
  }
  cardsID.push(event.target.parentNode.parentNode.id);
  setStore(chosenCardsKey, cardsID);
}

async function getCards() {
  const cardsURL = "https://64564c932e41ccf169191429.mockapi.io/api/v1/cardss";
  let result = apiRequest(cardsURL);
  return result;
}
export { getCards, createCard };
