import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let instance;

function galleryHTML() {
    return galleryItems.map(({preview, description, original}) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
                </a>
            </li>
        `;
    }).join('');
}

gallery.insertAdjacentHTML('beforeend', galleryHTML());

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const largeImageURL = e.target.dataset.source;

    instance = basicLightbox.create(`<img src="${largeImageURL}" width="800" height="600">`,
        {
            onShow: () => document.addEventListener('keydown', closeModal),
            onClose: () => document.removeEventListener('keydown', closeModal),

        })
    instance.show();
}


function closeModal(event) {
    if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModal);
    }
}

console.log(galleryItems);


