const setup = async () => {
    const parser = new DOMParser()
    const resp = await fetch( './template.html' )
    const html = await resp.text()
    const template = parser.parseFromString( html, 'text/html' ).querySelector( 'template' )

    // Define a custom HTML element by extending HTMLElement
    return class ApitiDataTable extends HTMLElement {
        constructor() {
            super();
            this.attachShadow( { mode: 'open' } ).appendChild( template.content.cloneNode( true ) )

        }

        // Observed attributes to watch for changes
        static get observedAttributes() {
            return [ 'data', 'columns' ];
        }

        // Called when the element is added to the DOM
        connectedCallback() {
            this.render();
        }

        // Called when an observed attribute is changed
        attributeChangedCallback( name, oldValue, newValue ) {
            if ( oldValue !== newValue ) {
                this.render();
            }
        }

        // Render the table
        render() {
            const data = JSON.parse( this.getAttribute( 'data' ) || '[]' );
            const columns = JSON.parse( this.getAttribute( 'columns' ) || '[]' );

            this.shadowRoot.innerHTML = template.content.cloneNode( true );
        }
    }
}

export default await setup()