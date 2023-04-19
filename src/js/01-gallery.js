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


gallery.insertAdjacentHTML('afterbegin', galleryHTML());

const link = document.querySelector('.gallery__link');

link.addEventListener('click', function (event) {
    event.preventDefault();
});


const img = document.querySelector(".gallery__image");

 img.addEventListener('click', onOriginImgClick);

function  onOriginImgClick(e) {

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




