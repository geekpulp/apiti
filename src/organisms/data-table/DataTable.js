import ApitiDataTable from './element.js'

const define = async () => {
    let constructor = null

    customElements.define( 'apiti-data-table', ApitiDataTable )
    constructor = await customElements.whenDefined( 'apiti-data-table' )

    return constructor
}

export default await define()