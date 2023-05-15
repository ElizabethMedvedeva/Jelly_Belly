export * from "../../../core/index.js";
function createSwiper() {
  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    effect: "slide",
    mousewheelControl: 1,
    speed: 1000,
    grabCursor: true,

    direction: "horizontal",
    loop: true,
    pagination: ".swiper-pagination",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
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
      <img src="https://cdn.discordapp.com/attachments/1033793841813262489/1107762191593128006/2.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://cdn.discordapp.com/attachments/1033793841813262489/1107762192486510682/3.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="https://cdn.discordapp.com/attachments/1033793841813262489/1107762191593128006/2.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="https://cdn.discordapp.com/attachments/1033793841813262489/1107762192922714232/1.png" alt="" />
      </div>
      <div class="swiper-slide">
      <img src="https://cdn.discordapp.com/attachments/1033793841813262489/1107762192486510682/3.png" alt="" />
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
