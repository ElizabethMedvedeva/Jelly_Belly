function getStore(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setStore(key, newStore) {
  localStorage.setItem(key, JSON.stringify(newStore));
}

export{getStore, setStore};