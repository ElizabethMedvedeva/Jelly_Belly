import { apiRequest } from "../../core/api";

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
  root.appendChild(card);
}

async function getCards() {
  const cardsURL = "https://64564c932e41ccf169191429.mockapi.io/api/v1/cardss";
  let result = apiRequest(cardsURL);
  return result;
}
export { getCards, createCard };
