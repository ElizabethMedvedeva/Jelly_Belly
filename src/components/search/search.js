import { findProduct } from "../../core/api.js";
import { createElement } from "../../helpers/index.js";
import { SearchResult } from "./search-result.js";

export const MainSearch = () => {
  const root = createElement({
    name: "div",
    classList: ["main-search"],
    childrens: [
      {
        name: "form",
        classList: ["main-search__search-form"],
        childrens: [
          {
            name: "input",
            attributes: {
              placeholder: "Search...",
              type: "text",
              name: "search",
            },
          },
          {
            name: "button",
            text: "Search",
          },
        ],
      },
      {
        name: "ol",
        classList: ["main-search__result-list"],
        childrens: [],
      },
    ],
  });
  const form = root.children[0];
  const list = root.children[1];
  let delay;

  form.addEventListener("input", (event) => {
    clearTimeout(delay);
    delay = setTimeout(() => {
      findProduct(form.search.value).then((data) => {
        list.innerHTML = "";

        data.forEach((product) => {
          list.appendChild(SearchResult(product));
        });
      });
    }, 300);

    list.innerHTML = "";
  });

  return root;
};
