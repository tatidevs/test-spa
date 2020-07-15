import Page from './Page.js';

export class About extends Page {
    constructor() {
        super();

        this.template = `
           <section class="section">
                <button id="back" class="button back">Go back</button>
                <h1> Just some text </h1>
            </section>
        `;
    };
}

export default About;