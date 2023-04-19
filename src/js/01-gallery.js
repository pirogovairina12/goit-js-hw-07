import {galleryItems} from './gallery-items.js';
import * as basicLightbox from '../dist/basicLightbox.min.js';



console.log(galleryItems);

const gallery = document.querySelector('.gallery');


function galleryHTML() {
    return galleryItems.map(({preview, description, original}) => {
        return `
                <li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </li>
               `;
    })
        .join('');

}


gallery.insertAdjacentHTML('beforeend', galleryHTML());

const link = document.querySelector('.gallery__link');

link.addEventListener('click', function (event) {
    event.preventDefault();
});


const img = document.querySelector(".gallery__image");

 img.addEventListener('click', onOriginImgClick);

function  onOriginImgClick(e) {

    if (e.target.classList.contains('gallery__image')) {
        const instance = basicLightbox.create(`
      <img
        class="gallery__image"
        src="${e.target.dataset.original}"
        data-source=""
        alt=""
      />
    `)

        instance.show()
    }
}

// import { galleryItems } from "./gallery-items.js";
//
// const galleryList = document.querySelector(".gallery");
//
// // Create and render gallery items
// const createGalleryItem = ({ preview, original, description }) => `
//   <li class="gallery__item">
//     <a class="gallery__link" href="${original}" data-original-img=${original}>
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>
//   </li>
// `;
//
// galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");
//
// // Store instances in an array
// const instances = [];
//
// // Show corresponding instance when image is clicked
// galleryList.addEventListener("click", (event) => {
//     event.preventDefault();
//     const original = event.target
//         .closest(".gallery__link")
//         .getAttribute("data-original-img");
//     const instance = basicLightbox.create(`
//     <img src="${original}" width="800" height="600">
//   `);
//     instances.push(instance); // Add instance to array
//     instance.show();
//     document.addEventListener("keydown", (event) => onEscPress(event, instance));
// });
//




// // Close instance on Esc key press
// const onEscPress = (event, instance) => {
//     const ESC_KEYCODE = "Escape";
//     if (event.code === ESC_KEYCODE) {
//         instance.close();
//         instances.splice(instances.indexOf(instance), 1); // Remove instance from array
//         document.removeEventListener("keydown", (event) =>
//             onEscPress(event, instance)
//         );
//     }
// };



