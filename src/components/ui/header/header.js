import { createElement } from "../../../helpers";
import { MainSearch } from "../../search/search";
import { openBasket } from "../../basket/basket";

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
  const basket = createElement({ name: "div", classList: ["icon-cart"] });
  basket.addEventListener("click", openBasket);
  container.appendChild(basket);

  header.appendChild(container);

  return header;
};
