import "./footer-social-media.less";
import { createElement } from "../../../helpers";

export const FooterSocialMedia = () => {
  return createElement({
    name: "div",
    classList: ["footer__social-media"],
    childrens: [
      {
        name: "div",
        classList: ["footer__social-media-title"],
        childrens: [{ name: "h3", text: "Social Media" }],
      },
      {
        name: "div",
        classList: ["footer__social-media-links"],
        childrens: [
          {
            name: "a",
            attributes: { href: "https://www.instagram.com/" },
            childrens: [{ name: "span", classList: ["icon-instagram"] }],
          },
          {
            name: "a",
            attributes: { href: "https://web.telegram.org/a/" },
            childrens: [{ name: "span", classList: ["icon-telegram"] }],
          },
          {
            name: "a",
            attributes: { href: "https://twitter.com/?lang=ru" },
            childrens: [{ name: "span", classList: ["icon-twitter"] }],
          },
        ],
      },
    ],
  });
};
