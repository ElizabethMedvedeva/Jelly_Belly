import { createElement } from "../../../helpers";

export const Footer = () => {
  const footer = createElement({
    name: "footer",
    classList: ["footer"],
    childrens: [
      {
        name: "div",
        classList: ["footer__container"],
        childrens: [
          {
            name: "div",
            classList: ["footer__information"],
            childrens: [
              {
                name: "div",
                classList: ["footer__logo"],
                childrens: [
                  {
                    name: "img",
                    attributes: {
                      src: "https://i.imgur.com/wVTYpcd.png",
                      alt: "logo",
                    },
                  },
                ],
              },
              {
                name: "div",
                classList: ["footer__text"],
                childrens: [
                  {
                    name: "p",
                    text: "Jelly Belly Candy Company is dedicated to selling the highest quality confections, delivering superior customer service. ",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
  return footer;
};
