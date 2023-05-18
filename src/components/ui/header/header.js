import { createElement } from "../../../helpers";
import { MainSearch } from "../../search/search";

export const Header = () => {
  const header = createElement({
    name: "header",
    classList: ["header"],
  });

  header.appendChild(
    createElement({
      name: "img",
      classList: ["logo"],
      attributes: {
        src: "https://i.imgur.com/wVTYpcd.png",
        alt: "logo",
      },
    })
  );
  header.appendChild(MainSearch());
  header.appendChild(createElement({ name: "div", classList: ["icon-cart"] }));

  return header;
};
