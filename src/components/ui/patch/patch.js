import { apiRequest } from "../../../core/api.js";

function createPatch(root, patches) {
  const patchContainer = document.createElement("div");
  patchContainer.classList.add("patch");

  for (let patch of patches) {
    const patchImage = document.createElement("div");
    patchImage.classList.add("patch_img");
    const imageElement = document.createElement("img");
    imageElement.src = patch.img;
    patchImage.appendChild(imageElement);
    patchContainer.appendChild(patchImage);
  }
  const patchTextContainer = document.createElement("div");
  patchTextContainer.classList.add("patch_img");
  const patchText = document.createElement("h2");
  patchText.innerText = `hi vasya`;
  patchTextContainer.appendChild(patchText);
  patchContainer.appendChild(patchTextContainer);

  root.appendChild(patchContainer);
}

async function getPatchesImg() {
  const patchURL = "https://64564c932e41ccf169191429.mockapi.io/api/v1/patches";
  let result = apiRequest(patchURL);
  return result;
}

export { createPatch, getPatchesImg };
