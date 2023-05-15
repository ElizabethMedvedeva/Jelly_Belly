import "./search-result.less";

import { createElement } from "../../helpers/index.js";

export const SearchResult = (product) => {
  return createElement({
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
};
