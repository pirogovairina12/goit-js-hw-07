import {galleryItems} from './gallery-items.js';


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

gallery.addEventListener('click', onGalleryClick);


function onGalleryClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const largeImageURL = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${largeImageURL}" width="800" height="600">`);


    instance.show();
    document.addEventListener('keydown', (event) => onEscPress(event, instance));
}

function onEscPress(event, instance) {
    const ESC_KEYCODE = 'Escape';

    if (event.code === ESC_KEYCODE) {
        instance.close();
        document.removeEventListener('keydown', (event) => onEscPress(event, instance));
    }
}

gallery.addEventListener('click', onGalleryClick);

