const e="chosenCards",t=async e=>{const t=new URL("https://64564c932e41ccf169191429.mockapi.io/api/v1/cardss");t.searchParams.append("search",e),t.searchParams.append("page",1),t.searchParams.append("limit",6);return await n(t)};async function n(e){let t=await fetch(e);return await t.json()}function a(e,t){const n=document.createElement("div");n.classList.add("swiper");const a=document.createElement("div");for(swiper of(a.classList.add("swiper-wrapper"),t)){const e=document.createElement("div");e.classList.add("swiper-slide");const t=document.createElement("img");t.src=swiper.img,e.appendChild(t),a.appendChild(e),n.appendChild(a)}const i=document.createElement("div");i.classList.add("swiper-pagination");const s=document.createElement("div");s.classList.add("swiper-button-prev");const c=document.createElement("div");c.classList.add("swiper-button-next"),n.appendChild(i),n.appendChild(s),n.appendChild(c),e.appendChild(n),new Swiper(".swiper",{direction:"horizontal",loop:!0,speed:500,slidesPerView:1,slidesPerGroup:1,spaceBetween:20,effect:"slide",mousewheelControl:1,speed:1e3,grabCursor:!0,direction:"horizontal",loop:!0,pagination:".swiper-pagination",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function s(){return n("https://6464d009043c103502c3acb4.mockapi.io/api/v1/swiper")}function c(e){return JSON.parse(localStorage.getItem(e))}function d(e,t){localStorage.setItem(e,JSON.stringify(t))}function r(e,t){const n=document.createElement("div");n.classList.add("card"),n.setAttribute("id",t.id),n.innerHTML=`\n  <div class="card_image"><img src="${t.img}" /></div>\n  <div class="card_info">\n    <div class="card_info_name">${t.name}</div>\n    <div class="card_info_price">Price ${t.price}$</div>\n  </div>\n  <div class="card_button"><button class="card_button_btn" type="button">Add to cart</button></div>\n  `;n.querySelector(".card_button").addEventListener("click",o),e.appendChild(n)}function o(t){let n=c(e);n||(n=[]),n.push(t.target.parentNode.parentNode.id),d(e,n)}async function l(){return n("https://64564c932e41ccf169191429.mockapi.io/api/v1/cardss")}function p(e){const t=document.createElement("div");t.classList.add("modal"),t.setAttribute("id","myModal"),t.innerHTML='\n    <span class="modal_close">&times;</span>\n    <div class="modal_content">\n      <img class="modal_img">\n      <div id="caption"></div>\n    </div>\n    ';t.querySelector(".modal_close").onclick=u,e.appendChild(t)}function m(){const e=document.getElementsByClassName("modal_img")[0],t=document.getElementById("caption");document.getElementById("myModal").style.display="block",e.src=this.src;const n=this.parentNode.parentNode;t.innerHTML=n.querySelector(".card_info_name").innerText}function u(){document.getElementById("myModal").style.display="none"}function h(e,t){const n=document.createElement("div");n.classList.add("best-sellers"),n.innerHTML='\n    <div class="best-sellers_name">Best Sellers</div>\n    ';const a=document.createElement("div");for(a.classList.add("best-sellers_cards"),i=0;i<t.length;i++)r(a,t[i]);p(e);a.querySelectorAll(".card_image").forEach((e=>e.firstChild.onclick=m)),n.appendChild(a),e.appendChild(n)}function f(e,t){const n=document.createElement("div");n.classList.add("patch");for(let e of t){const t=document.createElement("div");t.classList.add("patch_img");const a=document.createElement("img");a.src=e.img,t.appendChild(a),n.appendChild(t)}const a=document.createElement("div");a.classList.add("patch_img");const i=document.createElement("p");i.id="patch_text",i.innerHTML="The happy world<br>of<br>CANDIES",a.appendChild(i),n.appendChild(a),e.appendChild(n)}async function _(){return n("https://64564c932e41ccf169191429.mockapi.io/api/v1/patches")}function v({name:e,classList:t,attributes:n,text:a,childrens:i}){const s=document.createElement(e);return t?.forEach((e=>{s.classList.add(e)})),n&&Object.entries(n).forEach((([e,t])=>{s.setAttribute(e,t)})),a&&(s.innerText=a),i?.forEach((e=>{s.appendChild(v(e))})),s}const L=e=>{const t=v({name:"li",classList:["main-search__result-product","result-product"],childrens:[{name:"img",attributes:{src:e.img,alt:"product"}},{name:"div",classList:["result-product__info"],attributes:{id:e.id},childrens:[{name:"h4",text:e.name},{name:"h5",text:`${e.price} $`}]},{name:"div",classList:["result-product__actions"],childrens:[{name:"button",childrens:[{name:"span",classList:["icon-cart"]}]}]}]});return t.querySelector(".icon-cart").addEventListener("click",b),t};function b(t){let n=c(e);n||(n=[]);let a=t.target.parentNode.parentNode.parentNode.querySelector(".result-product__info").id;n.push(a),d(e,n)}const g=()=>{const e=v({name:"div",classList:["main-search","main-search_refined"],childrens:[{name:"form",classList:["main-search__search-form"],childrens:[{name:"input",attributes:{placeholder:"Search...",type:"text",name:"search",autocomplete:"off"}},{name:"button",classList:["main-search__action","main-search__action_search"],childrens:[{name:"span",classList:["icon-search"]}]},{name:"button",classList:["main-search__action","main-search__action_refined"],attributes:{"data-action":"refined-search"},childrens:[{name:"span",classList:["icon-cross"]}]}]},{name:"ol",classList:["main-search__result-list"],childrens:[]}]}),n=e.children[0],a=e.children[1];let i;return n.addEventListener("submit",(e=>{e.preventDefault()})),n.addEventListener("click",(t=>{"refined-search"===t.target.getAttribute("data-action")&&e.classList.add("main-search_refined")})),n.querySelector("input").addEventListener("focus",(()=>{a.querySelector(".main-search__result-product")&&e.classList.remove("main-search_refined")})),n.addEventListener("input",(()=>{clearTimeout(i),i=setTimeout((()=>{t(n.search.value.trim()).then((t=>{a.innerHTML="",t.forEach((e=>{a.appendChild(L(e))})),0===t.length&&a.appendChild(v({name:"li",classList:["main-search__result-empty"],childrens:[{name:"h4",text:"Товар не найден"}]})),e.classList.remove("main-search_refined")}))}),300)})),e},y=()=>{const e=v({name:"header",classList:["header"]}),t=v({name:"div",classList:["header__container"]});return t.appendChild(v({name:"img",classList:["logo"],attributes:{src:"https://i.imgur.com/wVTYpcd.png",alt:"logo"}})),t.appendChild(g()),t.appendChild(v({name:"div",classList:["icon-cart"]})),e.appendChild(t),e},w=()=>{const e=v({name:"footer",classList:["footer"]}),t=v({name:"div",classList:["footer__container"]});return t.appendChild(v({name:"div",classList:["footer__information"],childrens:[{name:"div",classList:["footer__logo"],childrens:[{name:"img",attributes:{src:"https://i.imgur.com/wVTYpcd.png",alt:"logo"}}]},{name:"div",classList:["footer__text"],childrens:[{name:"p",text:"Jelly Belly Candy Company is dedicated to selling the highest quality confections, delivering superior customer service. "}]}]})),t.appendChild(v({name:"div",classList:["footer__social-media"],childrens:[{name:"div",classList:["footer__social-media-title"],childrens:[{name:"h3",text:"Social Media"}]},{name:"div",classList:["footer__social-media-links"],childrens:[{name:"a",attributes:{href:"https://www.instagram.com/"},childrens:[{name:"span",classList:["icon-instagram"]}]},{name:"a",attributes:{href:"https://web.telegram.org/a/"},childrens:[{name:"span",classList:["icon-telegram"]}]},{name:"a",attributes:{href:"https://twitter.com/?lang=ru"},childrens:[{name:"span",classList:["icon-twitter"]}]}]}]})),t.appendChild(v({name:"div",classList:["footer__location"],childrens:[{name:"h3",text:"Location"},{name:"a",attributes:{href:"https://www.google.by/maps/"},childrens:[{name:"span",classList:["icon-location"]}]},{name:"h4",text:"5th Avenue, NY, USA "}]})),e.appendChild(t),e};function E(e,t){t.addEventListener("click",S);const n=document.createElement("div");n.classList.add("basket");const a=document.createElement("div");a.classList.add("basket_head"),n.appendChild(a);const i=document.createElement("h2");i.innerText="Your Basket",a.appendChild(i);const s=document.createElement("button");s.addEventListener("click",C),s.classList.add("basket_delete-button"),s.textContent="Delete all",a.appendChild(s);const c=document.createElement("button");c.classList.add("basket_close"),c.innerHTML="&times;",c.addEventListener("click",N),a.appendChild(c);const d=document.createElement("div");d.classList.add("basket-field"),n.appendChild(d);const r=document.createElement("div");r.classList.add("basket-field_wrapper"),d.appendChild(r),e.appendChild(n)}function C(){d(e,[]);document.querySelector(".basket-field_wrapper").innerHTML=""}async function k(){const e=await async function(){const e=await l(),t=$();if(!t)return[];return e.filter((e=>t.find((t=>e.id===t))))}(),t=document.getElementsByClassName("basket-field_wrapper")[0];for(card of e)T(t,card)}async function S(e){document.getElementsByClassName("basket")[0].style.display="block",await q(),H()}async function q(){document.querySelector(".basket-field_wrapper").innerHTML="",await k(),function(){const e=document.querySelector(".basket-field_wrapper"),t=document.createElement("div");t.classList.add("basket-field_wrapper_total-price"),t.innerHTML=`Total price: ${H()}$`,e.appendChild(t)}()}function N(e){document.getElementsByClassName("basket")[0].style.display="none"}function T(e,t){const n=document.createElement("div");n.classList.add("basket-card"),n.id=t.id;const a=function(){const e=$(),t={};for(id of e)id in t?t[id]+=1:t[id]=1;return t}()[t.id],i=a*t.price;n.innerHTML=`\n  <div class="basket-card_img"><img src = "${t.img}"></div>\n  <div class="basket-card_info">\n    <div class="basket-card_info_name">${t.name}</div>\n    <div class="basket-card_info_price">Price ${i}$</div>\n  </div>\n  <div class="basket-card_quantity">\n  <button type="button" class="basket-card_quantity_minus">-</button>\n  <div class="basket-card_quantity_number">${a}</div>\n  <button type="button" class="basket-card_quantity_plus">+</button>\n  </div>\n  <div class="basket-card_btn">\n  <span class="icon-trash1">\n  </div>\n  `;n.querySelector(".basket-card_quantity_minus").addEventListener("click",x);n.querySelector(".basket-card_quantity_plus").addEventListener("click",M);n.querySelector(".icon-trash1").addEventListener("click",B),e.appendChild(n)}async function x(t){const n=t.target.parentNode.parentNode.id,a=$(),i=a.indexOf(n);a.splice(i,1),d(e,a),await q()}async function M(t){const n=t.target.parentNode.parentNode.id,a=$();a.push(n),d(e,a),await q()}function $(){return c(e)}async function B(t){const n=$(),a=t.target.parentNode.parentNode.id,i=n.filter((function(e){return e!==a}));d(e,i),await q()}function H(){const e=document.querySelectorAll(".basket-card_info_price");let t=0;for(card of e){let e=card.innerText;t+=+e.substring(6,e.length-1)}return t}window.addEventListener("DOMContentLoaded",(function(){document.querySelector(".icon-cart")})),async function(){const e=document.getElementById("root");e.appendChild(y());let t=document.querySelector(".icon-cart");await E(e,t),a(e,await s());let n=await l();n=function(e){let t,n=e.length;for(;0!=n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}(n),n=n.slice(0,6),h(e,n),f(e,await _()),e.appendChild(w())}();
//# sourceMappingURL=index.a6e6dad4.js.map
