import "./footer-location.less";
import { createElement } from "../../../helpers";

export const FooterLocation = () => {
  return createElement({
    name: "div",
    classList: ["footer__location"],
    childrens: [
      {
        name: "h3",
        text: "Location",
      },
      {
        name: "a",
        attributes: { href: "https://www.google.by/maps/" },
        childrens: [
          {
            name: "span",
            classList: ["icon-location"],
          },
        ],
      },
      {
        name: "h4",
        text: "5th Avenue, NY, USA ",
      },
    ],
  });
};
