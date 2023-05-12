import { createCard } from "../components/cards/cards.js";
import { MainSearch } from "../components/search/search.js";
const root = document.getElementById("root");
createCard(root);

function init() {
  root.appendChild(MainSearch());
}

init();
