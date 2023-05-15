export * from "../../../core/index.js";
function createSwiper() {
  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    speed: 500,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function createBanner(root) {
  const banner = document.createElement("div");
  banner.classList.add("swiper");

  banner.innerHTML = `
  
      <div class="swiper-wrapper">
      <div class="swiper-slide">
      <img src="./src/components/banner/banner-images/1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://cdn.discordapp.com/attachments/862076168199340052/1106532465914413116/image.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="./banner-images/3.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="./banner-images/4.jpg" alt="" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      `;
  root.appendChild(banner);
  createSwiper();
}
export { createBanner };
