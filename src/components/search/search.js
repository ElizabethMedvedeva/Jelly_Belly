import { createElement } from "../../helpers/index.js";

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
            attributes: { placeholder: "Search...", type: "text" },
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
        childrens: [
          {
            name: "li",
            classList: ["main-search__result-product"],
            childrens: [
              { name: "img", attributes: { src: "", alt: "product" } },
              { name: "h4", text: "Product Name" },
              { name: "h5", text: "100$" },
            ],
          },
        ],
      },
    ],
  });
  const form = root.children[0];
  const list = root.children[1];

  form.addEventListener("input", (event) => {
    console.log(1);

    list.innerHTML = "";
  });

  return root;
};
