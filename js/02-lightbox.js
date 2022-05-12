import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector('.gallery');

function getGallery() {
    return galleryItems.map(item => {
        let { preview, original, description } = item;

        return `
                <a class="gallery__item" href='${original}'>
                    <img
                    class="gallery__image"
                    src='${preview}'
                    alt='${description}'
                    />
                </a>
                `
    }).join('')
}

function render() {
    const gallery = getGallery();
    galleryElement.insertAdjacentHTML('beforeend', gallery)
}

render();

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: '250'});


lightbox.on('show.simplelightbox', function () {});

