class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
        p {
            color: red;
            padding: 15px;
            border: solid 1px gray;
            border-radius: 5px;
        }
        </style>
        <p>My Web Component</p>`;
    }
}
window.customElements.define('my-component', MyComponent);