import Page from './Page.js';

export class Error404 extends Page {
    constructor() {
        super();

        this.template = `
             <section class="section">
                <h1> 404 Error </h1>
            </section>
        `;
    };

    afterRender() {

    }
}

export default Error404;