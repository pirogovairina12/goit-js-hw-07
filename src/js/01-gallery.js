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

    const instance = basicLightbox.create(`
    <img src="${e.target.original}">
  `);

    instance.show();
    document.addEventListener("keydown", (event) => onEscPress(event, instance));
}

const onEscPress = (event, instance) => {
    const ESC_KEYCODE = "Escape";
    if (event.code === ESC_KEYCODE) {
        instance.close();
        instance.splice(instance.indexOf(instance), 1);
        document.removeEventListener("keydown", (event) =>
            onEscPress(event, instance)
        );
    }
};

