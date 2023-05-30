import "./empty-search-result.less";

import { createElement } from "../../helpers/index.js";

export const EmptySearchResult = () => {
  return createElement({
    name: "li",
    classList: ["main-search__result-empty"],
    childrens: [{ name: "h4", text: "Not found" }],
  });
};
