import {galleryItems} from './gallery-items.js';


const gallery = document.querySelector('.gallery');
let instance;

function galleryHTML() {
    return  galleryItems.map(({preview, description, original}) => {
        return `
                <li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>
               `;
    })
        .join('');

}

gallery.insertAdjacentHTML('beforeend', galleryHTML());

gallery.addEventListener('click', onGalleryClick);



function onGalleryClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }
    document.addEventListener('keydown', closeModal);
}

function closeModal(event) {
    if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModal);
    }
}

gallery.addEventListener('click', onGalleryClick);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);
