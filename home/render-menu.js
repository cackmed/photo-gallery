export default function renderHeader() {
    const html = /*html*/`
            <section class="menu-section">
            <select class="menu">
                <option value="" selected>All Horns</option>
                <option value="1-horn">1 Horn</option>
                <option value="2-honr">2 Horns</option>
                <option value="3-horn">3 Horns</option>
                <option value="100-hron">100 Horns</option>
            </select>
        </section>
    `;
    return html;
}
