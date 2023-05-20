import { createElement } from "../../../helpers";
import { MainSearch } from "../../search/search";

export const Header = () => {
  const header = createElement({
    name: "header",
    classList: ["header"],
  });

  const container = createElement({
    name: "div",
    classList: ["header__container"],
  });

  container.appendChild(
    createElement({
      name: "img",
      classList: ["logo"],
      attributes: {
        src: "https://i.imgur.com/wVTYpcd.png",
        alt: "logo",
      },
    })
  );
  container.appendChild(MainSearch());
  container.appendChild(
    createElement({ name: "div", classList: ["icon-cart"] })
  );

  header.appendChild(container);

  return header;
};
