import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createMarkup(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    })
    .join("");
}

const markup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
