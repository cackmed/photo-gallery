export default function renderImage(images) {
    const html = /*html*/`
            <div class="image-container">
            <img src="${images.url}" alt="${images.title} image">
                <h3>${images.title}</h3>
                <p>Number of Horns:${images.horns}</p>
            </div>
    `;
    return html;
}
