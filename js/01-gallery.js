import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryElement = document.querySelector('.gallery');

function getGallery() {
    return galleryItems.map(item => {
        let { preview, original, description } = item;

        return `<div class="gallery__item">
                    <a class="gallery__link" href='${original}'>
                        <img
                        class="gallery__image"
                        src='${preview}'
                        data-source='${original}'
                        alt='${description}'
                        />
                    </a>
                </div>`
    }).join('')
}

function render() {
    const gallery = getGallery();
    galleryElement.insertAdjacentHTML('beforeend', gallery)
}



galleryElement.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.nodeName === 'IMG') {

        const srcOriginal = e.target.getAttribute('data-source');
        let altOriginal = e.target.getAttribute('alt');

        const instance = basicLightbox.create(`
            <img
                class="gallery__image-original"
                src='${srcOriginal}'
                alt='${altOriginal}'
            />
        `)

        instance.show()

        window.addEventListener('keydown', (e) => {
            if (e.code !== 'Escape') {
                return
            }
            instance.close()
        }, {once:true})
    }

})



render();

