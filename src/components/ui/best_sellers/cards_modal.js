function createModal(root) {
    const imageModal = document.createElement("div");
    imageModal.classList.add("modal");
    imageModal.setAttribute("id", "myModal");
  
    imageModal.innerHTML = `
    <span class="modal_close">&times;</span>
    <div class="modal_content">
      <img class="modal_img">
      <div id="caption"></div>
    </div>
    `;
    const span = imageModal.querySelector(".modal_close");
    span.onclick = closeModal;
  
    root.appendChild(imageModal);
  }
  
  function openModal() {
    const modalImage = document.getElementsByClassName("modal_img")[0];
    const captionText = document.getElementById("caption");
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    modalImage.src = this.src;
    const card = this.parentNode.parentNode;
    captionText.innerHTML = card.querySelector(".card_info_name").innerText;
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  export {createModal, openModal}