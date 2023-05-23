window.addEventListener("DOMContentLoaded", function () {
  let openBtn = document.querySelector(".icon-cart");

  function createCart() {
    let cart = document.createElement("div");
    let field = document.createElement("div");
    let heading = document.createElement("h2");
    let closeBtn = document.createElement("button");

    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");

    closeBtn.textContent = "Close";
    root.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }
  createCart();

  let field = document.querySelector(".cart-field");
  let cart = document.querySelector(".cart");
  let close = document.querySelector(".close");
  function openCart() {
    cart.style.display = "block";
  }
  function closeCart() {
    cart.style.display = "none";
  }
  openBtn.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);
});
