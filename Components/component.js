class MyComponent extends HTMLElement {
    connectedCallback() {
        console.log('I am a Component: connectedCallback', this);
        this.innerHTML = `
        <style>
        p {
            color: red;
            background-color: lightyellow;
            padding: 15px;
            border: solid 1px gray;
            border-radius: 5px;
        }
        </style>
        <script>
        alert('I am a Component'); // Will not get executed
        </script>
        <p>My Web Component</p>
        `;
    }
}
window.customElements.define('my-component', MyComponent);