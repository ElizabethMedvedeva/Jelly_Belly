import "./search.less";

import { findProduct } from "../../core/api.js";
import { createElement } from "../../helpers/index.js";
import { SearchResult } from "./search-result.js";
import { EmptySearchResult } from "./empty-search-result.js";

export const MainSearch = () => {
  const root = createElement({
    name: "div",
    classList: ["main-search", "main-search_refined"],
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
              autocomplete: "off",
            },
          },
          {
            name: "button",
            classList: ["main-search__action", "main-search__action_search"],
            childrens: [
              {
                name: "span",
                classList: ["icon-search"],
              },
            ],
          },
          {
            name: "button",
            classList: ["main-search__action", "main-search__action_refined"],
            attributes: { "data-action": "refined-search" },
            childrens: [
              {
                name: "span",
                classList: ["icon-cross"],
              },
            ],
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  form.addEventListener("click", (event) => {
    if (event.target.getAttribute("data-action") === "refined-search") {
      root.classList.add("main-search_refined");
    }
  });

  form.querySelector("input").addEventListener("focus", () => {
    if (list.querySelector(".main-search__result-product")) {
      root.classList.remove("main-search_refined");
    }
  });

  form.addEventListener("input", () => {
    clearTimeout(delay);

    delay = setTimeout(() => {
      findProduct(form.search.value.trim()).then((data) => {
        list.innerHTML = "";

        data.forEach((product) => {
          list.appendChild(SearchResult(product));
        });

        if (data.length === 0) {
          list.appendChild(EmptySearchResult());
        }

        root.classList.remove("main-search_refined");
      });
    }, 300);
  });

  return root;
};
