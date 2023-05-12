import { createElement } from "../../helpers/index.js";

export const SearchResult = (product) => {
  return createElement({
    name: "li",
    classList: ["main-search__result-product"],
    childrens: [
      { name: "img", attributes: { src: "", alt: "product" } },
      { name: "h4", text: product.name },
      { name: "h5", text: product.price },
    ],
  });
};
