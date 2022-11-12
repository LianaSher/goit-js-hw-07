import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function createMarkup(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const markup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onPictureClick);
window.addEventListener("keydown", onEscPress);

let refOriginalPicture = "";
let modal;

function onPictureClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) return;

  refOriginalPicture = event.target.dataset.source;

  modal = basicLightbox.create(
    `
		<img width="100%" height="100%" src="${refOriginalPicture}">
	`
  );

  modal.show();
}

function onEscPress(evt) {
  if (modal.visible() && evt.code === "Escape") {
    modal.close();
  }
}
