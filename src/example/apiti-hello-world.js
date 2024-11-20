// Define a custom HTML element by extending HTMLElement
export class ApitiHelloWorld extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow DOM to the custom element
        this.attachShadow( { mode: 'open' } );
    }

    // Lifecycle method called when the element is added to the DOM
    connectedCallback() {
        // Define the HTML template
        const template = document.createElement( 'template' );
        template.innerHTML = `
            <style>
                p {
                    color: blue;
                    font-size: 20px;
                }
            </style>
            <p>Hello, world!</p>
        `;

        // Append the template content to the shadow DOM
        this.shadowRoot.appendChild( template.content.cloneNode( true ) );
    }
}

// Register the custom element with the browser
customElements.define( 'apiti-hello-world', ApitiHelloWorld );