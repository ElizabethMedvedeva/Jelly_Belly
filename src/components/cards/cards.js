const cards = [
  { id: 1, name: "Happy Peaches", price: 2 },
  { id: 2, name: "Funny Bunny", price: 4 },
  { id: 3, name: "Theeth", price: 7 },
];

export function createCard(root) {
  const card = document.createElement("div");
  card.classList.add("card");
  const element = cards[0];

  card.innerHTML = `
  <div class="card_image"></div>
  <div class="card_info">
  <div class="card_info_name">${element.name}</div>
  <div class="card_info_price">${element.price}</div>
  </div>
  <div class="card_button"><button class="card_button_btn" type="button">Add to cart</button></div>
  `;
  root.appendChild(card);
}
