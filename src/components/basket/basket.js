window.addEventListener("DOMContentLoaded", function () {
  let openBtn = document.querySelector(".icon-cart");
  // let field = document.querySelector(".cart-field");
  // let cart = document.querySelector(".cart");
});
function createBasket(root, openBtn) {
  openBtn.addEventListener("click", openCart);

  let cart = document.createElement("div");
  let field = document.createElement("div");
  let heading = document.createElement("h2");
  let closeBtn = document.createElement("button");

  cart.classList.add("cart");
  field.classList.add("cart-field");
  closeBtn.classList.add("close");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", closeCart);
  cart.appendChild(heading);
  cart.appendChild(field);
  cart.appendChild(closeBtn);
  root.appendChild(cart);
}

function openCart(event) {
  let abro = event.target.parentNode;
  abro.syle.display = "block";
  // cart.style.display = "block";
}
function closeCart(event) {
  cart.style.display = "none";
}

function cardRender(field) {
  const card = document.createElement("div");
  card.classList.add("basket-card");
  card.innerHTML = `
  <div class="basket-cards_img"><img src = ""></div>
  <div class="basket-cards_info">
    <div class="basket-cards_info_name"></div>
    <div class="basket-cards_info_price"></div>
  </div>
  <div class="basket-cards_btn">
    <button type="button" class="basket-cards_btn_remove">Remove</button>
  </div>
  `;

  field.appendChild(card);
}
export { createBasket };
