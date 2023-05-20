import { createElement } from "../../../helpers";
import { FooterInformation } from "./footer-information";
import { FooterLocation } from "./footer-location";
import { FooterSocialMedia } from "./footer-social-media";

export const Footer = () => {
  const footer = createElement({
    name: "footer",
    classList: ["footer"],
  });

  const container = createElement({
    name: "div",
    classList: ["footer__container"],
  });

  container.appendChild(FooterInformation());
  container.appendChild(FooterSocialMedia());
  container.appendChild(FooterLocation());

  footer.appendChild(container);

  return footer;
};
