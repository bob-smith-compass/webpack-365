class LinksComponent extends HTMLElement {
    connectedCallback() {
        console.log('I am a Component: connectedCallback', this);
        this.innerHTML = `
        <style>
        div {
            color: red;
            background-color: lightyellow;
            padding: 15px;
            border: solid 1px gray;
            border-radius: 5px;
        }
        summary:focus {
            outline: none;
            background-color: lightgreen;
        }
        </style>
        <div>Links
            <details>
            <summary>
                2 Methods of Web Component Writing
            </summary>
            <ol>
                <li>Pure JS</li>
                <li>HTML imports</li>
            </ol>
            </details>
            <a href="https://app.pluralsight.com/player?course=vanilla-web-components-practical-guide&author=leon-revill&name=vanilla-web-components-practical-guide-m1&clip=7&mode=live">html imports</a>
        </div>

        `;
    }
}
window.customElements.define('links-component', LinksComponent);