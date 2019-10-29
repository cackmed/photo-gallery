import renderImages from './render-img.js';
import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
const dev = document.getElementById('grid');
const dropDown = document.querySelector('.menu');

dropDown.addEventListener('change', () => {
    const filterString = dropDown.value;
    let filteredImages = null;

    if (!filterString) {
        filteredImages = images;
    }
    else {
        filteredImages = images.filter(images => {
            if (images.horns === filterString) {
                return true;
            } else {
                return false;
            }
        });
    }
    
    const setImages = filteredImages.map(images => {
        return {
            title: images.title,
            url: images.url,
            description: images.description,
            horns: images.horns,
            keyword: images.keyword,
        };
    });
    render(setImages);
});


const mapArr = ({
    url,
    title,
    description,
    horns,
    keyword,
}) => ({
    title: title,
    url: url,
    description: description,
    horns: horns,
    keyword: keyword,
});

const intialImages = images.map(mapArr);
render(intialImages);

function render(fullyRenderImages) {
    while (dev.lastElementChild) {
        dev.lastElementChild.remove();
    }
    fullyRenderImages.forEach(images => {
        const html = renderImages(images);
        const dom = htmlToDOM(html);
        dev.appendChild(dom);
    });
}
