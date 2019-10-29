import renderImages from './render-img.js';
import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
const dev = document.getElementById('grid');


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
