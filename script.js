let btnShare = document.getElementById("btn-share-toggle");
let shareContainer = document.getElementById("share-info");

function toggleShareContainer() {
  btnShare.classList.toggle("btn-share-active");
  shareContainer.classList.toggle("share-container-active");
}

btnShare.addEventListener("click", toggleShareContainer);
