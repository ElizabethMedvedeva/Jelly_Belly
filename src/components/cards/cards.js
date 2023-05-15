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

function createModal(root) {
  const imageModal = document.createElement("div");
  imageModal.classList.add("modal");
  imageModal.setAttribute("id", "myModal");

  imageModal.innerHTML = `
  <span class="modal_close">&times;</span>
  <div class="modal_content">
    <img class="modal_img">
    <div id="caption"></div>
  </div>
  `;
  const span = imageModal.querySelector(".modal_close");
  span.onclick = closeModal;

  root.appendChild(imageModal);
}



function openModal() {
  const modalImage = document.getElementsByClassName("modal_img")[0];
  const captionText = document.getElementById("caption");
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  modalImage.src = this.src;
  captionText.innerHTML = "Name of Jelly Belly";
}



function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}



function createBestSellers(root, cards) {
  const bestSellers = document.createElement("div");
  bestSellers.classList.add("best-sellers");

  bestSellers.innerHTML = `
  <div class="best-sellers_name">Best Sellers</div>
  `;
  const bestSellersCards = document.createElement("div");
  bestSellersCards.classList.add("best-sellers_cards");
  for (i = 0; i < cards.length; i++) {
    createCard(bestSellersCards, cards[i]);
  }
  const cardsImage = bestSellersCards.querySelectorAll(".card_image");
  cardsImage.forEach((element) => (element.firstChild.onclick = openModal));

  bestSellers.appendChild(bestSellersCards);
  root.appendChild(bestSellers);
}




async function getCards() {
  const cardsURL = "https://64564c932e41ccf169191429.mockapi.io/api/v1/cardss";
  let result = apiRequest(cardsURL);
  return result;
}

export { createBestSellers, getCards, createModal };
