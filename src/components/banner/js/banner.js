export * from "../../../core/index.js";
import { apiRequest } from "../../../core/api.js";
import Swiper from "swiper";
import "../styles/swiper-bundle.min.css";
function createSwiper() {
  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    grabCursor: true,
  });
}

function createBanner(root, swipers) {
  const banner = document.createElement("div");
  banner.classList.add("swiper");
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");
  for (let swiper of swipers) {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    const swiperImg = document.createElement("img");
    swiperImg.src = swiper.img;
    swiperSlide.appendChild(swiperImg);
    swiperWrapper.appendChild(swiperSlide);
    banner.appendChild(swiperWrapper);
  }
  const swiperPagination = document.createElement("div");
  swiperPagination.classList.add("swiper-pagination");
  banner.appendChild(swiperPagination);
  root.appendChild(banner);
  createSwiper();
}
async function getSwiperImages() {
  const swiperURL = "https://6464d009043c103502c3acb4.mockapi.io/api/v1/swiper";
  let result = apiRequest(swiperURL);
  return result;
}

export { createBanner, getSwiperImages };
