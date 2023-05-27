import "./search-result.less";

import { createElement } from "../../helpers/index.js";

import { chosenCardsKey } from "../../core/constants.js";

import { getStore, setStore } from "../../core/store";

export const SearchResult = (product) => {
  const searchResultElement = createElement({
    name: "li",
    classList: ["main-search__result-product", "result-product"],
    childrens: [
      {
        name: "img",
        attributes: {
          src: product.img,
          alt: "product",
        },
      },
      {
        name: "div",
        classList: ["result-product__info"],
        attributes: { id: product.id },
        childrens: [
          { name: "h4", text: product.name },
          { name: "h5", text: `${product.price} $` },
        ],
      },
      {
        name: "div",
        classList: ["result-product__actions"],
        childrens: [
          {
            name: "button",
            childrens: [{ name: "span", classList: ["icon-cart"] }],
          },
        ],
      },
    ],
  });
  const basketSearchBtn = searchResultElement.querySelector(".icon-cart");
  basketSearchBtn.addEventListener("click", addToBasket);
  return searchResultElement;
};
function addToBasket(event) {
  let cardsID = getStore(chosenCardsKey);
  if (!cardsID) {
    cardsID = [];
  }
  let fullCard = event.target.parentNode.parentNode.parentNode;
  let cardResultProduct = fullCard.querySelector(".result-product__info");
  let cardID = cardResultProduct.id;
  cardsID.push(cardID);
  setStore(chosenCardsKey, cardsID);
}
