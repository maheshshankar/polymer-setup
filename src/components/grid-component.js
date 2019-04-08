import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class GridComponent extends PolymerElement{
    static get template(){
        return html `
            <h1>Grid Component</h1>
        `;
    }
}

customElements.define('grid-component', GridComponent);